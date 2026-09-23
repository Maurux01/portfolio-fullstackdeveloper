import { profile, stackGroups } from "../data/portfolio.ts";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6">
      <p className="reveal font-mono text-sm text-[#ff6b35]">03 · sobre mí</p>
      <div className="mt-2 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="reveal">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ingeniero que construye software
          </h2>
          <p className="mt-4 leading-relaxed text-black/65">{profile.bio}</p>
          <div className="mt-5 space-y-2 font-mono text-sm">
            <p>
              <span className="text-black/40">nombre:</span> {profile.name} ({profile.handle})
            </p>
            <p>
              <span className="text-black/40">ubicación:</span> {profile.location}
            </p>
            <p>
              <span className="text-black/40">idiomas:</span> Bilingüe ES / EN — 4+ años remoto
            </p>
            <p>
              <span className="text-black/40">foco:</span> open source · terminal · TUI · neovim
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-bold transition hover:border-black"
            >
              ↗ LinkedIn
            </a>
            <a
              href={profile.oldPortfolio}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-bold transition hover:border-black"
            >
              Portfolio anterior
            </a>
          </div>
        </div>

        <div className="reveal grid gap-4 sm:grid-cols-2">
          {stackGroups.map((g) => (
            <div key={g.label} className="rounded-2xl border border-black/10 bg-white p-5">
              <p className="font-mono text-xs text-black/50">{g.label}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-black/5 px-2.5 py-1.5 text-xs font-bold text-black/75 transition hover:bg-[#0a0a0b] hover:text-white"
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
