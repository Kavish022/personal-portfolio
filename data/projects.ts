export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  detailedOverview: string;
  features: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  demoUrl: string;
  githubUrl: string;
  isDemoContent: boolean;
  featured: boolean;
  accentColor: string;
  mockupType: "hrms" | "ecommerce" | "kanban" | "productivity";
}

export const projectsData: Project[] = [
  {
    id: "b2b-oms",
    title: "B2B Order Management System (OMS)",
    category: "Enterprise Web App",
    tagline: "Enterprise Pricing Approval & Discount Workflow Platform",
    description:
      "A mission-critical enterprise pricing approval system streamlining complex discount approval processes with interactive data grids, customizable columns, multi-parameter filtering, and real-time margin calculations.",
    detailedOverview:
      "Engineered to streamline and govern B2B wholesale pricing approvals. Provides sales representatives and finance managers with an intuitive interface featuring interactive data grids, dynamic margin calculation, multi-level status validation (Draft, Pending, Approved, Rework, Rejected), and immutable audit logs.",
    features: [
      "Built interactive data grids with customizable columns, multi-parameter filtering, and responsive layouts",
      "Real-time margin and discount calculation engine executing instant client-side pricing checks",
      "Robust approval workflow engine with status transitions: Draft, Pending, Approved, Rework, Rejected",
      "Contextual inline validation, error boundaries, and tamper-proof audit logging for governance",
    ],
    technologies: ["React.js", "TypeScript", "Ant Design", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    metrics: [
      { label: "Workflow States", value: "5 Transitions" },
      { label: "Calculation", value: "Real-Time" },
      { label: "Filtering Speed", value: "<40ms" },
    ],
    demoUrl: "#demo-oms",
    githubUrl: "https://github.com/kavish022",
    isDemoContent: false,
    featured: true,
    accentColor: "#C5FF4A",
    mockupType: "kanban",
  },
  {
    id: "enterprise-hrms",
    title: "Enterprise HRMS – Recruitment Tracking",
    category: "Enterprise Web App",
    tagline: "Full-Stack Recruitment, Careers Portal & Candidate Management",
    description:
      "A comprehensive recruitment and hiring ecosystem built with React 18, Ant Design, and Node.js/Express with PostgreSQL. Features job postings, candidate onboarding, and layered Controller-Service-Model RESTful APIs.",
    detailedOverview:
      "Developed as a full-stack engineer covering the complete lifecycle from database schema design to frontend UI delivery. Built recruitment pipelines covering job postings, internal/external career portals, candidate onboarding, and interview management with role-based access control (RBAC). Layered Node.js/Express backend handles CRUD endpoints with DTO validation and Sequelize ORM persistence.",
    features: [
      "Layered Controller-Service-Model RESTful architecture in Node.js, Express & TypeScript with DTOs",
      "Persisted recruitment data in PostgreSQL through Sequelize ORM with candidate document uploads",
      "Candidate confirmation forms, rich-text job descriptions, and debounced candidate search/filtering",
      "Multi-stage status tracking, toast notifications, responsive Ant Design UI, and RBAC security",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "Ant Design",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
    ],
    metrics: [
      { label: "Backend Pattern", value: "Layered CSM" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Search Latency", value: "Debounced" },
    ],
    demoUrl: "#demo-hrms",
    githubUrl: "https://github.com/kavish022",
    isDemoContent: false,
    featured: true,
    accentColor: "#38bdf8",
    mockupType: "hrms",
  },
  {
    id: "baby-care-portal",
    title: "Baby Care Healthcare Portal",
    category: "Healthcare & Services",
    tagline: "Nurse Hiring Directory with Firebase OTP & Digital Contracts",
    description:
      "An on-demand healthcare web portal built with Angular and Firebase. Enables parents to search and hire verified nurses, authenticate securely via OTP, and sign legal hiring agreements digitally.",
    detailedOverview:
      "Contributed to UI revamps and frontend feature releases using Angular and RxJS. Integrated Firebase authentication with one-time password (OTP) verification, developed an interactive nurse directory for exploring credentials, and implemented an in-browser digital signature feature for executing binding nurse hiring contracts.",
    features: [
      "Contributed to UI revamps and frontend feature updates using Angular and RxJS",
      "Integrated Firebase OTP verification UI and end-to-end authentication flow",
      "Developed nurse directory module allowing users to view, search, and hire nurses",
      "Implemented a signature-based digital contract feature for signing hiring agreements in-browser",
    ],
    technologies: ["Angular", "TypeScript", "Firebase", "RxJS", "REST APIs", "Tailwind CSS"],
    metrics: [
      { label: "Auth Flow", value: "Firebase OTP" },
      { label: "Agreements", value: "E-Signature" },
      { label: "Architecture", value: "Reactive RxJS" },
    ],
    demoUrl: "#demo-babycare",
    githubUrl: "https://github.com/kavish022",
    isDemoContent: false,
    featured: true,
    accentColor: "#a855f7",
    mockupType: "productivity",
  },
  {
    id: "fullstack-cloud-api",
    title: "Cloud Ledger & API Microservices",
    category: "Backend & Cloud",
    tagline: "Containerized Docker Services with PostgreSQL & Supabase",
    description:
      "A resilient microservices suite showcasing containerized Node.js services with Docker, Supabase real-time subscriptions, Sequelize ORM data migrations, and automated REST contract validation.",
    detailedOverview:
      "Demonstrates enterprise backend capabilities with Docker containerization, PostgreSQL relational indexing, role-based JWT authorization, and automated API testing with Postman collections.",
    features: [
      "Dockerized Node.js and Express services with production-ready multi-stage containers",
      "Relational schema indexing and migration management using Sequelize ORM",
      "Supabase integration for real-time data sync and row-level security (RLS)",
      "Strict request validation using Zod and TypeScript DTOs",
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "Docker", "TypeScript"],
    metrics: [
      { label: "Container", value: "Docker" },
      { label: "Database", value: "Supabase" },
      { label: "Type Safety", value: "100%" },
    ],
    demoUrl: "#demo-cloud",
    githubUrl: "https://github.com/kavish022",
    isDemoContent: false,
    featured: true,
    accentColor: "#f43f5e",
    mockupType: "ecommerce",
  },
];
