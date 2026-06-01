export const projects = [
  {
    id: 1,
    title: "ATS_TRACKING_SYSTEM",
    description:
      " Comprehensive job application tracking system with resume parsing and analytics dashboard for job seekers.",
    tech: ["Streamlit", "Python","gemini_pro", "pypdf2","python.env"],
    github: "https://github.com/P-intu/END-TO-END-RESUME-ATS-TRACKING-SYSTEM.git",
    live: "https://ats-tracking-sys.streamlit.app/",
    accent: "#00f5a0",
  },
  {
    id: 2,
    title: "COMPLAINT_MANAGEMENT_SYSTEM",
    description:
      "Smart Complaint System – A sleek web app that lets users file complaints with ease, automatically creates and tracks tickets, and provides admins a real‑time dashboard to resolve issues faster",
    tech: [
    "Python","Django","REST","SimpleJWT","CORS","Pillow","Gunicorn","SQLite","React","Vite","Tailwind","Axios","Lucide","Git","Node",],
    github: "https://github.com/P-intu/Complaint_management_system",
    live: "https://complaint-management-system-tan.vercel.app",
    accent: "#7b61ff",
  },
  {
    id: 3,
    title: " EXPENSE_TRACKER_APP",
    description:
      "A sleek, minimalist Expense Tracker web app for personal finance. Effortlessly track income, expenses, and balances in real-time, with dynamic filtering by month and category for smart budgeting.",
    tech: ["Django", "Bootstrap", "Sqllite", "Git","DjangoTemplates","python"],
    github: "https://github.com/P-intu/Expense-Tracker-Web/tree/main",
    live: "https://expense-tracker-web-1-t53p.onrender.com/",
    accent: "#ff6b6b",
  },
  {
    id: 4,
    title: "Note_Management_System",
    description:
      "Notes App is a simple, private web application designed for personal note-taking. It features a clean dashboard where users can easily create, view, edit, delete, and search their notes, with options to star important entries for quick reference.",
    tech: ["Django", "Sqllite", "Git","DjangoTemplates","python"],
    github: "https://github.com/P-intu/django-notes-app/tree/main",
    live: "https://django-notes-app-a6vp.onrender.com/",
    accent: "#ffd93d",
  },

];

export const skills = {
  frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "JavaScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "HTML / CSS", level: 97 },
  ],
  backend: [
    { name: "Django", level: 90 },
    { name: "Python / Django Rest Framework", level: 80 },
    { name: "mysql", level: 83 },
    { name: "djangosimplejwt", level: 72 },
  ],
  devops: [
    { name: "CI/CD (GitHub Actions)", level: 82 },
    { name: "Git", level: 95 },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
