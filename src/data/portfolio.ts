const uangku = "/images/uangku.jpg";
const cleenbee = "/images/cleenbee.png";
const meetly = "/images/meetly.png";

export const owner = {
  fullName: "Ketut Angga Wicaksana",
  nickname: "Angga",
  role: "Fullstack Developer & Information Technology Student",
  university: "Telkom University Bandung",
  major: "Bachelor of Information Technology",
  status: "Active Student",
  bio: [
    "I am Ketut Angga Wicaksana, an Information Technology undergraduate student at Telkom University Bandung with a strong passion for Fullstack Development.",
    "I have a passion for building end-to-end digital products from intuitive frontends to robust and scalable backends. I am always enthusiastic about exploring new technologies and collaborating within creative teams.",
  ],
  quote: "Being invincible isn't about never falling. It's about rising every time the world tries to break you.",
  image: "/images/portrait.jpg",
};

export const skills = {
  frontend: [
    { name: "React / Next.js", level: 90 },
    { name: "Vue / Nuxt", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Flutter / React Native", level: 75 },
  ],
  backend: [
    { name: "Node.js / Express", level: 85 },
    { name: "Laravel / PHP", level: 80 },
  ],
  database: [
    { name: "PostgreSQL / MySQL", level: 80 },
  ],
};

export const projects = [
  {
    id: "project-1",
    title: "UANGKU",
    stack: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    description: "A personal finance management application to record income and expenses, and view digital financial reports.",
    category: "Web App",
    status: "Completed",
    image: uangku,
    link: "#",
    size: "large",
  },
  {
    id: "project-2",
    title: "MEETLY",
    stack: ["Laravel", "Vue.js", "TypeScript", "MySQL", "Inertia.js", "Tailwind CSS"],
    description: "A modern social media platform for sharing posts and interacting with other users, featuring messaging, notifications, and a content moderation system.",
    category: "Web App",
    status: "Completed",
    image: meetly,
    link: "#",
    size: "small",
  },
  {
    id: "project-3",
    title: "CLEANBEE",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Auth"],
    description: "A mobile application for booking student dormitory cleaning services, equipped with scheduling, real-time chat, notifications, and a rating and review system.",
    category: "Mobile App",
    status: "Completed",
    image: cleenbee,
    link: "#",
    size: "small",
  },
  {
    id: "project-4",
    title: "PROFILE COMPANY",
    stack: ["Next.js", "TypeScript", "Laravel API"],
    description: "A modern company profile website featuring a headless CMS and a 95+ Lighthouse score.",
    category: "Web App",
    status: "Completed",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDixAPnNLVuBXK3jOWy7sDAc7lvB9eDgZywvfpcTrRfe0rwPW2W7BxzeIem2DGFLt2fY4gmF9KQvTPq3xYuuiXkkmrL1mS1VLwbL3m0k0IzjNqgD97Z3WmjZ-EPSIl7P1AkxdrNRfZy63g9MZon4dWelk0N24Q0M2pjWqlmCjrVEAfKuxPG1yiY6-X3FAyl-90rxdOYIikwjzToaC-PKcDioIfgCsul8D8dQbZQ4CU3UYCX1feeqJpzXTXRGgfrKmta5W0jkpZWVkwR",
    link: "#",
    size: "large",
  },
];

export const certifications = [
  { name: "Introduction to Cyber Security", issuer: "Cisco", year: "2025", icon: "workspace_premium" },
  { name: "Completion of Bootcamp", issuer: "Cisometic Academy", year: "2025", icon: "verified" },
  { name: "Back End Development & APIs", issuer: "freeCodeCamp", year: "2023", icon: "stars" },
  { name: "Google IT Support Professional", issuer: "Google / Coursera", year: "2023", icon: "military_tech" },
  { name: "Flutter & Dart – The Complete Guide", issuer: "Udemy", year: "2024", icon: "laptop_chromebook" },
  { name: "SQL for Data Science", issuer: "UC Davis / Coursera", year: "2022", icon: "database" },
];

export const contacts = {
  heading: "Let's Collaborate",
  subtext: "Open for freelance projects, collaborations, or tech discussions. Feel free to reach out!",
  buttonText: "Send Message",
  socials: {
    github: "https://github.com/ketutanggawicaksana",
    linkedin: "https://www.linkedin.com/in/ketut-angga-wicaksana-8a0946280/",
    instagram: "https://instagram.com/@nggaa.w",
    email: "anggawicaksana@student.telkomuniversity.ac.id",
    whatsapp: "https://wa.me/6282154592338",
  },
};
