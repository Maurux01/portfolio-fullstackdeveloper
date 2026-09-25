import { useState } from "react";
import type { Project } from "../data/portfolio.ts";

// Real photos in public/images/ (omninvim.png, workapp.png, musik.png, autosales.png)
// with a CSS fallback if the image does not exist yet.
function Shot({
  file,
  alt,
  fallback,
}: {
  file: string;
  alt: string;
  fallback: React.ReactNode;
}) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
      {imgOk ? (
        <img
          src={`${import.meta.env.BASE_URL}images/${file}`}
          alt={alt}
          loading="lazy"
          onError={() => setImgOk(false)}
          className="block w-full transition duration-500 hover:scale-[1.01]"
        />
      ) : (
        fallback
      )}
    </div>
  );
}

export default function ProjectVisual({ project }: { project: Project }) {
  if (project.kind === "terminal") {
    return (
      <Shot
        file="omninvim.png"
        alt="OmniNvim screenshot — fullstack IDE in the terminal"
        fallback={
          <div className="text-left font-mono text-[12px]">
            <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-white/40">
              <span>nvim · init.lua</span>
              <span>⎇ main ●</span>
            </div>
            <div className="space-y-1.5 p-4">
              <p className="text-violet-300">import {"{ useState }"} from "react";</p>
              <p className="text-white/70">
                <span className="text-sky-300">export function</span> Hero() {"{"}
              </p>
              <p className="pl-4 text-white/70">
                <span className="text-sky-300">const</span> [theme, setTheme] = useState(
                <span className="text-amber-300">"frappe"</span>);
              </p>
              <p className="pl-4 text-white/70">
                <span className="text-sky-300">return</span> &lt;main className=
                <span className="text-amber-300">"tailwind"</span>&gt;
              </p>
              <div className="flex gap-2 pt-2">
                <span className="rounded bg-white/10 px-2 py-1 text-white/70">25 themes</span>
                <span className="rounded bg-[#ff6b35]/20 px-2 py-1 text-[#ff6b35]">LSP ●</span>
              </div>
            </div>
          </div>
        }
      />
    );
  }
  if (project.kind === "jobs") {
    return (
      <Shot
        file="workapp.png"
        alt="Workapp screenshot — bilingual job finder"
        fallback={
          <div className="bg-black p-4 text-left text-white">
            <div className="flex items-center justify-between">
              <p className="font-extrabold">Workapp</p>
              <span className="rounded-full bg-emerald-400/15 px-2 py-1 font-mono text-[11px] text-emerald-300">
                ES|EN 🌙
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {[
                ["Jr Frontend · Remote", "$800–$1.2k"],
                ["Python Backend · Hybrid", "$1k–$1.5k"],
                ["Fullstack · Freelance", "per project"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                >
                  <span className="font-semibold">{a}</span>
                  <span className="font-mono text-xs text-white/60">{b}</span>
                </div>
              ))}
            </div>
          </div>
        }
      />
    );
  }
  if (project.kind === "cars") {
    return (
      <Shot
        file="autosales.png"
        alt="AutoSales screenshot — dealership with catalog and financing"
        fallback={
          <div className="bg-gradient-to-br from-sky-950 to-black p-4 text-left text-white">
            <div className="flex items-center justify-between">
              <p className="font-extrabold">AutoSales</p>
              <span className="rounded-full bg-sky-400/15 px-2 py-1 font-mono text-[11px] text-sky-300">
                12 cars
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                ["Porsche 911 · 2020", "$98,500"],
                ["Mazda 3 · 2022", "$18,900"],
                ["Toyota Corolla · 2021", "$16,400"],
                ["+ 9 more →", "filters"],
              ].map(([a, b]) => (
                <div key={a} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-xs font-bold">{a}</p>
                  <p className="font-mono text-xs text-white/60">{b}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg bg-[#ff6b35]/15 p-3 font-mono text-xs text-white">
              monthly payment ≈ <span className="text-emerald-300">$342/mo</span>
            </div>
          </div>
        }
      />
    );
  }
  // music
  return (
    <Shot
      file="musik.png"
      alt="Musi-k screenshot — landing page about music"
      fallback={
        <div className="bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 p-5 text-left text-white">
          <p className="font-mono text-xs opacity-80">Musi-k · the odin project</p>
          <p className="mt-1 text-2xl font-extrabold leading-tight">
            The music is an invisible engine
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
              ▶ Play Music
            </span>
            <span className="rounded-full border border-white/40 px-4 py-2 text-xs font-bold">
              Sign up
            </span>
          </div>
          <div className="mt-4 flex gap-1.5">
            {[12, 20, 14, 24, 16, 22, 10].map((h, i) => (
              <div key={i} className="w-3 rounded bg-white/70" style={{ height: h }} />
            ))}
          </div>
        </div>
      }
    />
  );
}
