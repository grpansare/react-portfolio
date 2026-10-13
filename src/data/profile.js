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
          "Building and shipping full-stack features for production web applications.",
        ],
      },
      {
        title: "Software Development Intern",
        type: "Internship",
        period: "Dec 2025 – Jun 2026",
        points: [
          "Worked on frontend and backend modules; converted to a full-time role.",
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
    period: "2024 – 2026",
  },
];

export const certifications = [
  { name: "IBM Data Science", issuer: "IBM", date: "Oct 2025", credentialId: "3385UN9Z5J9N" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM · Coursera", date: "Sep 2025", credentialId: "VU3IN9BYLSOO" },
  { name: "Docker and Kubernetes: The Complete Course", issuer: "Udemy", date: "Apr 2025" },
  { name: "The Web Developer Bootcamp 2024", issuer: "Udemy", date: "Dec 2024" },
  { name: "Full Stack Developer – Java Plus", issuer: "Seed Infotech Ltd", date: "Jan 2024" },
];
