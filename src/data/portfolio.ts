// ─────────────────────────────────────────────
// Personaliza aquí: nombre, experiencia, proyectos,
// correo y perfiles sociales. Todo el sitio lee de este archivo.
// ─────────────────────────────────────────────

export const profile = {
  name: "Mauro Infante",
  handle: "maurux01",
  role: "Jr Fullstack Developer",
  title: "Ingeniero Industrial → Fullstack Developer",
  location: "Colombia · Remoto / Bilingüe ES–EN",
  availability: "Disponible para proyectos freelance y roles Jr",
  email: "1w6zu7edc@mozmail.com",
  github: "https://github.com/Maurux01",
  linkedin: "https://www.linkedin.com/in/mauro-infante",
  oldPortfolio: "https://maurux01.github.io/personalwebpage/",
  bio: "Empecé en entornos BPO y 4+ años de customer service remoto bilingüe. Hoy construyo software: combino la mentalidad analítica de la Ingeniería Industrial con la creatividad del desarrollo. Usuario de Arch Linux, amante del open source, terminal/TUI y team Neovim.",
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  live: string;
  repo: string;
  kind: "terminal" | "jobs" | "music" | "cars";
  accent: string;
  stats: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "omninvim",
    title: "OmniNvim — IDE Fullstack en la terminal",
    tagline: "Neovim 0.11+ · Lazy.nvim · 25 temas dark",
    description:
      "Configuración kickstart-based que convierte Neovim en un IDE fullstack real: LSP para TypeScript, Tailwind, Python, Java, Lua y Bash, formateo al guardar, Telescope + Harpoon + Flash, Gitsigns y live server para web dev.",
    stack: ["Lua", "Neovim", "TypeScript", "Tailwind", "Python", "Java"],
    live: "https://maurux01.github.io/omninvim/#top",
    repo: "https://github.com/Maurux01/omninvim",
    kind: "terminal",
    accent: "#ff6b35",
    stats: [
      { value: "25", label: "temas dark" },
      { value: "8+", label: "LSP servers" },
      { value: "100%", label: "keyboard" },
    ],
  },
  {
    slug: "workapp",
    title: "Workapp — Conseguir trabajo, inteligente",
    tagline: "Job board ES/EN · resultados + dark mode",
    description:
      "Web app bilingüe para buscar trabajo de forma inteligente: inicio, vista de resultados, toggle ES/EN y modo oscuro. Enfocada en UX simple y rápida para candidatos.",
    stack: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
    live: "https://maurux01.github.io/workapp/",
    repo: "https://github.com/Maurux01/workapp",
    kind: "jobs",
    accent: "#10b981",
    stats: [
      { value: "ES/EN", label: "bilingüe" },
      { value: "🌙", label: "dark mode" },
      { value: "⚡", label: "rápida" },
    ],
  },
  {
    slug: "musik-landing",
    title: "Musi-k — Landing The Odin Project",
    tagline: "Landing page · HTML + CSS · responsive",
    description:
      "Landing page creada como práctica de The Odin Project: hero con propuesta de valor, secciones de fiesta/eventos, cita destacada, call-to-action y footer. Base sólida de maquetación responsive.",
    stack: ["HTML", "CSS", "Responsive"],
    live: "https://maurux01.github.io/landing-page-theodinproject/",
    repo: "https://github.com/Maurux01/landing-page-theodinproject",
    kind: "music",
    accent: "#8b5cf6",
    stats: [
      { value: "5", label: "secciones" },
      { value: "100%", label: "responsive" },
      { value: "0", label: "frameworks" },
    ],
  },
  {
    slug: "autosales",
    title: "AutoSales — Concesionario escalable",
    tagline: "Catálogo filtrable · calculadora · dark mode",
    description:
      "Landing escalable para concesionario en HTML, CSS y JS vanilla: catálogo de 12 autos con filtros, calculadora de financiación con sliders, modo oscuro y arquitectura sin frameworks lista para crecer.",
    stack: ["JavaScript", "HTML", "CSS", "Vanilla JS"],
    live: "https://maurux01.github.io/Autosales/",
    repo: "https://github.com/Maurux01/Autosales",
    kind: "cars",
    accent: "#0ea5e9",
    stats: [
      { value: "12", label: "autos" },
      { value: "24h", label: "aprobación" },
      { value: "4.9★", label: "satisfacción" },
    ],
  },
];

export const services = [
  {
    title: "Producto / Landing pages",
    desc: "Landing pages rápidas, responsive y orientadas a conversión: hero claro, catálogo, pricing, FAQ y contacto.",
    points: ["Responsive mobile-first", "SEO básico + performance", "Github Pages / deploy"],
    icon: "◈",
  },
  {
    title: "Frontend",
    desc: "Interfaces modernas con React, Angular, TypeScript y Tailwind. Componentes reutilizables y escalables.",
    points: ["React · Angular · TS", "Tailwind CSS v4", "Neovim workflow"],
    icon: "▣",
  },
  {
    title: "Backend & Data",
    desc: "APIs y datos con Java Spring Boot, Python Django/Flask, PostgreSQL y MongoDB. Análisis con Pandas + Streamlit.",
    points: ["Spring Boot · Django/Flask", "PostgreSQL · MongoDB", "Data analysis"],
    icon: "⬢",
  },
];

export const stackGroups = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "React", "Tailwind"],
  },
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "Python", "Django", "Flask", "Node.js"],
  },
  {
    label: "Data & DB",
    items: ["PostgreSQL", "MongoDB", "Pandas", "Streamlit", "Data analyst"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Linux", "Bash", "Lua", "Neovim", "Arch"],
  },
];

export const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];
