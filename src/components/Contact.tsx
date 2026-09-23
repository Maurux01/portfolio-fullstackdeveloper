import { useState } from "react";
import { profile } from "../data/portfolio.ts";

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Escribe tu nombre (mín. 2 caracteres).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      e.email = "Escribe un email válido.";
    if (message.trim().length < 10)
      e.message = "Cuéntame un poco más (mín. 10 caracteres).";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    // Sin backend: abrimos el cliente de correo con el mensaje pre-llenado.
    // Para producción conéctalo a Formspree / Resend / tu API.
    const subject = encodeURIComponent(`Portfolio: contacto de ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contacto" className="scroll-mt-20 border-t border-black/10 bg-[#0a0a0b] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div className="reveal">
          <p className="font-mono text-sm text-[#ff6b35]">04 · contacto</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            ¿Hacemos algo juntos?
          </h2>
          <p className="mt-3 text-white/65">
            Respondo en menos de 24h. Escríbeme para freelance, rol Jr o colaborar en open
            source.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#ff6b35]"
            >
              <p className="font-mono text-xs text-white/50">✉️ email</p>
              <p className="font-bold">{profile.email}</p>
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#ff6b35]"
              >
                <p className="font-mono text-xs text-white/50">⌨ github</p>
                <p className="font-bold">@{profile.handle}</p>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#ff6b35]"
              >
                <p className="font-mono text-xs text-white/50">in linkedin</p>
                <p className="font-bold">mauro-infante</p>
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="reveal h-fit rounded-2xl bg-white p-6 text-black"
        >
          {sent && (
            <p className="mb-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
              ✓ Gracias {name.split(" ")[0] || "por tu mensaje"}. Se abrió tu cliente de
              correo — si prefieres, escríbeme directo a {profile.email}.
            </p>
          )}
          <label className="block text-sm font-bold">
            Nombre
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className="mt-1.5 w-full rounded-xl border border-black/15 px-4 py-3 font-normal outline-none focus:border-[#ff6b35]"
            />
            {errors.name && (
              <span className="mt-1 block text-xs font-normal text-red-600">{errors.name}</span>
            )}
          </label>
          <label className="mt-4 block text-sm font-bold">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              type="email"
              className="mt-1.5 w-full rounded-xl border border-black/15 px-4 py-3 font-normal outline-none focus:border-[#ff6b35]"
            />
            {errors.email && (
              <span className="mt-1 block text-xs font-normal text-red-600">{errors.email}</span>
            )}
          </label>
          <label className="mt-4 block text-sm font-bold">
            ¿Cómo puedo ayudarte?
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Quiero una landing para… / Busco un Jr fullstack que…"
              rows={4}
              className="mt-1.5 w-full resize-none rounded-xl border border-black/15 px-4 py-3 font-normal outline-none focus:border-[#ff6b35]"
            />
            {errors.message && (
              <span className="mt-1 block text-xs font-normal text-red-600">
                {errors.message}
              </span>
            )}
          </label>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-[#0a0a0b] py-3.5 text-sm font-bold text-white transition hover:bg-[#ff6b35]"
          >
            Enviar mensaje →
          </button>
          <p className="mt-3 text-center font-mono text-[11px] text-black/45">
            validación local · sin spam · via mailto (conectable a Formspree/API)
          </p>
        </form>
      </div>
    </section>
  );
}
