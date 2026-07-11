import {
  Code2,
  Database,
  Server,
  Globe,
  Wrench,
  Mail,
} from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

export const SKILLS = [
  {
    icon: Code2,
    title: "Languages",
    items: [
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "SQL", slug: "mysql", whiteIcon: true },
      { name: "Python", slug: "python" },
      { name: "C/C++", slug: "cplusplus" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3", whiteIcon: true },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express", whiteIcon: true },
      { name: "REST APIs", slug: null },
      { name: "Firebase", slug: "firebase" },
      { name: "Supabase", slug: "supabase" },
      { name: "OAuth 2.0", slug: null, customImg: "/oauth.webp" },
      { name: "JWT", slug: "jsonwebtokens", whiteIcon: true },
      { name: "NeonDB", slug: "neon" },
      { name: "Stripe", slug: "stripe" },
    ],
  },
  {
    icon: Globe,
    title: "Frontend",
    items: [
      { name: "React.js", slug: "react" },
      { name: "Next.js", slug: "nextdotjs", whiteIcon: true },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "TanStack Query", slug: "reactquery" },
      { name: "Axios", slug: "axios", whiteIcon: true },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql", whiteIcon: true },
      { name: "PostgreSQL", slug: "postgresql", whiteIcon: true },
      { name: "Prisma", slug: "prisma", whiteIcon: true },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github", whiteIcon: true },
      { name: "Cursor", slug: null, customImg: "/cursor.webp" },
      { name: "Postman", slug: "postman" },
      { name: "Antigravity", slug: null, customImg: "/antigravity.jpg" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    role: "Web Development Instructor",
    company: "CUB Skill Development Program",
    location: "On-site",
    period: "Mar 2026 – Present",
    bullets: [
      "Delivered a full-stack curriculum to a cohort of 12 students covering JS frameworks, responsive frontend and backend API architecture.",
      "Mentored students through the full SDLC, conducting 8+ hands-on code reviews and guiding deployment of 8 functional web apps.",
    ],
    stack: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE.JS"],
    current: true,
  },
  {
    role: "Competitive Programming Instructor",
    company: "Canadian University of Bangladesh",
    location: "On-site",
    period: "Jan 2023 – Oct 2023",
    bullets: [
      "Instructed 35 freshman students across two semesters in foundational C/C++ with hands-on algorithmic curricula.",
      "Coached 10 student teams across 2 live programming contests, providing optimization and real-time debugging guidance.",
    ],
    stack: ["C", "C++", "ALGORITHMS", "DATA STRUCTURES"],
    current: false,
  },
];

export const EDUCATION = [
  {
    role: "BSc in Computer Science & Engineering",
    company: "Canadian University Of Bangladesh",
    period: "2022 - 2026",
    bullets: [
      "Pursuing a rigorous computer science curriculum with focus on algorithms, data structures, software engineering, and modern web systems.",
    ],
    stack: ["Data Structures & Algorithms", "Database Systems", "Software Engineering", "OOP"],
    current: true,
  },
  {
    role: "Higher Secondary Certificate (HSC)",
    company: "Jalalabad College",
    gpa: "5.00",
    period: "2019 - 2021",
    bullets: [
      "Completed HSC with Science group, building a strong foundation in Mathematics, Physics, and logical reasoning.",
    ],
    stack: ["Mathematics", "Chemistry", "Physics", "Information Technology"],
    current: false,
  },
  {
    role: "Secondary School Certificate (SSC)",
    company: "Sylhet Govt Pilot High School",
    gpa: "4.94",
    period: "2019",
    bullets: [
      "Graduated SSC with a focus on core sciences, establishing early analytical skills and academic excellence.",
    ],
    stack: ["Mathematics", "Chemistry", "Physics", "Information Technology"],
    current: false,
  }
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
  { id: "github", icon: Github, href: "https://github.com/NahidRuhan", label: "GitHub" },
  { id: "linkedin", icon: Linkedin, href: "https://linkedin.com/in/nahidruhan", label: "LinkedIn" },
  { id: "email", icon: Mail, href: "mailto:nahidpervejruhan@gmail.com", label: "Email" },
];
