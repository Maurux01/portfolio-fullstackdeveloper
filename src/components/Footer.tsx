import { profile } from "../data/portfolio.ts";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0b] pb-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-sm text-white/60">
          © 2026 {profile.name} — @{profile.handle} · hecho con React + Tailwind + Neovim
        </p>
        <div className="flex gap-5 font-mono text-sm">
          <a href={`mailto:${profile.email}`} className="hover:text-[#ff6b35]">
            email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[#ff6b35]">
            github
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ff6b35]"
          >
            linkedin
          </a>
          <a href="#top" className="hover:text-[#ff6b35]">
            ↑ top
          </a>
        </div>
      </div>
    </footer>
  );
}
