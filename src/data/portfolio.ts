// ─────────────────────────────────────────────
// Customize here: name, experience, projects,
// email and social profiles. The whole site reads from this file.
// ─────────────────────────────────────────────

export const profile = {
  name: "Mauro Infante",
  handle: "maurux01",
  role: "Jr Fullstack Developer",
  title: "Industrial Engineer → Fullstack Developer",
  location: "Colombia · Remote / Bilingual ES–EN",
  availability: "Available for freelance projects and Jr roles",
  email: "1w6zu7edc@mozmail.com",
  github: "https://github.com/Maurux01",
  linkedin: "https://www.linkedin.com/in/mauro-infante",
  oldPortfolio: "https://maurux01.github.io/personalwebpage/",
  bio: "I started in BPO environments with 4+ years of bilingual remote customer service. Today I build software: I combine the analytical mindset of Industrial Engineering with the creativity of development. Arch Linux user, open source lover, terminal/TUI fan and team Neovim.",
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
    title: "OmniNvim — Fullstack IDE in the terminal",
    tagline: "Neovim 0.11+ · Lazy.nvim · 25 dark themes",
    description:
      "Kickstart-based setup that turns Neovim into a real fullstack IDE: LSP for TypeScript, Tailwind, Python, Java, Lua and Bash, format on save, Telescope + Harpoon + Flash, Gitsigns and live server for web dev.",
    stack: ["Lua", "Neovim", "TypeScript", "Tailwind", "Python", "Java"],
    live: "https://maurux01.github.io/omninvim/#top",
    repo: "https://github.com/Maurux01/omninvim",
    kind: "terminal",
    accent: "#ff6b35",
    stats: [
      { value: "25", label: "dark themes" },
      { value: "8+", label: "LSP servers" },
      { value: "100%", label: "keyboard" },
    ],
  },
  {
    slug: "workapp",
    title: "Workapp — Smarter job hunting",
    tagline: "ES/EN job board · results + dark mode",
    description:
      "Bilingual web app for smarter job searching: home, results view, ES/EN toggle and dark mode. Focused on a simple, fast UX for candidates.",
    stack: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
    live: "https://maurux01.github.io/workapp/",
    repo: "https://github.com/Maurux01/workapp",
    kind: "jobs",
    accent: "#10b981",
    stats: [
      { value: "ES/EN", label: "bilingual" },
      { value: "🌙", label: "dark mode" },
      { value: "⚡", label: "fast" },
    ],
  },
  {
    slug: "musik-landing",
    title: "Musi-k — The Odin Project Landing",
    tagline: "Landing page · HTML + CSS · responsive",
    description:
      "Landing page built as a The Odin Project exercise: hero with value proposition, party/event sections, featured quote, call-to-action and footer. A solid responsive layout foundation.",
    stack: ["HTML", "CSS", "Responsive"],
    live: "https://maurux01.github.io/landing-page-theodinproject/",
    repo: "https://github.com/Maurux01/landing-page-theodinproject",
    kind: "music",
    accent: "#8b5cf6",
    stats: [
      { value: "5", label: "sections" },
      { value: "100%", label: "responsive" },
      { value: "0", label: "frameworks" },
    ],
  },
  {
    slug: "autosales",
    title: "AutoSales — Scalable dealership",
    tagline: "Filterable catalog · calculator · dark mode",
    description:
      "Scalable landing page for a car dealership in HTML, CSS and vanilla JS: 12-car catalog with filters, financing calculator with sliders, dark mode and a framework-free architecture ready to grow.",
    stack: ["JavaScript", "HTML", "CSS", "Vanilla JS"],
    live: "https://maurux01.github.io/Autosales/",
    repo: "https://github.com/Maurux01/Autosales",
    kind: "cars",
    accent: "#0ea5e9",
    stats: [
      { value: "12", label: "cars" },
      { value: "24h", label: "approval" },
      { value: "4.9★", label: "satisfaction" },
    ],
  },
];

export const services = [
  {
    title: "Product / Landing pages",
    desc: "Fast, responsive, conversion-oriented landing pages: clear hero, catalog, pricing, FAQ and contact.",
    points: ["Mobile-first responsive", "Basic SEO + performance", "GitHub Pages / deploy"],
    icon: "◈",
  },
  {
    title: "Frontend",
    desc: "Modern interfaces with React, Angular, TypeScript and Tailwind. Reusable, scalable components.",
    points: ["React · Angular · TS", "Tailwind CSS v4", "Neovim workflow"],
    icon: "▣",
  },
  {
    title: "Backend & Data",
    desc: "APIs and data with Java Spring Boot, Python Django/Flask, PostgreSQL and MongoDB. Analysis with Pandas + Streamlit.",
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
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
