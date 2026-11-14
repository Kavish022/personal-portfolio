export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}

export interface QuickStat {
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
  detail: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  role: string;
  company: string;
  status: string;
  availability: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  bioHeadline: string;
  bioSummary: string;
  philosophy: string;
  approach: string[];
  education: EducationItem[];
  stats: QuickStat[];
  socials: SocialLink[];
  navLinks: { name: string; href: string }[];
}

export const portfolioData: PersonalInfo = {
  name: "Kavish Bhatt",
  initials: "KB",
  title: "Software Engineer – Full Stack Developer",
  role: "Full Stack & Frontend Developer",
  company: "Webanix Pvt. Ltd.",
  status: "Available for select opportunities",
  availability: "Q2 / Q3 2026",
  location: "Rajasthan, India",
  email: "kavishbhatt022@gmail.com",
  phone: "+91 9829580931",
  resumeUrl: "/api/resume",
  bioHeadline: "A Little About Me",
  bioSummary:
    "I'm a Full Stack Software Engineer at Webanix Pvt. Ltd. with hands-on expertise building production-grade web applications using React.js, Angular, TypeScript, Node.js, and PostgreSQL. I specialize in crafting robust frontend architectures, layered RESTful microservices, and high-performance interactive data systems.",
  philosophy:
    "Code is not just logic; it is craft. Great software balances mathematical rigor with human intuition — prioritizing speed, reliability, and maintainability across the entire stack.",
  approach: [
    "End-to-End Type Safety: Writing strictly typed TypeScript across frontend components, DTOs, and REST API controllers for bulletproof runtime reliability.",
    "Layered Architecture: Utilizing Controller-Service-Model designs with Sequelize ORM and PostgreSQL to keep backend business logic clean, testable, and decoupled.",
    "High-Performance UIs: Architecting complex data grids, debounced search filters, and reactive RxJS pipelines that handle heavy enterprise workflows effortlessly.",
    "Agile & Collaborative: Working closely with cross-functional teams, QA engineers, and designers to ship resilient, user-centric software on tight iterations.",
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "JRNV University",
      location: "Rajasthan, India",
      period: "2024 – 2025",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "JRNV University",
      location: "Rajasthan, India",
      period: "2021 – 2023",
    },
  ],
  stats: [
    {
      label: "Years of Experience",
      value: "1+",
      numericValue: 1,
      suffix: "+",
      detail: "Full stack at Webanix",
    },
    {
      label: "Production Projects",
      value: "3+",
      numericValue: 3,
      suffix: "+",
      detail: "B2B OMS, HRMS & Portal",
    },
    {
      label: "Core Technologies",
      value: "10+",
      numericValue: 10,
      suffix: "+",
      detail: "React, Angular, Node, SQL",
    },
    {
      label: "REST Endpoints & Modules",
      value: "25+",
      numericValue: 25,
      suffix: "+",
      detail: "Layered CRUD & services",
    },
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/kavish022",
      icon: "github",
      handle: "@kavish022",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kavish-bhatt/",
      icon: "linkedin",
      handle: "in/kavish-bhatt",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/kavishbhatt",
      icon: "instagram",
      handle: "@kavishbhatt",
    },
  ],
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
};
