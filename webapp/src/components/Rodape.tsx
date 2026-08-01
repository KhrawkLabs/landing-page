import { Link } from "react-router-dom";
import "../styles/Rodape.css";

export default function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="container rodape-grade">
        <div className="rodape-marca">
          <img src="/khrawk.svg" alt="" aria-hidden="true" />
          <p>
            Khrawk Labs — software house. Projetamos, desenvolvemos e mantemos
            software em produção.
          </p>
        </div>

        <nav className="rodape-coluna" aria-label="Navegação do rodapé">
          <p className="rotulo">Navegar</p>
          <a href="/#produtos">O que fazemos</a>
          <a href="/#empresa">A empresa</a>
          <a href="/#metodo">Método</a>
          <a href="/#contato">Contato</a>
        </nav>

        <nav className="rodape-coluna" aria-label="Produtos">
          <p className="rotulo">Produtos</p>
          <Link to="/projetos/velo">Velo</Link>
          <Link to="/projetos/auduo">AuDuo</Link>
        </nav>

        <div className="rodape-coluna">
          <p className="rotulo">Contato</p>
          <a href="mailto:khrawklabs@outlook.com">khrawklabs@outlook.com</a>
          <a href="tel:+5544999035478">+55 (44) 99903-5478</a>
          <a href="https://wa.me/5544999035478" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container rodape-base">
        <span>© {anoAtual} Khrawk Labs</span>
        <span>Maringá · Paraná · Brasil</span>
      </div>
    </footer>
  );
}
