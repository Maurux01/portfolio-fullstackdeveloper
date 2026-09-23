import { useState } from "react";
import { navLinks, profile } from "../data/portfolio.ts";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#fafaf9]/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0a0a0b] font-bold text-[#ff6b35]">
            M&gt;_
          </span>
          <span className="hidden sm:inline">
            {profile.handle} <span className="text-black/40">· {profile.role}</span>
          </span>
          <span className="sm:hidden">{profile.handle}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-black/70 transition hover:bg-black/5 hover:text-black"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 rounded-full bg-[#0a0a0b] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#ff6b35]"
          >
            Contrátame
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-black/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/10 bg-[#fafaf9] px-4 py-3 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-semibold hover:bg-black/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-[#0a0a0b] px-3 py-3 text-center font-bold text-white"
          >
            Contrátame
          </a>
        </div>
      )}
    </header>
  );
}
