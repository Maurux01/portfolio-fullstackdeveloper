import { useState } from "react";
import { navLinks, profile } from "../data/portfolio.ts";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0b]/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#ff6b35] font-bold text-black">
            M&gt;_
          </span>
          <span className="hidden sm:inline">
            {profile.handle} <span className="text-white/40">· {profile.role}</span>
          </span>
          <span className="sm:hidden">{profile.handle}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 rounded-full bg-[#ff6b35] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-white"
          >
            Contrátame
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0a0a0b] px-4 py-3 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-[#ff6b35] px-3 py-3 text-center font-bold text-black"
          >
            Contrátame
          </a>
        </div>
      )}
    </header>
  );
}
