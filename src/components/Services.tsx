import { services } from "../data/portfolio.ts";

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 border-y border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="reveal font-mono text-sm text-[#ff6b35]">02 · servicios</p>
        <h2 className="reveal mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          De la idea al deploy
        </h2>
        <p className="reveal mt-3 max-w-2xl text-white/65">
          Trabajo por capas separadas y reutilizables: si ya tienes diseño hago el frontend, si
          necesitas datos hago el backend, o te entrego el producto completo.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#ff6b35]/40 hover:shadow-lg"
            >
              <p className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff6b35] text-lg text-black">
                {s.icon}
              </p>
              <h3 className="mt-4 text-lg font-extrabold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 font-mono text-xs text-white/70">
                {s.points.map((pt) => (
                  <li key={pt}>✓ {pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
