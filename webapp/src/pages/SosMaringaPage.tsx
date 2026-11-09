import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import "../styles/App.css";
import "../styles/SosMaringa.css";

const SOS_GRUPO_WHATSAPP =
  "https://chat.whatsapp.com/EyBJOQpef9V25dhG3NTgKk";

const NUMEROS = [
  { numero: "192", nome: "SAMU", cor: "#D32F2F" },
  { numero: "193", nome: "Bombeiros", cor: "#8E1B1B" },
  { numero: "190", nome: "Polícia Militar", cor: "#1F3A6B" },
  { numero: "199", nome: "Defesa Civil", cor: "#C24E00" },
];

const ABAS = [
  {
    nome: "Início",
    print: "/projetos/sos-maringa/inicio.webp",
    alt: "Tela Início do SOS Maringá com os botões 192, 193, 190 e 199 e o tempo agora em Maringá",
    texto:
      "SAMU, Bombeiros, Polícia Militar e Defesa Civil logo na primeira tela: um toque e o celular já liga. Embaixo, o tempo agora em Maringá, a chance de chuva hora a hora e os outros telefones úteis da cidade.",
  },
  {
    nome: "Avisos",
    print: "/projetos/sos-maringa/avisos.webp",
    alt: "Tela Avisos com os alertas do INMET para Maringá e a previsão das próximas 24 horas",
    texto:
      "Os alertas oficiais do INMET que valem para Maringá e a previsão de tempestade para as próximas 24 horas: chuva, milímetros e rajadas de vento, hora a hora.",
  },
  {
    nome: "Mapa",
    print: "/projetos/sos-maringa/mapa.webp",
    alt: "Tela Mapa com a lista de pontos de atendimento e os botões Traçar rota e Ligar",
    texto:
      "Prefeitura, UPAs, hospitais e outros pontos de atendimento. Veja qual fica mais perto, ligue ou trace a rota no aplicativo de mapas do celular.",
  },
  {
    nome: "Perfil",
    print: "/projetos/sos-maringa/perfil.webp",
    alt: "Tela Perfil com o botão de ligar para os contatos, SOS por WhatsApp e SMS e a lista de contatos",
    texto:
      "Até três contatos prioritários. Num aperto, o SOS vai por WhatsApp ou SMS com a sua localização. A ficha médica (tipo sanguíneo, alergias, remédios) e um recado seu seguem junto na mensagem.",
  },
];

export default function SosMaringaPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const tituloAnterior = document.title;
    document.title = "SOS Maringá — app de emergência | Khrawk Labs";
    return () => {
      document.title = tituloAnterior;
    };
  }, []);

  return (
    <>
      <NavMenu />

      <main className="sos">
        <header className="sos-topo">
          <div className="container sos-topo-grade">
            <div>
              <Link to="/" className="sos-voltar">
                ← Khrawk Labs
              </Link>
              <h1 className="sos-titulo">SOS Maringá</h1>
              <p className="sos-lead">
                App gratuito para emergências em Maringá. Os telefones de
                socorro em um toque, os alertas oficiais de tempo e os seus
                contatos de emergência no mesmo lugar. Funciona mesmo sem
                internet.
              </p>
              <div className="sos-acoes">
                <span className="sos-loja" aria-disabled="true">
                  Em breve na Play Store
                </span>
                <a
                  href={SOS_GRUPO_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="sos-botao sos-botao-claro"
                >
                  Entrar no grupo de ajuda
                </a>
              </div>
            </div>

            <img
              className="sos-print sos-print-topo"
              src="/projetos/sos-maringa/inicio.webp"
              alt="Tela inicial do SOS Maringá"
              width={375}
              height={812}
            />
          </div>
        </header>
        <div className="sos-faixa" aria-hidden="true" />

        <section className="sos-numeros" aria-label="Telefones de emergência">
          {NUMEROS.map((n) => (
            <a
              key={n.numero}
              href={`tel:${n.numero}`}
              className="sos-numero"
              style={{ background: n.cor }}
            >
              <strong>{n.numero}</strong>
              <span>{n.nome}</span>
            </a>
          ))}
        </section>

        <section className="sos-secao">
          <div className="container">
            <h2 className="sos-h2">O app tem quatro abas</h2>
            <div className="sos-abas">
              {ABAS.map((aba) => (
                <article className="sos-aba" key={aba.nome}>
                  <img
                    className="sos-print"
                    src={aba.print}
                    alt={aba.alt}
                    width={375}
                    height={812}
                    loading="lazy"
                  />
                  <h3>{aba.nome}</h3>
                  <p>{aba.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sos-secao sos-secao-cinza">
          <div className="container sos-duas">
            <div>
              <h2 className="sos-h2">Funciona sem internet</h2>
              <p className="sos-p">
                Em temporal, o sinal do celular costuma cair. Os
                telefones, os seus contatos e a ficha médica ficam guardados no
                celular, e o app mostra as últimas informações de tempo e de
                alertas que conseguiu baixar. Ligar para 192, 193, 190 e 199
                não depende de internet.
              </p>
            </div>
            <div>
              <h2 className="sos-h2">Sem cadastro</h2>
              <p className="sos-p">
                Não tem login, anúncio nem rastreamento. O que você preenche
                fica só no seu celular. A Khrawk Labs não recebe nenhum dado
                seu.
              </p>
              <Link
                to="/projetos/sos-maringa/privacidade"
                className="sos-link"
              >
                Ler a política de privacidade
              </Link>
            </div>
          </div>
        </section>

        <section className="sos-grupo">
          <div className="container sos-duas">
            <div>
              <h2 className="sos-h2">Grupo de ajuda entre moradores</h2>
              <p className="sos-p">
                Um grupo de WhatsApp para quem mora em Maringá pedir e oferecer
                ajuda. Diga o seu bairro ou zona. Risco de vida? Ligue 192 ou
                193 antes de postar. Sem boatos nem correntes.
              </p>
            </div>
            <div className="sos-grupo-acao">
              <a
                href={SOS_GRUPO_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="sos-botao sos-botao-claro"
              >
                Entrar no grupo SOS Maringá
              </a>
            </div>
          </div>
        </section>

        <section className="sos-secao">
          <div className="container sos-duas">
            <div>
              <h2 className="sos-h2">Receba os alertas da Defesa Civil</h2>
              <p className="sos-p">
                Mande um SMS com o CEP da sua casa para o número 40199. A
                Defesa Civil passa a avisar você por SMS quando houver risco de
                temporal, alagamento ou vendaval na sua região. É gratuito e
                funciona em qualquer celular.
              </p>
            </div>
            <a href="sms:40199" className="sos-sms">
              <span>CEP por SMS para</span>
              <strong>40199</strong>
            </a>
          </div>
        </section>

        <section className="sos-secao sos-secao-aviso">
          <div className="container">
            <p className="sos-aviso">
              O SOS Maringá não é um aplicativo oficial da Prefeitura de
              Maringá nem da Defesa Civil e não substitui os serviços de
              emergência. Em caso de risco, ligue 192 (SAMU), 193 (Bombeiros),
              190 (Polícia Militar) ou 199 (Defesa Civil).
            </p>
            <p className="sos-assinatura">
              Feito pela <Link to="/">Khrawk Labs</Link>, em Maringá.{" "}
              <Link to="/projetos/sos-maringa/privacidade">
                Política de privacidade
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
