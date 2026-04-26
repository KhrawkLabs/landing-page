import { useEffect } from "react";
import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import "../styles/App.css";
import "../styles/VeloPage.css";

export default function VeloPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <NavMenu />

      <main>
        <header className="hero velo-detail-hero">
          <div className="container velo-detail-hero-grid">
            <div>
              <span className="badge">Sistema para Oficinas</span>
              <h1>Velo</h1>
              <p className="subtitle">
                Gestão completa para oficinas mecânicas — do atendimento ao
                financeiro, tudo em um só lugar, sem planilha e sem papel.
              </p>
              <div className="cta-row">
                <a href="/#contatos" className="btn">
                  Quero testar o Velo
                </a>
                <a href="#funcionalidades" className="btn btn-outline">
                  Ver funcionalidades
                </a>
              </div>
            </div>

            <aside className="panel-card">
              <p className="panel-label">Status atual</p>
              <h2>MVP 100% implementado, entrando em operação</h2>
              <ul>
                <li>Gestão completa de ordens de serviço</li>
                <li>Cobranças e assinaturas automatizadas</li>
                <li>Controle financeiro em tempo real</li>
              </ul>
            </aside>
          </div>
        </header>

        <section className="section">
          <div className="container cards velo-detail-grid">
            <article className="card">
              <p className="section-kicker">Problema</p>
              <h3>Operação no papel não escala</h3>
              <p>
                Oficinas ainda gerenciam OS em caderno, cobranças no WhatsApp e
                financeiro em planilha. Isso gera retrabalho, inadimplência e
                perda de histórico de clientes.
              </p>
            </article>

            <article className="card">
              <p className="section-kicker">Público-alvo</p>
              <h3>Oficinas que querem profissionalizar</h3>
              <ul className="project-metrics">
                <li>Oficinas mecânicas de pequeno e médio porte</li>
                <li>Gestores que querem controle real da operação</li>
                <li>Oficinas com recorrência de clientes fixos</li>
              </ul>
            </article>

            <article className="card">
              <p className="section-kicker">Solução</p>
              <h3>Operação digital de ponta a ponta</h3>
              <p>
                O Velo digitaliza toda a operação — da entrada do veículo até o
                pagamento recorrente — em uma plataforma simples e acessível por
                assinatura.
              </p>
            </article>
          </div>
        </section>

        <section id="funcionalidades" className="section alt">
          <div className="container">
            <p className="section-kicker">Funcionalidades</p>
            <h2>O que o Velo já entrega</h2>

            <div className="cards velo-feature-grid">
              <article className="card">
                <h3>Ordens de Serviço</h3>
                <ul className="project-metrics">
                  <li>Abertura e acompanhamento em tempo real</li>
                  <li>Cadastro de veículos e histórico por cliente</li>
                  <li>Status e etapas personalizáveis</li>
                </ul>
              </article>

              <article className="card">
                <h3>Assinaturas e Cobranças</h3>
                <ul className="project-metrics">
                  <li>Planos com cobrança automática via Asaas</li>
                  <li>Alertas de inadimplência e renovação</li>
                  <li>Gestão de ciclo de vida da assinatura</li>
                </ul>
              </article>

              <article className="card">
                <h3>Financeiro</h3>
                <ul className="project-metrics">
                  <li>Visão de receitas e inadimplência</li>
                  <li>Relatórios por período</li>
                  <li>Controle de caixa simplificado</li>
                </ul>
              </article>

              <article className="card">
                <h3>Clientes e Veículos</h3>
                <ul className="project-metrics">
                  <li>Cadastro completo com histórico de OS</li>
                  <li>Busca rápida por placa ou nome</li>
                  <li>Vínculo direto entre cliente, veículo e serviço</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container contact-panel">
            <div>
              <p className="section-kicker">Primeiras oficinas</p>
              <h2>Pronto para digitalizar a sua operação?</h2>
              <p>
                O Velo está entrando em produção com as primeiras oficinas
                parceiras. Entre em contato e seja um dos primeiros a testar.
              </p>
            </div>
            <div className="contact-actions">
              <a href="/#contatos" className="btn">
                Falar com a Alcateia
              </a>
              <a href="/" className="btn btn-outline">
                Voltar para a página inicial
              </a>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
