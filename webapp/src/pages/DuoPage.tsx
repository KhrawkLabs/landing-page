import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import "../styles/App.css";
import "../styles/ProjetoPage.css";

const RECURSOS = [
  {
    titulo: "Sala de dois",
    texto:
      "Um cria a sala, o outro entra. Só isso. Sem cadastro longo, sem feed, sem lista de amigos — o app existe pelos 50 minutos do treino e depois sai da frente.",
  },
  {
    titulo: "Push-to-talk com ducking",
    texto:
      "Segurou o botão, a música abaixa nos dois aparelhos automaticamente. Soltou, o volume volta sozinho ao que era. Ninguém tira o fone em momento nenhum.",
  },
  {
    titulo: "Sua música continua sua",
    texto:
      "Cada um segue no próprio Spotify, YouTube Music ou no que estiver tocando. O Duo não reproduz música e não pede acesso à sua biblioteca — ele só manda o áudio dos outros apps dar licença.",
  },
  {
    titulo: "Indicador de quem fala",
    texto:
      "Um sinal claro na tela de quem está com o microfone aberto, porque com fone e barra na mão você não vai conferir o celular duas vezes.",
  },
];

const STACK = [
  "React Native",
  "WebRTC",
  "AVAudioSession · iOS",
  "AudioFocus · Android",
  "TypeScript",
];

export default function DuoPage() {
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
              <p className="rotulo">Produto 02</p>
              <p className="rotulo">App · Áudio em tempo real</p>
              <span className="status status-construcao">Em construção</span>
            </div>

            <h1 className="proj-titulo">Duo</h1>

            <div className="proj-corpo">
              <div>
                <p className="texto">
                  Dois amigos treinando juntos, cada um com o próprio fone e a
                  própria playlist.{" "}
                  <strong>
                    Aperta o botão e a música abaixa dos dois lados sozinha
                  </strong>{" "}
                  — dá pra perguntar quantas séries faltam sem tirar o fone,
                  gritar ou repetir três vezes.
                </p>

                <div className="nota">
                  <span className="nota-marca">Nota</span>
                  <p>
                    Projeto pessoal, sem meta de receita. Existe para praticar
                    áudio nativo e tempo real, e porque a dor é pequena mas
                    acontece toda semana. Não compete em prioridade com os
                    produtos comerciais do estúdio.
                  </p>
                </div>
              </div>

              <dl className="ficha">
                <div>
                  <dt>Estágio</dt>
                  <dd>MVP em desenvolvimento</dd>
                </div>
                <div>
                  <dt>Plataforma</dt>
                  <dd>iOS e Android, em React Native</dd>
                </div>
                <div>
                  <dt>Monetização</dt>
                  <dd>Nenhuma, e é de propósito</dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <section className="secao">
          <div className="container blocos">
            <article className="bloco">
              <p className="rotulo">Problema</p>
              <h3>O ritual do fone</h3>
              <p>
                Tira o fone. "O quê?". Tira o outro lado. "Quantas séries
                faltam?". Recoloca. Repete a cada dois minutos, todo treino. É
                uma dor pequena que acontece o tempo inteiro — o tipo que
                ninguém reclama e todo mundo tem.
              </p>
            </article>

            <article className="bloco">
              <p className="rotulo">Para quem</p>
              <h3>Quem treina acompanhado</h3>
              <ul>
                <li>Duplas de academia</li>
                <li>Pedal, corrida e caminhada em dupla</li>
                <li>Trilha e qualquer atividade longa lado a lado</li>
              </ul>
            </article>

            <article className="bloco">
              <p className="rotulo">Solução</p>
              <h3>Falar sem tirar o fone</h3>
              <p>
                Uma sala de duas pessoas e um botão de falar que abaixa a música
                dos dois automaticamente. Nada além disso no MVP — cronômetro
                sincronizado e histórico de PR ficam para depois, se der
                vontade.
              </p>
            </article>
          </div>
        </section>

        <section className="secao">
          <div className="container">
            <div className="secao-topo">
              <div>
                <p className="rotulo">O que o MVP faz</p>
                <h2>
                  Quatro coisas.
                  <br />
                  E mais <span className="serifa">nada</span>.
                </h2>
              </div>
              <p className="texto">
                Escopo fechado de propósito. App de treino que vira rede social
                morre na segunda semana — esse aqui precisa abrir rápido,
                funcionar com a tela bloqueada e sumir.
              </p>
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
            <p className="rotulo">Nota técnica</p>
            <h2 style={{ marginTop: 20 }}>
              O ducking não é
              <br />
              <span className="serifa">gambiarra</span>.
            </h2>
            <p className="texto" style={{ marginTop: 26 }}>
              Abaixar o áudio de outro aplicativo durante a fala é comportamento
              suportado pelo sistema operacional, não truque: no iOS é a opção{" "}
              <strong>duckOthers</strong> do AVAudioSession, no Android é o{" "}
              <strong>AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK</strong>. Nenhum dos
              dois depende da API do Spotify ou do Apple Music.
            </p>
            <p className="texto" style={{ marginTop: 20 }}>
              O trabalho de verdade está em outro lugar: manter o canal de voz
              em tempo real estável com a tela bloqueada e no bolso, e fazer
              isso sem torrar a bateria no meio do treino.
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
              <p className="rotulo">Acompanhar</p>
              <h2 style={{ marginTop: 20 }}>
                Treina em dupla
                <br />e usaria <span className="serifa">isso</span>?
              </h2>
              <p className="texto" style={{ marginTop: 24 }}>
                Fala com a gente. Feedback de quem treina de verdade vale mais
                que mais um fim de semana codando no escuro.
              </p>
            </div>
            <div className="proj-cta-acoes">
              <a href="/#contato" className="botao">
                <span>Mandar um retorno</span>
              </a>
              <Link to="/projetos/velo" className="botao botao-vazado">
                <span>← Produto anterior</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
