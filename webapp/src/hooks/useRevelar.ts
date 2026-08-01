import { useEffect } from "react";

/**
 * Revela os elementos marcados com `data-revelar` quando entram na viewport.
 *
 * Decisões que sustentam o comportamento:
 * - Revela **uma vez só**. Reanimar ao rolar de volta é chamativo e cansa.
 * - O estado escondido vive sob `.com-revelacao`, classe que o script inline do
 *   `index.html` aplica antes da primeira pintura. Sem JS, a classe nunca entra
 *   e todo o conteúdo aparece normalmente.
 * - `prefers-reduced-motion` e navegador sem IntersectionObserver revelam tudo
 *   de imediato.
 *
 * Sobre a redundância entre observer e listener de rolagem: o conteúdo do site
 * inteiro depende deste código para ficar visível. Se o observer não disparar
 * — página não composta, aba em segundo plano, bug de motor — o texto sumiria
 * permanentemente. O listener é a rede que impede esse modo de falha, e ambos
 * se desligam sozinhos assim que o último elemento é revelado.
 */
export function useRevelar() {
  useEffect(() => {
    const alvos = Array.from(
      document.querySelectorAll<HTMLElement>("[data-revelar]"),
    );
    if (!alvos.length) return;

    const revelarTudo = () =>
      alvos.forEach((el) => el.classList.add("revelado"));

    const semMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (semMovimento || typeof IntersectionObserver === "undefined") {
      revelarTudo();
      return;
    }

    let pendentes = alvos;
    let ultimaVarredura = 0;
    let agendado: ReturnType<typeof setTimeout> | 0 = 0;

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) marcar(entrada.target as HTMLElement);
        }
      },
      // Dispara pouco antes de encostar na borda inferior, para o movimento
      // terminar enquanto o elemento ainda está entrando no campo de visão.
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    function marcar(el: HTMLElement) {
      if (el.classList.contains("revelado")) return;
      el.classList.add("revelado");
      observador.unobserve(el);
      pendentes = pendentes.filter((outro) => outro !== el);
      if (!pendentes.length) desligar();
    }

    const naVista = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    };

    const varrer = () => {
      ultimaVarredura = Date.now();
      agendado = 0;
      for (const el of [...pendentes]) if (naVista(el)) marcar(el);
    };

    // Estrangulamento por relógio, e não por requestAnimationFrame: rAF não
    // dispara em aba de segundo plano nem em página que não está compondo
    // quadros, e é justamente aí que a rede de segurança precisa funcionar.
    const agendarVarredura = () => {
      if (agendado) return;
      const desde = Date.now() - ultimaVarredura;
      if (desde >= 100) varrer();
      else agendado = setTimeout(varrer, 100 - desde);
    };

    function desligar() {
      observador.disconnect();
      window.removeEventListener("scroll", agendarVarredura);
      window.removeEventListener("resize", agendarVarredura);
      if (agendado) clearTimeout(agendado);
      agendado = 0;
    }

    alvos.forEach((el) => observador.observe(el));
    window.addEventListener("scroll", agendarVarredura, { passive: true });
    window.addEventListener("resize", agendarVarredura, { passive: true });

    // Primeira varredura: cobre quem já nasce visível (link com âncora, ou
    // recarregar a página no meio do documento). A segunda, atrasada, cobre o
    // deslocamento de layout que as fontes causam ao terminar de carregar.
    varrer();
    const apósFontes = setTimeout(varrer, 400);

    return () => {
      clearTimeout(apósFontes);
      desligar();
    };
  }, []);
}
