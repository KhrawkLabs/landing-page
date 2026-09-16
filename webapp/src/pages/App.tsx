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

const WHATSAPP = "https://wa.me/5544999035478?text=";

const WHATSAPP_CONTATO =
  WHATSAPP +
  encodeURIComponent(
    "Olá! Vim pelo site da Khrawk Labs e gostaria de conversar sobre um projeto.",
  );

const WHATSAPP_SOB_MEDIDA =
  WHATSAPP +
  encodeURIComponent(
    "Olá! Vim pelo site da Khrawk Labs e gostaria de um orçamento para um sistema ou site sob medida.",
  );

const WHATSAPP_MANUTENCAO =
  WHATSAPP +
  encodeURIComponent(
    "Olá! Presto manutenção em campo e me interessei pela plataforma de PMOC que vocês estão construindo.",
  );

const WHATSAPP_ALUGUEL =
  WHATSAPP +
  encodeURIComponent(
    "Olá! Tenho imóveis para alugar e me interessei pelo sistema de gestão de aluguel que vocês estão estudando.",
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
                <p className="rotulo">No que estamos trabalhando</p>
                <h2>
                  Uma amostra do que
                  <br />
                  <span className="serifa">construímos</span>.
                </h2>
              </div>
              <p className="texto">
                Do que já roda com cliente ao que ainda está no papel. Não é
                um catálogo: é o tipo de problema que resolvemos e o estágio
                real de cada frente.
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
                    de serviço, histórico do veículo, controle de caixa, fiado
                    e assinatura recorrente. Arquitetura multi-tenant em .NET
                    10 e PostgreSQL.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-operacao">Em operação</span>
                    <span className="indice-seta">Ver →</span>
                  </div>
                </div>
              </Link>

              <a
                href={WHATSAPP_MANUTENCAO}
                target="_blank"
                rel="noreferrer"
                className="indice-item"
                data-revelar
              >
                <div className="indice-linha">
                  <div className="indice-num">02</div>
                  <div className="indice-nome">
                    <h3>Manutenção em Campo</h3>
                    <span className="indice-tag">SaaS · Climatização · PMOC</span>
                  </div>
                  <p className="indice-desc">
                    Estamos construindo isso junto com empresas de climatização
                    de Maringá. O PMOC é obrigatório por lei e ninguém gosta de
                    fazer: ordem de serviço, checklist, fotos e assinatura no
                    celular do técnico, relatório e PMOC saindo prontos. Se você
                    presta manutenção em campo, queremos conversar.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-validacao">
                      Em validação
                    </span>
                    <span className="indice-seta">Quero conversar →</span>
                  </div>
                </div>
              </a>

              <Link to="/projetos/auduo" className="indice-item" data-revelar>
                <div className="indice-linha">
                  <div className="indice-num">03</div>
                  <div className="indice-nome">
                    <h3>AuDuo</h3>
                    <span className="indice-tag">
                      Laboratório · Mobile · Tempo real
                    </span>
                  </div>
                  <p className="indice-desc">
                    Projeto de laboratório: duas pessoas treinando juntas, cada
                    uma ouvindo a própria música, e o volume abaixa nos dois
                    aparelhos quando alguém fala. Áudio nativo, canal de voz em
                    tempo real e React Native — o mesmo alcance técnico que
                    levamos para projetos de cliente.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-construcao">
                      Em construção
                    </span>
                    <span className="indice-seta">Ver →</span>
                  </div>
                </div>
              </Link>

              <a
                href={WHATSAPP_ALUGUEL}
                target="_blank"
                rel="noreferrer"
                className="indice-item"
                data-revelar
              >
                <div className="indice-linha">
                  <div className="indice-num">04</div>
                  <div className="indice-nome">
                    <h3>Gestão de Aluguel</h3>
                    <span className="indice-tag">
                      SaaS · Proprietários de imóveis
                    </span>
                  </div>
                  <p className="indice-desc">
                    Para quem tem de 2 a 15 imóveis e ainda controla o aluguel
                    por planilha e WhatsApp: contrato, cobrança, lembrete de
                    vencimento e prestação de contas em um só lugar. Pequeno
                    demais para imobiliária, grande demais para planilha.
                    Estamos ouvindo proprietários — se é o seu caso, queremos
                    conversar.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-estudo">Em estudo</span>
                    <span className="indice-seta">Quero conversar →</span>
                  </div>
                </div>
              </a>

              <div className="indice-item" data-revelar>
                <div className="indice-linha">
                  <div className="indice-num">05</div>
                  <div className="indice-nome">
                    <h3>PowerTrain</h3>
                    <span className="indice-tag">App · Treino e progresso</span>
                  </div>
                  <p className="indice-desc">
                    Para quem prefere montar o próprio treino em vez de seguir
                    app engessado: plano por dia e grupo muscular, carga, séries
                    e descanso, dieta manual e progresso com peso, medidas e
                    fotos. Liberdade total, sem recurso básico atrás de
                    paywall.
                  </p>
                  <div className="indice-fim">
                    <span className="status status-estudo">Em estudo</span>
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_SOB_MEDIDA}
                target="_blank"
                rel="noreferrer"
                className="indice-item"
                data-revelar
              >
                <div className="indice-linha">
                  <div className="indice-num">06</div>
                  <div className="indice-nome">
                    <h3>Sistemas sob medida</h3>
                    <span className="indice-tag">Serviço · Para a sua empresa</span>
                  </div>
                  <p className="indice-desc">
                    O mesmo ciclo que aplicamos nos produtos próprios, a serviço
                    da sua operação: levantamento, modelagem, API, interface e
                    publicação. Também fazemos landing pages e sites
                    institucionais. Escopo e prazo definidos antes do início.
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
                href={WHATSAPP_CONTATO}
                target="_blank"
                rel="noreferrer"
                className="botao"
              >
                <span>Conversar no WhatsApp</span>
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
