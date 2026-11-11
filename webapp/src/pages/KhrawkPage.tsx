import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Khrawk.css";

const CANAIS = [
  {
    id: "yt",
    nome: "YouTube",
    arroba: "@khrawk",
    url: "https://www.youtube.com/@khrawk",
    selo: "Vídeo completo",
    texto: "Gameplay, reacts e notícias em vídeo completo. Se inscreve, é de graça.",
    acao: "Se inscrever",
  },
  {
    id: "tt",
    nome: "TikTok",
    arroba: "@khrawk",
    url: "https://www.tiktok.com/@khrawk",
    selo: "Vídeo curto",
    texto: "Cortes e vídeos curtos, direto ao ponto.",
    acao: "Seguir",
  },
  {
    id: "ig",
    nome: "Instagram",
    arroba: "@khrawk.gg",
    url: "https://www.instagram.com/khrawk.gg/",
    selo: "Foto e reels",
    texto: "Reels, bastidores e avisos do que vem por aí.",
    acao: "Seguir",
  },
  {
    id: "tw",
    nome: "Twitch",
    arroba: "/khrawk",
    url: "https://www.twitch.tv/khrawk",
    selo: "Ao vivo",
    texto: "Lives com chat aberto. Segue o canal pra ser avisado quando começar.",
    acao: "Seguir o canal",
  },
];

const LIVEPIX = "https://livepix.gg/khrawk";

const LETREIRO = [
  "Gameplay",
  "Reacts",
  "Notícias",
  "Lives",
  "Se inscreve aí",
  "Ativa o sininho",
];

export default function KhrawkPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const tituloAnterior = document.title;
    document.title = "KHRAWK — canais oficiais";
    return () => {
      document.title = tituloAnterior;
    };
  }, []);

  return (
    <div className="kh">
      <header className="kh-topo">
        <span className="kh-topo-marca">KHRAWK</span>
        <nav aria-label="Seções da página">
          <a href="#canais">Canais</a>
          <a href="#pix">Pix</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="kh-hero">
          <span className="kh-adesivo kh-adesivo-a">Site oficial</span>

          <div className="kh-avatar">
            <img
              src="/khrawk-conteudos.jpg"
              alt="Logo do KHRAWK: personagem de capacete neon com a cidade ao fundo"
              width={512}
              height={512}
            />
          </div>

          <h1 className="kh-titulo">KHRAWK</h1>
          <p className="kh-sub">
            Conteúdos<span aria-hidden="true">.</span>
          </p>

          <p className="kh-temas">Gameplay • Reacts • Notícias</p>

          <p className="kh-lema">
            <strong>Bem-vindo ao universo KHRAWK.</strong>
            <br />
            Escolha onde acompanhar.
          </p>

          <div className="kh-pilulas">
            {CANAIS.map((canal) => (
              <a
                key={canal.id}
                href={canal.url}
                target="_blank"
                rel="noreferrer"
                className={`kh-pilula kh-${canal.id}`}
              >
                {canal.nome}
              </a>
            ))}
            <a
              href={LIVEPIX}
              target="_blank"
              rel="noreferrer"
              className="kh-pilula kh-px"
            >
              LivePix
            </a>
          </div>
        </section>

        <div className="kh-letreiro" aria-hidden="true">
          <div className="kh-letreiro-trilha">
            {[0, 1].map((copia) => (
              <ul key={copia}>
                {LETREIRO.map((frase) => (
                  <li key={frase}>{frase}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <section className="kh-secao" id="canais">
          <h2 className="kh-h2">
            Onde me <span>achar</span>
          </h2>
          <p className="kh-h2-sub">Todos os canais oficiais em um lugar só.</p>

          <div className="kh-cartoes">
            {CANAIS.map((canal) => (
              <a
                key={canal.id}
                href={canal.url}
                target="_blank"
                rel="noreferrer"
                className={`kh-cartao kh-${canal.id}`}
              >
                <span className="kh-cartao-selo">{canal.selo}</span>
                <h3>{canal.nome}</h3>
                <span className="kh-cartao-arroba">{canal.arroba}</span>
                <p>{canal.texto}</p>
                <span className="kh-cartao-acao">{canal.acao} ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="kh-secao" id="pix">
          <a
            href={LIVEPIX}
            target="_blank"
            rel="noreferrer"
            className="kh-pix"
          >
            <span className="kh-adesivo kh-pix-adesivo">Apoie o canal</span>
            <h2 className="kh-h2">
              Manda um <span>pix</span>
            </h2>
            <p>
              Pelo LivePix a sua mensagem aparece na live.
            </p>
            <span className="kh-pix-acao">livepix.gg/khrawk ↗</span>
          </a>
        </section>

        <section className="kh-secao" id="contato">
          <h2 className="kh-h2">
            Parceria & <span>contato</span>
          </h2>
          <p className="kh-h2-sub">
            Propostas, publis e convites.
          </p>

          <div className="kh-contatos">
            <a href="mailto:khrawklabs@outlook.com" className="kh-contato">
              <span className="kh-contato-rotulo">E-mail</span>
              <strong>khrawklabs@outlook.com</strong>
              <span>Negócios e parcerias ↗</span>
            </a>
            <a
              href="https://www.instagram.com/khrawk.gg/"
              target="_blank"
              rel="noreferrer"
              className="kh-contato"
            >
              <span className="kh-contato-rotulo">Instagram DM</span>
              <strong>@khrawk.gg</strong>
              <span>Manda mensagem ↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="kh-rodape">
        <span>© {new Date().getFullYear()} KHRAWK</span>
        <span>
          Site feito pela{" "}
          <Link to="/">Khrawk Labs</Link>.
        </span>
      </footer>
    </div>
  );
}
