import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import { useRevelar } from "../hooks/useRevelar";
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

const WHATSAPP_ORCAMENTO =
  "https://wa.me/5544999035478?text=" +
  encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento para uma landing page.",
  );

export default function App() {
  useRevelar();

  return (
    <>
      <NavMenu />

      <main>
        <header className="hero">
          <div className="container">
            <div className="hero-topo">
              <p className="rotulo">Khrawk Labs</p>
              <p className="rotulo">Software house</p>
              <p className="rotulo">Maringá · PR</p>
            </div>

            <div className="hero-titulo">
              <img
                src="/khrawk.svg"
                alt=""
                aria-hidden="true"
                className="hero-marca"
              />
              <h1>
                Desenvolvemos software
                <br />
                que entra
                <br />
                <span className="serifa">em operação.</span>
              </h1>
            </div>

            <div className="hero-corpo">
              <div>
                <p className="texto">
                  A Khrawk Labs é uma software house enxuta. Conduzimos o ciclo
                  completo — modelagem de dados, API, interface e publicação —
                  com <strong>uma única equipe responsável do início ao fim</strong>.
                  Menos camadas entre o problema do cliente e quem escreve o
                  código.
                </p>
                <div className="hero-acoes">
                  <a href="#produtos" className="botao">
                    <span>Conheça nosso trabalho</span>
                  </a>
                  <a href="#contato" className="botao botao-vazado">
                    <span>Entrar em contato</span>
                  </a>
                </div>
              </div>

              <dl className="ficha">
                <div>
                  <dt>Em operação</dt>
                  <dd>Velo — SaaS para oficinas mecânicas</dd>
                </div>
                <div>
                  <dt>Atuação</dt>
                  <dd>Produtos próprios e desenvolvimento sob medida</dd>
                </div>
                <div>
                  <dt>Entrega</dt>
                  <dd>Do levantamento ao deploy, ponta a ponta</dd>
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
            <div className="secao-topo" data-revelar>
              <div>
                <p className="rotulo">O que fazemos</p>
                <h2>
                  Produtos próprios
                  <br />e projetos <span className="serifa">sob medida</span>.
                </h2>
              </div>
              <p className="texto">
                Cada item abaixo traz o estágio real em que se encontra — em
                operação com cliente, em desenvolvimento ou em validação
                comercial. Ao final, os serviços que prestamos para outras
                empresas.
              </p>
            </div>

            <div className="indice">
              <Link to="/projetos/velo" className="indice-item" data-revelar>
                <div className="indice-linha">
                  <div className="indice-num">01</div>
                  <div className="indice-nome">
                    <h3>Velo</h3>
                    <span className="indice-tag">SaaS · Oficinas mecânicas</span>
                  </div>
                  <p className="indice-desc">
                    A operação completa de uma oficina em uma única tela: ordem
                    de serviço, histórico do veículo, controle de caixa, fiado,
                    assinatura recorrente e emissão de NFS-e. Arquitetura
                    multi-tenant em .NET 10 e PostgreSQL.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-operacao">Em operação</span>
                    <span className="indice-seta">Ver →</span>
                  </div>
                </div>
              </Link>

              <Link to="/projetos/auduo" className="indice-item" data-revelar>
                <div className="indice-linha">
                  <div className="indice-num">02</div>
                  <div className="indice-nome">
                    <h3>AuDuo</h3>
                    <span className="indice-tag">App · Áudio em tempo real</span>
                  </div>
                  <p className="indice-desc">
                    Duas pessoas treinando juntas, cada uma ouvindo a própria
                    música. Ao acionar o microfone, o volume abaixa nos dois
                    aparelhos automaticamente. Projeto pessoal, sem finalidade
                    comercial.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-construcao">
                      Em construção
                    </span>
                    <span className="indice-seta">Ver →</span>
                  </div>
                </div>
              </Link>

              <div className="indice-item" data-revelar>
                <div className="indice-linha">
                  <div className="indice-num">03</div>
                  <div className="indice-nome">
                    <h3>Manutenção em Campo</h3>
                    <span className="indice-tag">SaaS · Climatização</span>
                  </div>
                  <p className="indice-desc">
                    QR Code por equipamento: o técnico escaneia, consulta o
                    histórico, executa a ordem de serviço, preenche o checklist,
                    anexa fotos e colhe a assinatura. Relatório em PDF e PMOC
                    gerados automaticamente. Em validação com as primeiras
                    empresas.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-validacao">
                      Em validação
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_ORCAMENTO}
                target="_blank"
                rel="noreferrer"
                className="indice-item"
                data-revelar
              >
                <div className="indice-linha">
                  <div className="indice-num">04</div>
                  <div className="indice-nome">
                    <h3>Landing pages e sites</h3>
                    <span className="indice-tag">Serviço · Sob medida</span>
                  </div>
                  <p className="indice-desc">
                    Também desenvolvemos landing pages e sites institucionais
                    sob medida: design próprio, layout responsivo, boa
                    performance e publicação com domínio configurado. Escopo e
                    prazo definidos antes do início.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-servico">Sob demanda</span>
                    <span className="indice-seta">Orçamento no WhatsApp →</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="secao" id="empresa">
          <div className="container sobre">
            <div className="sobre-texto" data-revelar>
              <p className="rotulo" style={{ marginBottom: 20 }}>
                A empresa
              </p>
              <h2>
                Equipe enxuta,
                <br />
                sem <span className="serifa">intermediários</span>.
              </h2>
              <p className="texto" style={{ marginTop: 28 }}>
                A Khrawk Labs nasceu de uma convicção simples: software de
                qualidade não deveria ser privilégio de empresa grande.
                Oficinas, prestadoras de serviço e comércios locais merecem a
                mesma qualidade de ferramenta que uma empresa de tecnologia usa
                internamente.
              </p>
              <p className="texto">
                Na prática, isso significa decisão rápida, arquitetura enxuta e
                responsabilidade de ponta a ponta. Quem compreende o problema é
                quem escreve o código e quem responde quando algo falha.
              </p>
            </div>

            <ul className="sobre-lista" data-revelar>
              <li>Quem projeta é quem entrega</li>
              <li>Arquitetura simples por decisão, não por omissão</li>
              <li>Software em produção vale mais que apresentação</li>
              <li>Escopo definido e prazo realista</li>
            </ul>
          </div>
        </section>

        <section className="secao" id="metodo">
          <div className="container">
            <div className="secao-topo" data-revelar>
              <div>
                <p className="rotulo">Como trabalhamos</p>
                <h2>
                  Três princípios que orientam
                  <br />
                  cada <span className="serifa">entrega</span>.
                </h2>
              </div>
            </div>

            <div className="principios">
              <article className="principio" data-revelar>
                <p className="principio-num">01</p>
                <h3>Em produção, não em apresentação</h3>
                <p>
                  Entregamos software na mão do usuário. Publicamos cedo e
                  evoluímos sobre uso real, não sobre suposição.
                </p>
              </article>

              <article className="principio" data-revelar>
                <p className="principio-num">02</p>
                <h3>A mesma equipe do início ao fim</h3>
                <p>
                  Sem repasses nem ruído entre etapas. Quem levanta o problema
                  escreve o código e executa o deploy.
                </p>
              </article>

              <article className="principio" data-revelar>
                <p className="principio-num">03</p>
                <h3>Simplicidade que sustenta o crescimento</h3>
                <p>
                  Sem complexidade desnecessária. Arquitetura enxuta, que escala
                  sem acumular camadas de abstração.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="secao" id="contato">
          <div className="container" data-revelar>
            <p className="rotulo">Contato</p>
            <h2 style={{ marginTop: 20 }}>
              Conte o seu desafio.
              <br />
              Devolvemos <span className="serifa">a solução</span>.
            </h2>

            <a href="mailto:khrawklabs@outlook.com" className="contato-email">
              khrawklabs@outlook.com
            </a>

            <div className="hero-acoes" style={{ marginTop: 0 }}>
              <a
                href={WHATSAPP_ORCAMENTO}
                target="_blank"
                rel="noreferrer"
                className="botao"
              >
                <span>Solicitar orçamento no WhatsApp</span>
              </a>
              <a href="tel:+5544999035478" className="botao botao-vazado">
                <span>+55 (44) 99903-5478</span>
              </a>
            </div>

            <div className="contato-canais" style={{ marginTop: 32 }}>
              <span style={{ color: "var(--osso-45)" }}>
                Maringá · Paraná · Brasil
              </span>
              <span style={{ color: "var(--osso-45)" }}>
                Atendimento em todo o Brasil
              </span>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
