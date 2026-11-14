export interface SkillItem {
  name: string;
  level: "Advanced" | "Expert" | "Proficient";
  experience: string;
  description: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  shortDescription: string;
  icon: string;
  skills: SkillItem[];
}

export const skillsCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Engineering",
    shortDescription: "Building responsive, reactive, and component-driven client applications.",
    icon: "code-2",
    skills: [
      {
        name: "React.js",
        level: "Expert",
        experience: "Production",
        description: "Modern Hooks, component lifecycle, Context API, Redux Toolkit, and performance tuning.",
        highlight: true,
      },
      {
        name: "Angular",
        level: "Expert",
        experience: "Production",
        description: "Dependency injection, services, reactive forms, routing, and RxJS observable streams.",
        highlight: true,
      },
      {
        name: "TypeScript",
        level: "Expert",
        experience: "Production",
        description: "Strict typing, interfaces, generics, utility types, and compile-time contract safety.",
        highlight: true,
      },
      {
        name: "JavaScript (ES6+)",
        level: "Expert",
        experience: "Production",
        description: "Asynchronous programming, closures, promises, event loop, and DOM manipulation.",
      },
      {
        name: "Redux Toolkit",
        level: "Advanced",
        experience: "Production",
        description: "Global state slices, thunks, normalized state shapes, and immutable updates.",
        highlight: true,
      },
      {
        name: "RxJS",
        level: "Advanced",
        experience: "Production",
        description: "Observables, reactive stream pipelines, pipeable operators, and state subscriptions.",
      },
      {
        name: "Ant Design",
        level: "Advanced",
        experience: "Production",
        description: "Enterprise data tables, complex validation forms, modal dialogs, and component theming.",
      },
      {
        name: "Tailwind CSS",
        level: "Expert",
        experience: "Production",
        description: "Utility-first CSS, custom design tokens, responsive layouts, and dark mode transitions.",
        highlight: true,
      },
      {
        name: "HTML5 & SCSS",
        level: "Expert",
        experience: "Production",
        description: "Semantic web standards, accessibility landmarking, modular SASS mixins, and variables.",
      },
    ],
  },
  {
    id: "backend-db",
    name: "Backend & Database",
    shortDescription: "Layered Controller-Service-Model RESTful APIs and relational persistence.",
    icon: "server",
    skills: [
      {
        name: "Node.js",
        level: "Advanced",
        experience: "Production",
        description: "Event-driven runtime, asynchronous I/O, file streams, and microservice backends.",
        highlight: true,
      },
      {
        name: "Express.js",
        level: "Advanced",
        experience: "Production",
        description: "Modular route handlers, authentication middleware, error schema handling, and DTOs.",
        highlight: true,
      },
      {
        name: "REST APIs",
        level: "Expert",
        experience: "Production",
        description: "Layered Controller-Service-Model architecture, JSON schemas, pagination, and status codes.",
        highlight: true,
      },
      {
        name: "PostgreSQL",
        level: "Advanced",
        experience: "Production",
        description: "Relational schema design, indexes, foreign keys, constraints, and query optimization.",
        highlight: true,
      },
      {
        name: "Sequelize ORM",
        level: "Advanced",
        experience: "Production",
        description: "Model associations, migrations, transactions, validation hooks, and data persistence.",
      },
      {
        name: "Supabase",
        level: "Advanced",
        experience: "Production",
        description: "Postgres-backed backend-as-a-service, Row Level Security (RLS), and realtime subscriptions.",
      },
    ],
  },
  {
    id: "tools",
    name: "DevOps & Toolchain",
    shortDescription: "Version control, containerization, API testing, and build tooling.",
    icon: "wrench",
    skills: [
      {
        name: "Git",
        level: "Expert",
        experience: "Production",
        description: "Branching strategies, interactive rebasing, merge conflict resolution, and commit hygiene.",
        highlight: true,
      },
      {
        name: "GitHub",
        level: "Expert",
        experience: "Production",
        description: "Pull request reviews, GitHub Actions CI/CD workflows, project boards, and release tagging.",
        highlight: true,
      },
      {
        name: "Docker",
        level: "Advanced",
        experience: "Production",
        description: "Containerization of Node.js services, multi-stage Dockerfiles, and compose environments.",
        highlight: true,
      },
      {
        name: "Postman",
        level: "Advanced",
        experience: "Production",
        description: "API contract testing, environment variables, collection runners, and endpoint mocking.",
      },
      {
        name: "Vite",
        level: "Expert",
        experience: "Production",
        description: "Blazing fast HMR, modern ESM bundling, plugins, and production build optimizations.",
      },
      {
        name: "VS Code",
        level: "Expert",
        experience: "Production",
        description: "Advanced debugging configurations, productivity extensions, and workspace customization.",
      },
    ],
  },
];
