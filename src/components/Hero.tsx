import { profile } from "../data/portfolio.ts";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#ff6b35]/15 blur-3xl" />
        <div className="absolute top-40 -left-20 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-14 pb-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:pt-20">
        <div>
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1.5 font-mono text-xs text-emerald-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            {profile.availability}
          </p>
          <h1 className="reveal mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="block text-lg font-semibold text-white/60 sm:text-xl">
              {profile.title}
            </span>
            <span className="mt-2 block">
              I build <span className="text-[#ff6b35]">fast</span>, functional and scalable
              websites<span className="animate-caret text-[#ff6b35]">▊</span>
            </span>
          </h1>
          <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            {profile.bio}
          </p>
          <p className="reveal mt-3 font-mono text-sm text-white/50">{profile.location}</p>

          <div className="reveal mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[#ff6b35] px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-white"
            >
              View projects ↓
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              Contact
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-3 font-mono text-sm text-white/60 underline-offset-4 transition hover:text-white hover:underline"
            >
              ↗ GitHub
            </a>
          </div>

          <div className="reveal mt-8 flex flex-wrap gap-2 font-mono text-xs">
            {["React", "TypeScript", "Spring Boot", "Django", "PostgreSQL", "Neovim"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Visual terminal */}
        <div className="reveal animate-float h-fit overflow-hidden rounded-2xl border border-white/10 bg-black text-left shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-2 font-mono text-xs text-white/50">mauro@arch: ~/portfolio</span>
          </div>
          <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
            <p className="text-white/40"># who I am</p>
            <p>
              <span className="text-emerald-400">$</span>{" "}
              <span className="text-white">whoami --fullstack</span>
            </p>
            <p className="text-white/85">
              industrial-engineer → <span className="text-[#ff6b35]">jr-fullstack</span>
            </p>
            <p>
              <span className="text-emerald-400">$</span> <span className="text-white">stack --list</span>
            </p>
            <p className="text-sky-300">ts · react · angular · java · python · psql</p>
            <p>
              <span className="text-emerald-400">$</span>{" "}
              <span className="text-white">open projects/</span>
            </p>
            <p className="text-white/85">
              omninvim/ workapp/ autosales/ musik/
              <span className="animate-caret text-[#ff6b35]">▊</span>
            </p>
            <div className="flex gap-2 pt-2">
              <span className="rounded bg-[#ff6b35]/20 px-2 py-1 text-[#ff6b35]">● LSP ready</span>
              <span className="rounded bg-emerald-400/15 px-2 py-1 text-emerald-300">
                ● open to work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
