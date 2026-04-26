import { useEffect, useState } from "react";
import "../styles/NavMenu.css";

export default function NavMenu() {
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const fecharNoDesktop = () => {
      if (window.innerWidth > 860) {
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
    <nav className="nav-menu" aria-label="Menu principal">
      <div className="container nav-inner">
        <a href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <img src="/logotipo_nobackground.png" alt="" />
          </span>
          <span className="brand-name">ALCATEIA</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="/#sobre">Sobre</a>
          </li>
          <li>
            <a href="/#mvv">Essência</a>
          </li>
          <li>
            <a href="/#projetos">Projetos</a>
          </li>
          <li>
            <a href="/#contatos">Contato</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="/#contatos" className="nav-cta">
            Vamos conversar
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            onClick={() => setMenuAberto((aberto) => !aberto)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`mobile-menu ${menuAberto ? "open" : ""}`}
        aria-hidden={!menuAberto}
      >
        <div className="container mobile-menu-inner">
          <a href="/#sobre" onClick={fecharMenu}>
            Sobre
          </a>
          <a href="/#mvv" onClick={fecharMenu}>
            Essência
          </a>
          <a href="/#projetos" onClick={fecharMenu}>
            Projetos
          </a>
          <a href="/#contatos" onClick={fecharMenu}>
            Contato
          </a>
          <a href="/#contatos" className="mobile-cta" onClick={fecharMenu}>
            Vamos conversar
          </a>
        </div>
      </div>
    </nav>
  );
}
