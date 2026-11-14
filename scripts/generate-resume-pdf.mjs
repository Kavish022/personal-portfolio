import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

const doc = new jsPDF({
  orientation: "portrait",
  unit: "pt",
  format: "a4",
});

const pageWidth = doc.internal.pageSize.getWidth();
const margin = 40;
const contentWidth = pageWidth - margin * 2;
let y = 42;

function checkPage(needed) {
  if (y + needed > doc.internal.pageSize.getHeight() - 36) {
    doc.addPage();
    y = 40;
  }
}

// Header Name
doc.setFont("times", "normal");
doc.setFontSize(22);
doc.text("KAVISH BHATT", pageWidth / 2, y, { align: "center" });
y += 18;

// Contact Row
doc.setFontSize(9.5);
doc.setFont("times", "normal");
const contactText = "+91 9829580931   |   kavishbhatt022@gmail.com   |   LinkedIn: kavish-bhatt   |   GitHub: kavish022";
doc.text(contactText, pageWidth / 2, y, { align: "center" });
y += 18;

function addSectionTitle(title) {
  checkPage(28);
  y += 4;
  doc.setFont("times", "bold");
  doc.setFontSize(11);
  doc.text(title.toUpperCase(), margin, y);
  y += 4;
  doc.setLineWidth(0.75);
  doc.setDrawColor(40, 40, 40);
  doc.line(margin, y, margin + contentWidth, y);
  y += 14;
}

function addBullet(text) {
  const bulletIndent = 12;
  const textIndent = 20;
  const maxWidth = contentWidth - textIndent;
  
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  
  const lines = doc.splitTextToSize(text, maxWidth);
  checkPage(lines.length * 12 + 3);
  
  doc.text("•", margin + bulletIndent, y);
  doc.text(lines, margin + textIndent, y);
  y += lines.length * 12 + 2;
}

// EDUCATION
addSectionTitle("Education");

doc.setFont("times", "bold");
doc.setFontSize(10.5);
doc.text("JRNV University", margin, y);
doc.setFont("times", "normal");
doc.text("Rajasthan", margin + contentWidth, y, { align: "right" });
y += 13;

doc.setFont("times", "italic");
doc.setFontSize(9.8);
doc.text("Master of Computer Applications (MCA)", margin, y);
doc.setFont("times", "normal");
doc.text("2024 – 2025", margin + contentWidth, y, { align: "right" });
y += 15;

doc.setFont("times", "bold");
doc.setFontSize(10.5);
doc.text("JRNV University", margin, y);
doc.setFont("times", "normal");
doc.text("Rajasthan", margin + contentWidth, y, { align: "right" });
y += 13;

doc.setFont("times", "italic");
doc.setFontSize(9.8);
doc.text("Bachelor of Computer Applications (BCA)", margin, y);
doc.setFont("times", "normal");
doc.text("2021 – 2023", margin + contentWidth, y, { align: "right" });
y += 16;

// EXPERIENCE
addSectionTitle("Experience");

// Webanix Engineer
doc.setFont("times", "bold");
doc.setFontSize(10.5);
doc.text("Software Engineer – Full Stack Developer", margin, y);
const swEngWidth = doc.getTextWidth("Software Engineer – Full Stack Developer");
doc.setFont("times", "normal");
doc.text(" | Webanix Pvt. Ltd.", margin + swEngWidth, y);
doc.text("May 2026 – Present", margin + contentWidth, y, { align: "right" });
y += 13;

addBullet("Developed and maintained production features across the stack using React.js, Angular, TypeScript, Node.js and RxJS.");
addBullet("Built reusable UI components, integrated REST APIs, fixed bugs and improved reliability.");
addBullet("Collaborated with backend developers, QA and designers in an Agile/Scrum environment.");
y += 6;

// Webanix Intern
doc.setFont("times", "bold");
doc.setFontSize(10.5);
doc.text("Software Engineering Intern", margin, y);
const swIntWidth = doc.getTextWidth("Software Engineering Intern");
doc.setFont("times", "normal");
doc.text(" | Webanix Pvt. Ltd.", margin + swIntWidth, y);
doc.text("Feb 2026 – May 2026", margin + contentWidth, y, { align: "right" });
y += 13;

addBullet("Gained hands-on production experience with Angular, TypeScript and REST API integration, supporting feature development and bug fixes across live modules.");
y += 8;

// PROJECTS
addSectionTitle("Projects");

// Project 1: B2B OMS
doc.setFont("times", "bold");
doc.setFontSize(10.5);
doc.text("B2B Order Management System (OMS)", margin, y);
y += 13;
addBullet("Developed frontend features for an enterprise pricing approval workflow system, helping streamline discount approval processes.");
addBullet("Built interactive data grids with customizable columns, multi-parameter filtering, and real-time margin and discount calculations.");
addBullet("Implemented approval workflows with status transitions (Draft, Pending, Approved, Rework, Rejected), contextual validation, and audit logging.");
y += 6;

// Project 2: Enterprise HRMS
doc.setFont("times", "bold");
doc.setFontSize(10.5);
doc.text("Enterprise HRMS – Recruitment Tracking", margin, y);
const hrmsWidth = doc.getTextWidth("Enterprise HRMS – Recruitment Tracking");
doc.setFont("times", "italic");
doc.setFontSize(9.8);
doc.text(" | Full Stack Engineer", margin + hrmsWidth, y);
y += 12;

doc.setFont("times", "italic");
doc.setFontSize(8.8);
doc.setTextColor(50, 50, 50);
doc.text("Tech Stack: React 18, TypeScript, Redux Toolkit, Ant Design, Vite | Node.js, Express.js, PostgreSQL, Sequelize", margin, y);
doc.setTextColor(0, 0, 0);
y += 11;

addBullet("Built recruitment workflows covering job postings, public/internal careers portals, candidate onboarding and interview management, with multi-stage status tracking and role-based access control.");
addBullet("Implemented candidate confirmation forms and rich-text job descriptions, and improved the hiring experience with a responsive UI, toast notifications, and debounced candidate search and filtering.");
addBullet("Developed RESTful APIs in Node.js, Express.js and TypeScript for qualifications, employee requests, job listings, candidates and interviews, each with create/update, list, detail and delete endpoints, using a layered Controller–Service–Model architecture with DTOs.");
addBullet("Persisted recruitment data in PostgreSQL through Sequelize ORM and built the candidate document upload endpoint.");
addBullet("Worked closely with the backend developer on API specifications and JSON schemas, and integrated the APIs end-to-end with the React frontend.");
y += 6;

// Project 3: Baby Care Portal
doc.setFont("times", "bold");
doc.setFontSize(10.5);
doc.text("Baby Care Portal", margin, y);
const babyWidth = doc.getTextWidth("Baby Care Portal");
doc.setFont("times", "italic");
doc.setFontSize(9.8);
doc.text(" | Angular, Firebase", margin + babyWidth, y);
y += 13;

addBullet("Integrated APIs and contributed to UI revamps and frontend feature updates using Angular.");
addBullet("Built the Firebase OTP verification UI and integrated the authentication flow.");
addBullet("Developed the nurse directory module, where users can view the nurses they can hire through the portal.");
addBullet("Implemented a signature-based contract feature for hiring nurses, allowing the hiring agreement to be signed digitally within the portal.");
y += 8;

// TECHNICAL SKILLS
addSectionTitle("Technical Skills");

function addSkillLine(label, skills) {
  checkPage(16);
  doc.setFont("times", "bold");
  doc.setFontSize(9.8);
  doc.text(label + ": ", margin, y);
  const labelWidth = doc.getTextWidth(label + ": ");
  doc.setFont("times", "normal");
  doc.text(skills, margin + labelWidth, y);
  y += 14;
}

addSkillLine("Frontend", "React.js, Angular, TypeScript, JavaScript, Redux Toolkit, RxJS, Ant Design, Tailwind CSS, HTML5, SCSS");
addSkillLine("Backend", "Node.js, Express.js, REST APIs, Sequelize ORM");
addSkillLine("Database", "PostgreSQL, Supabase");
addSkillLine("Tools", "Git, GitHub, Docker");

const outputDir = path.resolve("public");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
const outputPath = path.join(outputDir, "Kavish_Bhatt_Resume.pdf");
const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
fs.writeFileSync(outputPath, pdfBuffer);
console.log("Resume PDF generated successfully at:", outputPath);

