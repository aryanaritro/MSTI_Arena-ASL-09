/**
 * All portfolio content lives here.
 * Replace the PLACEHOLDER entries with real data — the UI adapts automatically.
 */
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";

import ArshiNagar from "@/assets/Arshi_Nagar.png";
import arshinagar from "@/assets/arshi_nagar.png";
import arythic from "@/assets/Arythic.png";
import viro from "@/assets/Viro.png";
import resourcelibrary from "@/assets/Resource_Library.png";

export const profile = {
  name: "Aryan Aritro",
  roles: " Developer / Innovator / Technologist",
  eyebrow: "Hi, I'm Aryan Aritro.",
  tagline: "Enthusiast, Developer, Innovator.",
  headline: ["I turn", "imaginations", "into systems."],
  location: "Mymensingh, Bangladesh",
  email: "knowledgeexplorar@gmail.com",
  github: "https://github.com/aryanaritro",
  linkedin: "https://linkedin.com/in/aryanaritro",
  bookcall: "https://cal.com/v.-aryan-kabir-ebhxxk/30min",
};

//=========Workfield Card Data===========

export type Capability = {
  index: string;
  title: string;
  description: string;
  tech: string[];
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Frontend Development",
    description:
      "Responsive interfaces and digital experiences built with modern frontend technologies.",
    tech: ["React", "TypeScript", "TypeScript JSX", "Tailwind CSS", "Vite"],
  },
  {
    index: "02",
    title: "Backend & Data Systems",
    description:
      "Application logic, server-side systems and data-driven services built for practical use.",
    tech: [
      "Python",
      "Flask",
      "Node.js",
      "REST APIs",
      "SQLite",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    index: "03",
    title: "CMS, E-commerce & Integrations",
    description:
      "Connecting applications, services and intelligent systems through APIs, real-time communication and automation.",
    tech: [
      "WordPress",
      "WooCommerce",
      "REST API",
      "Saas",
      "Payment",
      "Automation",
    ],
  },
  {
    index: "04",
    title: "UI / Graphic Design",
    description:
      "Interface design, visual systems and digital graphics focused on clarity, consistency and visual identity.",
    tech: ["Figma", "UI Design", "Graphic Design", "Visual Systems"],
  },
  {
    index: "05",
    title: "AI & Smart Assistants",
    description:
      "Intelligent tools and personal assistant systems combining voice interaction, automation and application logic.",
    tech: ["Python", "AI Integration", "Voice Interfaces", "Automation"],
  },
  {
    index: "06",
    title: "Embedded Systems & Mechatronics",
    description:
      "Microcontroller-based systems combining electronics, firmware, control logic and physical hardware.",
    tech: ["Microcontrollers", "Hardware-software integration"],
  },
];

//=========Projects Data===========

export type ProjectCategory =
  "Websites" | "Software" | "Embedded Systems" | "Experiments";

export type Project = {
  index: string;
  name: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  role: string;
  year: string;
  status: string;
  url?: string;
  image: string;
};

// PLACEHOLDER PROJECTS — swap names, copy and links for real work.
export const projects: Project[] = [
  {
    index: "01",
    name: "ARYTHIC.",
    category: "Websites",
    description: "A Platform for Digital Solutions, Ideas, and Research.",
    tech: [
      "TypeScript JSX",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Vite",
      "Vercel Web Analytics",
      "Vercel",
    ],
    year: "2026",
    status: "Live",
    role: "Design & Development",
    image: arythic,
    url: "https://arythic.vercel.app",
  },
  {
    index: "02",
    name: "Arshi Nagar",
    category: "Websites",
    description:
      "A modern & contemporary fashion E-commerce website blending classical aesthetics with contemporary design.",
    tech: [
      "TypeScript JSX",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Vite",
      "Vercel",
    ],
    role: "Design & Development",
    year: "2026",
    status: "Under development",
    image: ArshiNagar,
    url: "https://arshinagar-fashion.vercel.app",
  },
  {
    index: "03",
    name: "Resource Library-MEC",
    category: "Websites",
    description:
      "Academic resources, assignment tools, printing services, and student communities — brought together for MEC students.",
    tech: [
      "TypeScript JSX",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Vite",
      "Vercel",
      "Supabase",
      "PostgreSQL",
      "REST API",
      "Backblaze B2",
    ],
    role: "Design & Development",
    year: "2026",
    status: "Live",
    image: resourcelibrary,
    url: "https://resourcelibrary-mec.vercel.app/resources",
  },
  {
    index: "04",
    name: "NEXUS 2.0",
    category: "Embedded Systems",
    description:
      "A modular Microcontroller-based control hub designed as the central interface for embedded hardware systems, and expandable modules for robotics, automation, and IoT experiments.",
    tech: ["Microcontrollers", "Arduino C++", "Embedded Systems"],
    year: "2025",
    status: "Version 2.0",
    role: "Lead Developer",
    image: work03,
  },
];

export type Site = {
  name: string;
  url: string;
  what: string;
  role: string;
  tech: string[];
  image: string;
};

//=========

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Programming",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  { title: "Web", items: ["HTML", "CSS", "React", "Tailwind CSS"] },
  { title: "Software", items: ["Application logic", "Tooling", "Automation"] },
  {
    title: "AI",
    items: ["Assistant systems", "Automation", "Intelligent tools"],
  },
  {
    title: "Embedded",
    items: ["Microcontrollers", "Electronics", "Embedded systems"],
  },
  { title: "Design", items: ["Graphic design", "UI design", "Visual systems"] },
  { title: "Tools", items: ["Git", "VS Code", "Figma"] },
];

export const journey: { phase: string; when: string; note: string }[] = [
  {
    phase: "Education",
    when: "Ongoing",
    note: "Electrical & Electronic Engineering, Mymensingh Engineering College.",
  },
  {
    phase: "Building",
    when: "Ongoing",
    note: "Websites, tools and software systems built end to end.",
  },
  {
    phase: "Published",
    when: "2025 —",
    note: "Live products shipped to the open web.",
  },
  {
    phase: "Experimenting",
    when: "2025 —",
    note: "AI assistants, automation and embedded crossovers.",
  },
  {
    phase: "Developing",
    when: "Now",
    note: "Deeper systems, cleaner architecture, better craft.",
  },
];
