import { profile, stackGroups } from "../data/portfolio.ts";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6">
      <p className="reveal font-mono text-sm text-[#ff6b35]">03 · sobre mí</p>
      <div className="mt-2 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ingeniero que construye software
          </h2>
          <p className="mt-4 leading-relaxed text-white/65">{profile.bio}</p>
          <div className="mt-5 space-y-2 font-mono text-sm text-white/80">
            <p>
              <span className="text-white/40">nombre:</span> {profile.name} ({profile.handle})
            </p>
            <p>
              <span className="text-white/40">ubicación:</span> {profile.location}
            </p>
            <p>
              <span className="text-white/40">idiomas:</span> Bilingüe ES / EN — 4+ años remoto
            </p>
            <p>
              <span className="text-white/40">foco:</span> open source · terminal · TUI · neovim
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white"
            >
              ↗ LinkedIn
            </a>
            <a
              href={profile.oldPortfolio}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white"
            >
              Portfolio anterior
            </a>
          </div>
        </div>

        <div className="reveal grid gap-4 sm:grid-cols-2">
          {stackGroups.map((g) => (
            <div key={g.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="font-mono text-xs text-white/50">{g.label}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-bold text-white/80 transition hover:bg-[#ff6b35] hover:text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
