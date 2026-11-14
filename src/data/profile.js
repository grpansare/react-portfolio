// Single source of truth for personal details shown across the site.
export const contact = {
  email: "grpansare2002@gmail.com",
  phone: "+91 7499661910",
  phoneHref: "tel:+917499661910",
  location: "Pune, India",
  github: "https://github.com/grpansare",
  linkedin: "https://www.linkedin.com/in/ganesh-pansare",
  resume: "/resume.pdf",
};

// Grouped by company; roles listed newest first.
export const experience = [
  {
    company: "humancloud",
    location: "Pune · On-site",
    roles: [
      {
        title: "Junior Software Engineer",
        type: "Full-time",
        period: "Jul 2026 – Present",
        points: [
          "Built ITIL-aligned features for an IT service management product: workflow automation, major-incident and problem/change management, a service catalog with approvals, knowledge-base governance and PDF reporting.",
          "Shipped HubSpot, Salesforce and Freshsales CRM integrations and branded customer emails for an AI meeting-transcription SaaS; made its Zoom/Meet recording bot more reliable (Playwright, BullMQ).",
          "Improved production readiness across services: security-audit fixes, Jest test suites, strict typing and CI/Kubernetes fixes; delivered AI-assisted bulk import for an IT asset management product.",
        ],
      },
      {
        title: "Software Development Intern",
        type: "Internship",
        period: "Dec 2025 – Jun 2026",
        points: [
          "One of the main contributors to an AI meeting-transcription SaaS from launch: NestJS/Prisma backend, Next.js frontend, and integration with shared auth, licensing and notification services.",
          "Co-developed an AI document-generation tool (Angular SSR) and delivered frontend features for a wealth-management app and a talent-matching proof of concept.",
          "Built services for TaskFlow, a Java microservices task manager with an API gateway and Docker; converted to a full-time role.",
        ],
      },
    ],
  },
  {
    company: "Secbyte Technologies",
    location: "Pune · Remote",
    roles: [
      {
        title: "Full Stack Developer Intern",
        type: "Internship",
        period: "Jun 2025 – Sep 2025",
        points: [
          "Developed REST APIs backed by MySQL.",
          "Integrated a payment gateway into the product's checkout flow.",
        ],
      },
    ],
  },
  {
    company: "Innovixion Tech · CodSoft",
    location: "Remote",
    roles: [
      {
        title: "Java & Web Development Intern",
        type: "Virtual internships",
        period: "2024",
        points: [
          "Built an Online Examination System with Spring Boot and JSP.",
          "Completed Java programming tasks and a personal portfolio site.",
        ],
      },
    ],
  },
];

export const stats = [
  { value: "1+ yr", label: "Industry experience" },
  { value: "4", label: "Internships" },
  { value: "5", label: "Certifications" },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "MES' Institute of Management & Career Courses (IMCC), Pune",
    period: "Aug 2024 – Apr 2026",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "Yashwantrao Mohite College, Pune",
    period: "2020 – 2023",
    grade: "SGPA 8.42",
  },
];

export const certifications = [
  { name: "IBM Data Science", issuer: "IBM", date: "Oct 2025", credentialId: "3385UN9Z5J9N" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM · Coursera", date: "Sep 2025", credentialId: "VU3IN9BYLSOO" },
  { name: "Docker and Kubernetes: The Complete Course", issuer: "Udemy", date: "Apr 2025" },
  { name: "The Web Developer Bootcamp 2024", issuer: "Udemy", date: "Dec 2024" },
  { name: "Full Stack Developer – Java Plus", issuer: "Seed Infotech Ltd", date: "Jan 2024" },
];
