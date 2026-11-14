export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techTags: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "frontend-engineering",
    number: "01",
    title: "Frontend Engineering",
    tagline: "Scalable React & Angular client applications built for speed and precision.",
    description:
      "Transforming complex product workflows into responsive, intuitive client applications. I architect clean React and Angular solutions with strict TypeScript typings, Redux Toolkit/RxJS state management, and reusable component hierarchies.",
    deliverables: [
      "Production-grade React.js & Angular web applications",
      "Interactive data grids with dynamic filtering & sorting",
      "Reactive state management with Redux Toolkit & RxJS",
      "Strict end-to-end TypeScript interfaces & contracts",
    ],
    techTags: ["React.js", "Angular", "TypeScript", "Redux Toolkit", "RxJS", "Tailwind CSS"],
    icon: "layers",
  },
  {
    id: "backend-api-architecture",
    number: "02",
    title: "Backend & RESTful APIs",
    tagline: "Layered Controller-Service-Model APIs and resilient relational data persistence.",
    description:
      "Engineering robust server-side services in Node.js and Express.js. I structure clean layered architectures with DTO validation, PostgreSQL persistence via Sequelize ORM, and secure role-based authorization.",
    deliverables: [
      "Layered Controller-Service-Model RESTful API design",
      "PostgreSQL relational modeling, migrations & Sequelize ORM",
      "Role-based access control (RBAC) & secure authentication",
      "Comprehensive API documentation & Postman testing suites",
    ],
    techTags: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "Sequelize ORM", "Docker"],
    icon: "zap",
  },
  {
    id: "ui-enterprise-systems",
    number: "03",
    title: "Enterprise UI & Workflow Systems",
    tagline: "High-productivity enterprise tools, data visualization, and approval engines.",
    description:
      "Specialized in high-density enterprise software such as Order Management Systems (OMS) and HRMS portals. I deliver multi-stage status workflows, interactive data tables, and seamless form validations.",
    deliverables: [
      "Multi-stage status workflow engines (Draft, Pending, Approved)",
      "Ant Design & Tailwind CSS enterprise dashboard implementation",
      "Debounced search filtering and real-time margin calculations",
      "Digital contract e-signing and document upload workflows",
    ],
    techTags: ["Ant Design", "Tailwind CSS", "Enterprise Workflows", "Audit Logging", "Supabase"],
    icon: "sparkles",
  },
];
