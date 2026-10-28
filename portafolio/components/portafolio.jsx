"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { content } from "./content";

const LINKEDIN = "https://linkedin.com/in/santiago-barrientos-03a651332";
const GITHUB = "https://github.com/SantiagoBarrientosF";

const BASE = [
  { bg: "bg-sun", grande: true },
  { bg: "bg-coral" },
  { bg: "bg-mint" },
  { bg: "bg-pink" },
  { bg: "bg-sky" },
];

const TECNOLOGIAS = [
  "PHP", "Python", "Java", "JavaScript", "SQL", "Laravel", "Django", "FastAPI",
  "Spring Boot", "PostgreSQL", "Redis", "Git", "Docker", "Power BI", "Excel",
  "Blender", "Unity",
];
const STICKER_COLORES = ["#ff6b5e", "#7be0b0", "#ffffff", "#ffb3d1", "#a8c7ff"];
const STICKER_ROTACION = [-3, 2, -1, 3, -2];

/* reutilizable */

function Contenedor({ className = "", children }) {
  return <div className={`mx-auto max-w-[1040px] px-5 ${className}`}>{children}</div>;
}

function Titulo({ className = "", children }) {
  return (
    <h2
      className={`mb-7 font-display text-[clamp(2rem,5.5vw,3.2rem)] leading-none font-extrabold tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

function Boton({ href, alt = false, externo = false, children }) {
  const extra = externo ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={href}
      {...extra}
      className={`inline-block rounded-full border-[3px] border-ink px-[22px] py-3 font-bold text-ink shadow-[4px_4px_0_var(--color-ink)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-ink)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white ${
        alt ? "bg-white" : "bg-sun"
      }`}
    >
      {children}
    </a>
  );
}

function Chat({ t }) {
  return (
    <div
      aria-label={t.ui.chatLabel}
      className="ml-auto w-full max-w-[440px] overflow-hidden rounded-[22px] border-[3px] border-ink bg-white text-ink shadow-[8px_8px_0_var(--color-ink)]"
    >
      <div className="flex items-center gap-3 border-b-[3px] border-ink bg-mint px-4 py-3 font-semibold">
        <div className="grid size-9 place-items-center rounded-full bg-ink font-display font-extrabold text-sun">
          S
        </div>
        <div>
          Santiago
          <span className="block text-[.8rem] leading-tight font-medium">{t.ui.chatRole}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 px-4 py-[18px]">
        {t.chat.map((m, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 1.2 + 0.5}s` }}
            className={`max-w-[84%] animate-pop rounded-2xl border-[3px] border-ink px-3.5 py-[9px] text-[.96rem] leading-snug motion-reduce:animate-none ${
              m.de === "v" ? "self-end rounded-br-[4px] bg-sun" : "self-start rounded-bl-[4px] bg-[#eef1ff]"
            }`}
          >
            {m.texto}
          </div>
        ))}
      </div>

      <div className="border-t-[3px] border-ink px-4 py-3 text-[.92rem] text-[#6b7394]">{t.ui.chatPlaceholder}</div>
    </div>
  );
}

function Proyecto({ p, base }) {
  return (
    <article
      className={`rounded-[18px] border-[3px] border-line text-ink shadow-[6px_6px_0_var(--line)] ${base.bg} ${
        base.grande ? "col-span-full p-8" : "p-6"
      }`}
    >
      {p.estado && (
        <span className="mb-3.5 inline-block rounded-full bg-ink px-3 py-[3px] text-[.85rem] font-semibold text-white">
          {p.estado}
        </span>
      )}
      <h3
        className={`mb-2 font-display leading-[1.15] font-extrabold tracking-tight ${
          base.grande ? "text-[clamp(1.7rem,4vw,2.4rem)]" : "text-[1.35rem]"
        }`}
      >
        {p.titulo}
      </h3>
      <p className={`mb-3 ${base.grande ? "max-w-[62ch]" : ""}`}>{p.texto}</p>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {p.tags.map((tag) => (
          <span key={tag} className="rounded-full border-2 border-ink bg-white/55 px-3 py-0.5 text-[.88rem] font-medium">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}


export default function Portafolio({ lang = "es" }) {
  const t = content[lang];
  const otroIdioma = lang === "es" ? "en" : "es";

  const [tema, setTema] = useState(null);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    try {
      const guardado = localStorage.getItem("tema");
      if (guardado === "light" || guardado === "dark") setTema(guardado);
    } catch {}
  }, []);

  useEffect(() => {
    if (!tema) return;
    document.documentElement.dataset.theme = tema;
    try {
      localStorage.setItem("tema", tema);
    } catch {}
  }, [tema]);

  const alternarTema = () => {
    const oscuro = tema
      ? tema === "dark"
      : document.documentElement.dataset.theme
        ? document.documentElement.dataset.theme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTema(oscuro ? "light" : "dark");
  };

  return (
    <>
      <header className="bg-hero pt-12 pb-[72px] text-white">
        <Contenedor className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-10">
          <div>{
            }
            <span className="mb-[22px] inline-block rounded-full border-[3px] border-ink bg-white px-3.5 py-1.5 text-[.9rem] font-semibold text-ink">
              {t.ui.avail}
            </span>
            <h1 className="font-display text-[clamp(2.8rem,9vw,5.6rem)] leading-[.95] font-extrabold tracking-[-0.04em]">
              Santiago Barrientos
            </h1>
            <p className="mt-5 mb-6 max-w-[30ch] text-[1.2rem] text-[#e6ebff]">{t.ui.sub}</p>
            <div className="flex flex-wrap gap-3.5">
              <Boton href="#proyectos">{t.ui.viewProjects}</Boton>
              <Boton href={GITHUB} alt externo>GitHub</Boton>
              <Boton href={LINKEDIN} alt externo>LinkedIn</Boton>
            </div>
          </div>
          <Chat t={t} />
        </Contenedor>
      </header>

      <section id="proyectos" className="py-16">
        <Contenedor>
          <Titulo>{t.ui.projectsTitle}</Titulo>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[26px]">
            {t.projects.map((p, i) => (
              <Proyecto key={i} p={p} base={BASE[i]} />
            ))}
          </div>
        </Contenedor>
      </section>

      <section className="bg-sun py-16 text-ink">
        <Contenedor>
          <Titulo>{t.ui.stackTitle}</Titulo>
          <div className="mb-[22px] flex flex-wrap gap-x-3 gap-y-3.5">
            {TECNOLOGIAS.map((tec, i) => (
              <span
                key={tec}
                style={{ rotate: `${STICKER_ROTACION[i % 5]}deg`, background: STICKER_COLORES[i % 5] }}
                className="inline-block rounded-full border-[3px] border-ink px-5 py-2 font-display text-[1.15rem] font-extrabold text-ink shadow-[3px_3px_0_var(--color-ink)]"
              >
                {tec}
              </span>
            ))}
          </div>
          <p>{t.ui.stackNote}</p>
        </Contenedor>
      </section>

      <section className="py-16">
        <Contenedor>
          <Titulo>{t.ui.pathTitle}</Titulo>
          <ul className="border-l-4 border-line pl-[26px]">
            {t.path.map((c, i) => (
              <li key={i} className="relative pb-[30px] pl-[18px]">
                <span
                  aria-hidden="true"
                  className="absolute top-0.5 -left-[40px] size-6 rounded-full border-4 border-line bg-sun"
                />
                <b className="block font-display text-[1.25rem] leading-tight font-extrabold">{c.titulo}</b>
                <span className="text-[.95rem] text-muted">{c.detalle}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-muted">{t.ui.languages}</p>
        </Contenedor>
      </section>

      <section className="bg-hero py-16 text-white">
        <Contenedor>
          <Titulo className="max-w-[16ch]">{t.ui.contactTitle}</Titulo>
          <div className="flex flex-wrap gap-3.5">
            <Boton href={LINKEDIN} externo>{t.ui.contactLinkedin}</Boton>
            <Boton href={GITHUB} alt externo>{t.ui.contactGithub}</Boton>
          </div>
        </Contenedor>
      </section>

      <footer className="bg-hero px-5 pb-7 text-center text-[.9rem] text-[#cfd8ff]">{t.ui.footer}</footer>

      <div className="fixed right-4 bottom-[calc(16px+env(safe-area-inset-bottom,0px))] flex gap-2">
        <Link
          href={lang === "es" ? "/en" : "/"}
          hrefLang={otroIdioma}
          lang={otroIdioma}
          aria-label={t.ui.switchLang}
          className="grid h-[46px] min-w-[46px] place-items-center rounded-full border-[3px] border-line bg-page px-3 text-[.9rem] font-bold text-fg focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-fg"
        >
          {otroIdioma.toUpperCase()}
        </Link>
        <button
          onClick={alternarTema}
          aria-label={t.ui.themeLabel}
          className="size-[46px] cursor-pointer rounded-full border-[3px] border-line bg-page text-[1.2rem] text-fg focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-fg"
        >
          ◐
        </button>
      </div>
    </>
  );
}
