import { Fragment, useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
// Cópia literal de sos-maringa/docs/politica-de-privacidade.md.
// Para atualizar a política, substitua o arquivo inteiro.
import politica from "../content/sos-maringa-privacidade.md?raw";
import "../styles/App.css";
import "../styles/SosMaringa.css";

type Bloco =
  | { tipo: "h1"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "p"; linhas: string[] }
  | { tipo: "ul"; itens: string[] };

/** Markdown mínimo: títulos #/##, listas "- ", parágrafos e **negrito**. */
function lerMarkdown(md: string): Bloco[] {
  const blocos: Bloco[] = [];
  for (const trecho of md.replace(/\r\n/g, "\n").split(/\n{2,}/)) {
    const linhas = trecho.split("\n").filter((l) => l.trim() !== "");
    if (linhas.length === 0) continue;
    if (linhas[0].startsWith("# ")) {
      blocos.push({ tipo: "h1", texto: linhas[0].slice(2) });
    } else if (linhas[0].startsWith("## ")) {
      blocos.push({ tipo: "h2", texto: linhas[0].slice(3) });
    } else if (linhas.every((l) => l.startsWith("- "))) {
      blocos.push({ tipo: "ul", itens: linhas.map((l) => l.slice(2)) });
    } else {
      blocos.push({ tipo: "p", linhas });
    }
  }
  return blocos;
}

/** Negrito e links para e-mail/URL dentro de uma linha. */
function inline(texto: string): ReactNode[] {
  return texto.split(/(\*\*[^*]+\*\*)/g).flatMap((parte, i) => {
    if (parte.startsWith("**") && parte.endsWith("**")) {
      return [<strong key={i}>{parte.slice(2, -2)}</strong>];
    }
    return parte
      .split(/(https:\/\/\S+|[\w.+-]+@[\w-]+\.[\w.]+)/g)
      .map((p, j) => {
        if (p.startsWith("https://")) {
          return (
            <a key={`${i}-${j}`} href={p}>
              {p}
            </a>
          );
        }
        if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(p)) {
          return (
            <a key={`${i}-${j}`} href={`mailto:${p}`}>
              {p}
            </a>
          );
        }
        return <Fragment key={`${i}-${j}`}>{p}</Fragment>;
      });
  });
}

const BLOCOS = lerMarkdown(politica);
const TITULO = BLOCOS.find((b) => b.tipo === "h1");

export default function SosPrivacidadePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const tituloAnterior = document.title;
    document.title = "Política de Privacidade — SOS Maringá";
    return () => {
      document.title = tituloAnterior;
    };
  }, []);

  return (
    <>
      <NavMenu />

      <main className="sos">
        <header className="sos-topo">
          <div className="container" style={{ paddingBottom: "clamp(32px, 5vw, 56px)" }}>
            <Link to="/projetos/sos-maringa" className="sos-voltar">
              ← SOS Maringá
            </Link>
            <h1 className="sos-titulo" style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}>
              {TITULO && "texto" in TITULO ? TITULO.texto : "Política de Privacidade"}
            </h1>
          </div>
        </header>
        <div className="sos-faixa" aria-hidden="true" />

        <article className="container sos-doc">
          <div className="sos-doc-corpo">
            {BLOCOS.map((bloco, i) => {
              if (bloco.tipo === "h1") return null;
              if (bloco.tipo === "h2") return <h2 key={i}>{bloco.texto}</h2>;
              if (bloco.tipo === "ul") {
                return (
                  <ul key={i}>
                    {bloco.itens.map((item, j) => (
                      <li key={j}>{inline(item)}</li>
                    ))}
                  </ul>
                );
              }
              const primeiro = i === 1;
              return (
                <p key={i} className={primeiro ? "sos-doc-data" : undefined}>
                  {bloco.linhas.map((linha, j) => (
                    <Fragment key={j}>
                      {j > 0 && <br />}
                      {inline(linha)}
                    </Fragment>
                  ))}
                </p>
              );
            })}
          </div>
        </article>
      </main>

      <Rodape />
    </>
  );
}
