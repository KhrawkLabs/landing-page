import { useEffect, useState } from "react";
import "../styles/NavMenu.css";

const LINKS = [
  { href: "/#produtos", texto: "Produtos" },
  { href: "/#estudio", texto: "Estúdio" },
  { href: "/#metodo", texto: "Método" },
];

export default function NavMenu() {
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const fecharNoDesktop = () => {
      if (window.innerWidth > 880) {
        setMenuAberto(false);
      }
    };

    const fecharComEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuAberto(false);
      }
    };

    window.addEventListener("resize", fecharNoDesktop);
    window.addEventListener("keydown", fecharComEscape);

    return () => {
      window.removeEventListener("resize", fecharNoDesktop);
      window.removeEventListener("keydown", fecharComEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <nav className="nav" aria-label="Menu principal">
      <div className="container nav-inner">
        <a href="/" className="nav-marca" onClick={fecharMenu}>
          <img src="/khrawk.svg" alt="" aria-hidden="true" />
          <span>
            Khrawk<em>Labs</em>
          </span>
        </a>

        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.texto}</a>
            </li>
          ))}
        </ul>

        <div className="nav-acoes">
          <a href="/#contato" className="nav-cta">
            Contato
          </a>

          <button
            type="button"
            className={`nav-toggle ${menuAberto ? "aberto" : ""}`}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            onClick={() => setMenuAberto((aberto) => !aberto)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`nav-mobile ${menuAberto ? "aberto" : ""}`}
        hidden={!menuAberto}
      >
        <div className="container nav-mobile-inner">
          {LINKS.map((link, i) => (
            <a key={link.href} href={link.href} onClick={fecharMenu}>
              <span className="nav-mobile-num">0{i + 1}</span>
              {link.texto}
            </a>
          ))}
          <a href="/#contato" onClick={fecharMenu}>
            <span className="nav-mobile-num">04</span>
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
