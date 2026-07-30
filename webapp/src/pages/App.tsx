import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import "../styles/App.css";

const STACK = [
  ".NET / C#",
  "React",
  "TypeScript",
  "PostgreSQL",
  "React Native",
  "Docker",
  "CI/CD",
  "Entity Framework",
  "Railway",
];

export default function App() {
  return (
    <>
      <NavMenu />

      <main>
        <header className="hero">
          <div className="container">
            <div className="hero-topo">
              <p className="rotulo">Khrawk Labs</p>
              <p className="rotulo">Estúdio de produto</p>
              <p className="rotulo">Maringá · PR</p>
            </div>

            <div className="hero-titulo">
              <h1>
                A gente escreve,
                <br />
                sobe e mantém
                <br />
                <span className="serifa">no ar.</span>
              </h1>
              <img
                src="/khrawk.svg"
                alt=""
                aria-hidden="true"
                className="hero-marca"
              />
            </div>

            <div className="hero-corpo">
              <div>
                <p className="texto">
                  A Khrawk Labs é pequena por escolha. O mesmo par de mãos
                  modela o banco, escreve a API, monta a interface e faz o
                  deploy. <strong>Sem repasse entre etapas</strong> e sem
                  apresentação bonita antes de existir código rodando.
                </p>
                <div className="hero-acoes">
                  <a href="#produtos" className="botao">
                    <span>Ver os produtos</span>
                  </a>
                  <a href="#contato" className="botao botao-vazado">
                    <span>Falar com a gente</span>
                  </a>
                </div>
              </div>

              <dl className="ficha">
                <div>
                  <dt>Em operação</dt>
                  <dd>Velo — SaaS para oficinas mecânicas</dd>
                </div>
                <div>
                  <dt>Modelo</dt>
                  <dd>Produto próprio + software sob medida</dd>
                </div>
                <div>
                  <dt>Entrega</dt>
                  <dd>Da descoberta ao deploy, ponta a ponta</dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-trilha">
            {[0, 1].map((copia) => (
              <ul className="ticker-grupo" key={copia}>
                {STACK.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <section className="secao" id="produtos" style={{ borderTop: "none" }}>
          <div className="container">
            <div className="secao-topo">
              <div>
                <p className="rotulo">O que construímos</p>
                <h2>
                  Três produtos.
                  <br />
                  Cada um em um <span className="serifa">estágio</span>.
                </h2>
              </div>
              <p className="texto">
                Nada aqui é conceito de slide. Um está em produção com cliente
                real, um está sendo escrito e um ainda está sendo validado com
                empresa antes de virar código. O estágio vem escrito em cada
                linha.
              </p>
            </div>

            <div className="indice">
              <Link to="/projetos/velo" className="indice-item">
                <div className="indice-linha">
                  <div className="indice-num">01</div>
                  <div className="indice-nome">
                    <h3>Velo</h3>
                    <span className="indice-tag">SaaS · Oficinas mecânicas</span>
                  </div>
                  <p className="indice-desc">
                    A operação inteira de uma oficina em uma tela: ordem de
                    serviço, histórico do veículo, caixa, fiado, assinatura
                    recorrente e emissão de NFS-e. Multi-tenant em .NET 10 e
                    PostgreSQL.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-operacao">Em operação</span>
                    <span className="indice-seta">Ver →</span>
                  </div>
                </div>
              </Link>

              <Link to="/projetos/duo" className="indice-item">
                <div className="indice-linha">
                  <div className="indice-num">02</div>
                  <div className="indice-nome">
                    <h3>Duo</h3>
                    <span className="indice-tag">App · Áudio em tempo real</span>
                  </div>
                  <p className="indice-desc">
                    Dois amigos treinando juntos, cada um ouvindo a própria
                    música. Aperta o botão e a música abaixa dos dois lados
                    sozinha — dá pra falar sem tirar o fone. Projeto pessoal,
                    sem pretensão comercial.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-construcao">
                      Em construção
                    </span>
                    <span className="indice-seta">Ver →</span>
                  </div>
                </div>
              </Link>

              <div className="indice-item">
                <div className="indice-linha">
                  <div className="indice-num">03</div>
                  <div className="indice-nome">
                    <h3>Manutenção em Campo</h3>
                    <span className="indice-tag">SaaS · Climatização</span>
                  </div>
                  <p className="indice-desc">
                    QR Code por equipamento: o técnico escaneia, vê o histórico,
                    executa a OS, preenche o checklist, anexa foto e colhe a
                    assinatura. O PDF e o PMOC saem automáticos. Em conversa com
                    as primeiras empresas antes de abrir a IDE.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-validacao">
                      Em validação
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="secao" id="estudio">
          <div className="container sobre">
            <div className="sobre-texto">
              <p className="rotulo" style={{ marginBottom: 20 }}>
                O estúdio
              </p>
              <h2>
                Time pequeno,
                <br />
                sem <span className="serifa">intermediário</span>.
              </h2>
              <p className="texto" style={{ marginTop: 28 }}>
                A Khrawk Labs nasceu de uma inconformidade simples: software bom
                não devia ser privilégio de empresa grande. Oficina, prestadora
                de serviço e negócio de bairro merecem a mesma qualidade de
                ferramenta que uma empresa de tecnologia usa internamente.
              </p>
              <p className="texto">
                Na prática isso significa decisão rápida, arquitetura enxuta e
                responsabilidade de ponta a ponta. Quem entende o problema é
                quem escreve o código e quem atende quando alguma coisa quebra.
              </p>
            </div>

            <ul className="sobre-lista">
              <li>Quem desenha é quem entrega</li>
              <li>Arquitetura simples por decisão, não por preguiça</li>
              <li>Produto no ar vale mais que apresentação bonita</li>
              <li>Escopo pequeno e honesto em vez de promessa grande</li>
            </ul>
          </div>
        </section>

        <section className="secao" id="metodo">
          <div className="container">
            <div className="secao-topo">
              <div>
                <p className="rotulo">Como trabalhamos</p>
                <h2>
                  Três princípios que valem
                  <br />
                  mais que um <span className="serifa">manifesto</span>.
                </h2>
              </div>
            </div>

            <div className="principios">
              <article className="principio">
                <p className="principio-num">01</p>
                <h3>Em produção, não na apresentação</h3>
                <p>
                  Sucesso é software na mão do usuário. Colocamos em produção
                  cedo e evoluímos em cima de uso real, não de suposição.
                </p>
              </article>

              <article className="principio">
                <p className="principio-num">02</p>
                <h3>O mesmo time do começo ao fim</h3>
                <p>
                  Sem repasse e sem ruído entre etapas. Quem descobre o problema
                  é quem escreve o código e quem aperta o deploy.
                </p>
              </article>

              <article className="principio">
                <p className="principio-num">03</p>
                <h3>Simples que aguenta crescer</h3>
                <p>
                  Nada de complexidade para parecer inteligente. Arquitetura
                  enxuta que escala sem virar bola de neve de abstração.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="secao" id="contato">
          <div className="container">
            <p className="rotulo">Contato</p>
            <h2 style={{ marginTop: 20 }}>
              Traga o problema.
              <br />
              A gente devolve <span className="serifa">o produto</span>.
            </h2>

            <a
              href="mailto:khrawklabs@outlook.com"
              className="contato-email"
            >
              khrawklabs@outlook.com
            </a>

            <div className="contato-canais">
              <a href="tel:+5544999035478">+55 (44) 99903-5478</a>
              <a
                href="https://wa.me/5544999035478"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <span style={{ color: "var(--osso-45)" }}>Maringá · Paraná</span>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
