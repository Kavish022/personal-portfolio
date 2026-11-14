export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type?: "work" | "education";
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Software Engineer – Full Stack Developer",
    company: "Webanix Pvt. Ltd.",
    location: "Rajasthan, India",
    period: "May 2026 – Present",
    current: true,
    type: "work",
    description:
      "Developing and maintaining mission-critical production features across the stack using React.js, Angular, TypeScript, Node.js and RxJS in an Agile/Scrum environment.",
    achievements: [
      "Developed and maintained full-stack production features using React.js, Angular, TypeScript, Node.js and RxJS.",
      "Built reusable, accessible UI component systems, integrated high-throughput REST APIs, and resolved critical reliability bugs.",
      "Collaborated closely with backend developers, QA automation teams, and UX designers to deliver enterprise deliverables on schedule.",
    ],
    technologies: ["React.js", "Angular", "TypeScript", "Node.js", "RxJS", "REST APIs", "Git"],
  },
  {
    id: "exp-2",
    role: "Software Engineering Intern",
    company: "Webanix Pvt. Ltd.",
    location: "Rajasthan, India",
    period: "Feb 2026 – May 2026",
    current: false,
    type: "work",
    description:
      "Gained hands-on production engineering experience contributing to frontend modules, state management, and API integrations across live client applications.",
    achievements: [
      "Engineered feature modules and UI enhancements utilizing Angular and TypeScript.",
      "Integrated backend REST APIs and handled asynchronous state streams with RxJS.",
      "Diagnosed and patched production bugs across live modules, boosting stability and performance.",
    ],
    technologies: ["Angular", "TypeScript", "RxJS", "REST APIs", "Git", "Scrum"],
  },
  {
    id: "edu-1",
    role: "Master of Computer Applications (MCA)",
    company: "JRNV University",
    location: "Rajasthan, India",
    period: "2024 – 2025",
    current: false,
    type: "education",
    description:
      "Advanced postgraduate program specializing in software engineering architectures, database management, distributed computing, and full-stack development methodologies.",
    achievements: [
      "In-depth research and coursework in modern distributed systems, web architectures, and advanced data structures.",
      "Engineered full-stack capstone projects using modern JavaScript, relational databases, and modular MVC/CSM patterns.",
    ],
    technologies: ["Advanced Software Engineering", "Relational Databases", "Distributed Systems", "Algorithms"],
  },
  {
    id: "edu-2",
    role: "Bachelor of Computer Applications (BCA)",
    company: "JRNV University",
    location: "Rajasthan, India",
    period: "2021 – 2023",
    current: false,
    type: "education",
    description:
      "Undergraduate computer science degree covering foundational programming paradigms, relational database theory, data structures, and web technologies.",
    achievements: [
      "Graduated with core competencies in Object-Oriented Programming (OOP), SQL database design, and web fundamentals.",
      "Participated in algorithmic problem solving and practical application development.",
    ],
    technologies: ["Data Structures", "OOP", "DBMS & SQL", "Web Fundamentals", "C++ / Java"],
  },
];
