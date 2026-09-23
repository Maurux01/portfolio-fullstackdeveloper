import { useEffect } from "react";

// Añade .is-visible cuando el elemento entra al viewport.
// Úsalo con className="reveal".
export default function Reveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return <>{children}</>;
}
