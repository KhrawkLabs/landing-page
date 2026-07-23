import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import "../styles/App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavMenu />
      <main>
        <header className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="badge">Alcateia · Tecnologia</span>
              <h1>
                Ideias viram produto. E produto{" "}
                <span className="grad">entra em operação.</span>
              </h1>
              <p className="subtitle">
                A Alcateia é um estúdio de produto enxuto. O mesmo time desenha,
                programa e leva para produção — do banco de dados à interface.
                Menos apresentação, mais software rodando de verdade.
              </p>
              <div className="cta-row">
                <a href="#projetos" className="btn">
                  Ver o que construímos
                </a>
                <a href="#contatos" className="btn btn-outline">
                  Falar com a Alcateia
                </a>
              </div>
              <ul className="hero-stats" aria-label="Como a Alcateia trabalha">
                <li>
                  <strong>2</strong>
                  <span>Produtos construídos</span>
                </li>
                <li>
                  <strong>E2E</strong>
                  <span>Da descoberta ao deploy</span>
                </li>
                <li>
                  <strong>In-house</strong>
                  <span>Time próprio, nada terceirizado</span>
                </li>
              </ul>
            </div>
            <aside className="hero-panel" aria-label="Produto em destaque">
              <div className="hero-logo-wrap">
                <img
                  src="/logotipo_nobackground.png"
                  alt="Alcateia Tecnologia"
                  className="hero-logo"
                />
              </div>
              <div className="panel-card">
                <p className="panel-label">Produto em destaque</p>
                <h2>Velo — a oficina inteira em uma tela</h2>
                <ul>
                  <li>Ordens de serviço e histórico de veículos</li>
                  <li>Financeiro, caixa e cobranças automáticas</li>
                  <li>SaaS multi-tenant em .NET, PostgreSQL e React</li>
                </ul>
                <Link to="/projetos/velo" className="link">
                  Ver o Velo por dentro →
                </Link>
              </div>
            </aside>
          </div>
        </header>

        <section className="section trust" aria-label="Tecnologias que usamos">
          <div className="container">
            <p className="section-kicker">O que roda por baixo</p>
            <div className="logo-cloud">
              <span>.NET / C#</span>
              <span>React · TypeScript</span>
              <span>React Native</span>
              <span>PostgreSQL</span>
              <span>Docker · CI/CD</span>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container about-grid">
            <div>
              <p className="section-kicker">Sobre a Alcateia</p>
              <h2>Um time pequeno, afiado e sem intermediário.</h2>
              <p>
                A Alcateia nasceu de uma inconformidade: software bom não devia
                ser privilégio de empresa grande. Aqui o mesmo time pensa o
                problema, escreve o código e leva para produção — decisão rápida,
                qualidade alta e responsabilidade de ponta a ponta.
              </p>
            </div>
            <ul className="highlight-list">
              <li>Quem desenha é quem entrega</li>
              <li>Arquitetura simples por decisão, não por preguiça</li>
              <li>Produto no ar vale mais que apresentação bonita</li>
            </ul>
          </div>
        </section>

        <section id="mvv" className="section alt">
          <div className="container">
            <p className="section-kicker">Como trabalhamos</p>
            <h2>Três princípios que valem mais que um manifesto.</h2>
            <div className="cards">
              <article className="card value-card">
                <p className="value-index">01</p>
                <h3>Em produção, não na apresentação</h3>
                <p>
                  Sucesso é software na mão do usuário, não uma apresentação
                  bonita. Entregamos para produção e evoluímos sobre o uso real.
                </p>
              </article>
              <article className="card value-card">
                <p className="value-index">02</p>
                <h3>O mesmo time, do início ao fim</h3>
                <p>
                  Sem repasses nem ruído entre etapas. Quem descobre o problema é
                  quem escreve o código e quem faz o deploy.
                </p>
              </article>
              <article className="card value-card">
                <p className="value-index">03</p>
                <h3>Simples que aguenta crescer</h3>
                <p>
                  Sem complexidade para parecer inteligente. Arquitetura enxuta
                  que escala sem virar bola de neve.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="container">
            <p className="section-kicker">O que já construímos</p>
            <h2>Produtos reais — não conceito de slide.</h2>
            <div className="cards project-grid">
              <article className="card project-card">
                <p className="project-tag tag-workshop">SaaS · Oficinas</p>
                <h3>Velo</h3>
                <p>
                  A operação inteira de uma oficina mecânica em um só lugar:
                  ordens de serviço, financeiro, emissão de NFS-e e cobranças —
                  tudo digital.
                </p>
                <ul className="project-metrics">
                  <li>OS, clientes e veículos em tempo real</li>
                  <li>Caixa, assinaturas e pagamentos automatizados</li>
                  <li>Multi-tenant em .NET · PostgreSQL · React</li>
                </ul>
                <Link to="/projetos/velo" className="link">
                  Página completa do Velo →
                </Link>
              </article>
              <article className="card project-card">
                <p className="project-tag tag-launch">App · Cidade</p>
                <h3>SOS Maringá</h3>
                <p>
                  Todos os contatos de emergência da cidade na palma da mão —
                  funciona offline e disca em um toque quando cada segundo conta.
                </p>
                <ul className="project-metrics">
                  <li>Consulta rápida, sem depender de internet</li>
                  <li>Navegação pensada para situação crítica</li>
                  <li>Os canais essenciais em segundos</li>
                </ul>
                <Link to="/projetos/sos-maringa" className="link">
                  Página completa do SOS Maringá →
                </Link>
              </article>
              <article className="card project-card">
                <p className="project-tag">Próximo projeto</p>
                <h3>Sua ideia pode ser a próxima</h3>
                <p>
                  Tem um problema que um bom software resolveria? É exatamente
                  esse tipo de desafio que buscamos. Vamos conversar.
                </p>
                <a href="#contatos" className="link">
                  Começar uma conversa →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="contatos" className="section">
          <div className="container">
            <div className="contact-panel">
              <div>
                <p className="section-kicker">Vamos construir</p>
                <h2>Traga o problema. Entregamos o produto.</h2>
                <p>
                  Conte o desafio do seu negócio e desenhamos o caminho mais
                  curto até um produto que funciona. Resposta rápida e direta.
                </p>
              </div>
              <div className="contact-actions">
                <a href="mailto:corporativo.alcateia@outlook.com" className="btn">
                  corporativo.alcateia@outlook.com
                </a>
                <a href="tel:+5544999035478" className="btn btn-outline">
                  (44) 99903-5478
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
