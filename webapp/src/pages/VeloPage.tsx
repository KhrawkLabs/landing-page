import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import "../styles/App.css";
import "../styles/ProjetoPage.css";

const RECURSOS = [
  {
    titulo: "Ordens de serviço",
    texto:
      "Abertura, acompanhamento e fechamento da OS com histórico completo por veículo. Busca por placa ou nome do cliente, etapas configuráveis e vínculo direto entre cliente, veículo e serviço executado.",
  },
  {
    titulo: "Financeiro e caixa",
    texto:
      "Receita por período, controle de caixa, fiado e inadimplência em tempo real. O dono abre o sistema e sabe quanto entrou hoje sem abrir planilha nenhuma.",
  },
  {
    titulo: "Assinaturas e cobrança",
    texto:
      "Planos com cobrança recorrente automática via Asaas, alerta de inadimplência e gestão do ciclo de vida da assinatura — da adesão ao cancelamento.",
  },
  {
    titulo: "Emissão de NFS-e",
    texto:
      "Nota fiscal de serviço emitida direto da OS, integrada ao gateway PlugNotas. Credenciais da prefeitura guardadas cifradas, com opção de operar sem emissão quando a oficina não precisa.",
  },
  {
    titulo: "Multi-tenant de verdade",
    texto:
      "Cada oficina enxerga só o que é dela. O isolamento é feito no servidor a partir do token, não em filtro de tela — nenhuma consulta de negócio roda sem o vínculo da oficina.",
  },
  {
    titulo: "Trilha de auditoria",
    texto:
      "Toda alteração relevante fica registrada automaticamente com autor, data e valores anteriores. Quando alguém pergunta quem mexeu no preço, a resposta está no sistema.",
  },
];

const STACK = [
  ".NET 10 · Minimal APIs",
  "PostgreSQL",
  "Entity Framework Core 10",
  "React 19",
  "TypeScript",
  "Redis",
  "Docker multistage",
  "Railway",
];

export default function VeloPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <NavMenu />

      <main>
        <header className="proj-hero">
          <div className="container">
            <Link to="/" className="proj-voltar">
              <span>←</span>
              <span>Khrawk Labs</span>
            </Link>

            <div className="proj-cabecalho">
              <p className="rotulo">Produto 01</p>
              <p className="rotulo">SaaS · Oficinas mecânicas</p>
              <span className="status status-operacao">Em operação</span>
            </div>

            <h1 className="proj-titulo">Velo</h1>

            <div className="proj-corpo">
              <div>
                <p className="texto">
                  A operação inteira de uma oficina mecânica em uma tela. Da
                  entrada do veículo ao pagamento recorrente:{" "}
                  <strong>
                    ordem de serviço, histórico, caixa, fiado, assinatura e
                    nota fiscal
                  </strong>{" "}
                  — sem caderno, sem planilha e sem cobrança perdida no
                  WhatsApp.
                </p>
                <div className="hero-acoes">
                  <a href="/#contato" className="botao">
                    <span>Quero testar o Velo</span>
                  </a>
                  <a href="#recursos" className="botao botao-vazado">
                    <span>Ver o que entrega</span>
                  </a>
                </div>
              </div>

              <dl className="ficha">
                <div>
                  <dt>Estágio</dt>
                  <dd>MVP completo, rodando com oficina real</dd>
                </div>
                <div>
                  <dt>Modelo</dt>
                  <dd>Assinatura mensal por oficina</dd>
                </div>
                <div>
                  <dt>Arquitetura</dt>
                  <dd>SaaS multi-tenant, deploy contínuo</dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <section className="secao">
          <div className="container blocos">
            <article className="bloco">
              <p className="rotulo">Problema</p>
              <h3>Operação no papel não escala</h3>
              <p>
                Oficina ainda anota OS em caderno, cobra no WhatsApp e fecha o
                mês na planilha. O resultado é retrabalho, fiado esquecido,
                inadimplência silenciosa e histórico de cliente que some quando
                o funcionário sai.
              </p>
            </article>

            <article className="bloco">
              <p className="rotulo">Para quem</p>
              <h3>Oficina que quer se profissionalizar</h3>
              <ul>
                <li>Oficinas mecânicas de pequeno e médio porte</li>
                <li>Gestor que quer controle real, não relatório bonito</li>
                <li>Operação com carteira de clientes recorrentes</li>
                <li>Quem precisa emitir NFS-e sem virar especialista fiscal</li>
              </ul>
            </article>

            <article className="bloco">
              <p className="rotulo">Solução</p>
              <h3>Operação digital de ponta a ponta</h3>
              <p>
                O Velo cobre o fluxo inteiro em um só lugar e cobra por
                assinatura, num preço que cabe em oficina pequena. Nada de
                módulo caro que fica desligado — o que está lá dentro é o que a
                oficina usa todo dia.
              </p>
            </article>
          </div>
        </section>

        <section className="secao" id="recursos">
          <div className="container">
            <div className="secao-topo">
              <div>
                <p className="rotulo">O que já entrega</p>
                <h2>
                  Nada de <span className="serifa">promessa</span>.
                  <br />
                  Isso está no ar.
                </h2>
              </div>
            </div>

            <div className="recursos">
              {RECURSOS.map((recurso, i) => (
                <article className="recurso" key={recurso.titulo}>
                  <div className="recurso-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3>{recurso.titulo}</h3>
                  <p>{recurso.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="secao">
          <div className="container">
            <p className="rotulo">Por baixo do capô</p>
            <h2 style={{ marginTop: 20 }}>
              Simples por decisão,
              <br />
              não por <span className="serifa">preguiça</span>.
            </h2>
            <p className="texto" style={{ marginTop: 26 }}>
              Um backend em .NET com Minimal APIs, PostgreSQL como fonte da
              verdade e um front em React. Sem microserviço, sem camada de
              abstração que só existe para impressionar em diagrama. A
              complexidade fica onde o negócio realmente é complexo — no
              financeiro e no fiscal.
            </p>
            <ul className="stack-lista">
              {STACK.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="secao">
          <div className="container proj-cta">
            <div>
              <p className="rotulo">Primeiras oficinas</p>
              <h2 style={{ marginTop: 20 }}>
                Pronto pra digitalizar
                <br />
                sua <span className="serifa">operação</span>?
              </h2>
              <p className="texto" style={{ marginTop: 24 }}>
                O Velo está entrando em produção com as primeiras oficinas
                parceiras. Chama a gente e conta como funciona a sua.
              </p>
            </div>
            <div className="proj-cta-acoes">
              <a href="/#contato" className="botao">
                <span>Falar com a Khrawk</span>
              </a>
              <Link to="/projetos/duo" className="botao botao-vazado">
                <span>Próximo produto →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
