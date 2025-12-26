import resumePdf from "./assets/Puspak_Samanta_Resume.pdf";

const PORTFOLIO_DATA = {
  personal: {
    name: "Puspak Samanta",
    role: "Software Engineering Student",
    tagline: "Building scalable solutions & exploring new technologies.",
    about: "I'm a Computer Science student with a strong passion for full-stack development and building practical, user-focused solutions. When I'm not debugging or exploring new technologies, I enjoy working on personal projects that push me to learn new tools and improve my problem-solving skills. I love breaking down complex challenges and turning them into clean, intuitive interfaces that create real impact.",
    email: "samantapuspak@gmail.com",
    github: "https://github.com/puspak29",
    linkedin: "https://linkedin.com/in/puspak-samanta",
    university: "University of Engineering and Management, Kolkata",
    graduation: "Expected July 2026",
    resumePdfUrl: resumePdf,
    // NEW: Data for the decorative code block in the Hero section
    heroCodeLines: [
      { key: "name", value: `'Puspak Samanta'`, color: "text-green-400" },
      { key: "skills", value: `['React', 'Node', 'DSA', 'C/C++']`, color: "text-yellow-300" },
      { key: "hardWorker", value: `true`, color: "text-purple-400" }
    ]
  },
  skills: [
    // { category: "Languages", items: ["JavaScript", "C/C++"] },
    { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "Next.js", "Bootstrap", "HTML", "CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Appwrite", "Firebase"] },
    { category: "Tools & DevOps", items: ["Git", "Postman", "Linux", "Vercel", "VS Code", "LaTeX"] }
  ],
  
  experience: [
    {
      id: 1,
      role: "R&D Intern",
      company: "IEDC, UEM Kolkata",
      duration: "5/2025 – 7/2025",
      description: "Contributed to developing a data-driven stock forecasting web application. Ensuring secure, privacy-aware, and reliable functionality."
    }
  ],
  projects: [
    {
      id: 1,
      title: "MedHistory",
      description: "A medical history and appointment platform with role-based access, digital report cards, appointment booking, doctor search, and OTP-verified report updates.",
      tags: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MongoDB"],
      links: { demo: "https://medhistory.vercel.app/", code: "https://github.com/Puspak29/Medi-Frontend" },
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "BookVenue",
      description: "A venue management platform built with React, Tailwind CSS, and Appwrite. Features include user authentication, venue listings with CRUD operations, and a booking system with history tracking.",
      tags: ["React", "Tailwind CSS", "Appwrite", "Next.js"],
      links: { demo: "https://book-venue-xi.vercel.app/", code: "https://github.com/Puspak29/book-venue" },
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "A task management app built with React, Tailwind CSS, and Firestore. Features include user authentication, task CRUD operations, local storage support, and completion tracking.",
      tags: ["React", "Tailwind CSS", "Firestore", "Local Storage"],
      links: { demo: "https://puspak29.github.io/todo_app/", code: "https://github.com/Puspak29/todo_app" },
      color: "from-emerald-500 to-green-400"
    }
  ]
};

export default PORTFOLIO_DATA;