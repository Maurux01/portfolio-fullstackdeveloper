import { projects } from "../data/portfolio.ts";
import ProjectVisual from "./ProjectVisual.tsx";

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6">
      <p className="reveal font-mono text-sm text-[#ff6b35]">01 · proyectos reales</p>
      <div className="reveal mt-2 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Lo que ya está en producción
        </h2>
        <a
          href="https://github.com/Maurux01?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
        >
          ↗ ver 20+ repos
        </a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="reveal group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-[#ff6b35]/40 hover:shadow-xl"
          >
            <div className="p-5 pb-0">
              <ProjectVisual project={p} />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-xs text-white/50">{p.tagline}</p>
              <h3 className="mt-1 text-xl font-extrabold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/10 px-2.5 py-1 text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-6 border-t border-white/10 pt-4">
                {p.stats.map((st) => (
                  <div key={st.label}>
                    <p className="font-extrabold text-white">{st.value}</p>
                    <p className="font-mono text-[11px] text-white/50">{st.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full bg-[#ff6b35] px-4 py-2.5 text-center text-sm font-bold text-black transition group-hover:bg-white"
                >
                  ↗ Live demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full border border-white/15 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:border-white"
                >
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
