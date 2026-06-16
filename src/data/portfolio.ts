export const owner = {
  fullName: "Ketut Angga Wicaksana",
  nickname: "Angga",
  role: "Fullstack Developer & Information Technology Student",
  university: "Telkom University Bandung",
  major: "S1 Teknologi Informasi",
  status: "Active Student",
  bio: [
    "Saya Ketut Angga Wicaksana, mahasiswa S1 Teknologi Informasi di Telkom University Bandung yang memiliki ketertarikan sebagai Fullstack Developer.",
    "Saya memiliki passion dalam membangun produk digital end-to-end — dari sisi frontend yang intuitif hingga backend yang robust dan skalabel. Selalu antusias mengeksplorasi teknologi baru dan berkolaborasi dalam tim yang kreatif.",
  ],
  quote: "Art is not what you see, but what you make others see through the lens of timeless restraint.",
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
    description: "Aplikasi manajemen keuangan personal untuk mencatat pemasukan, pengeluaran, dan melihat laporan keuangan secara digital.",
    category: "Web App",
    status: "Completed",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo2B9mGfiTARy8Y6XuMWNlBGKJe9_R2dwzCNVmdgjHeh2sZu0fg0ebMGh5britCC4zFxOLP83NMs6-yJmjKJaJlgxxsZjhsUnm35KtPvv-rekjiYcsgouKc01xfcBdLFYSa0FJVNmZnvS84Ub_j6UP3llveWXCjYpEl_-sLKZCUohcTaL2Px1mR0cpjsNqhXMPfZHXZ7vn9dpVO0Iuu6iKNE-TzoiE8wu1ZgBV5_9O6mGsKFAK0SOvNz2yjX-dU5iWPpQAlrB1JkHr", // Placeholder, you can update
    link: "#",
    size: "large",
  },
  {
    id: "project-2",
    title: "MEETLY",
    stack: ["Laravel", "Vue.js", "TypeScript", "MySQL", "Inertia.js", "Tailwind CSS"],
    description: "Platform media sosial modern untuk berbagi postingan, berinteraksi dengan pengguna lain, serta dilengkapi fitur pesan, notifikasi, dan sistem moderasi konten.",
    category: "Web App",
    status: "Completed",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDixAPnNLVuBXK3jOWy7sDAc7lvB9eDgZywvfpcTrRfe0rwPW2W7BxzeIem2DGFLt2fY4gmF9KQvTPq3xYuuiXkkmrL1mS1VLwbL3m0k0IzjNqgD97Z3WmjZ-EPSIl7P1AkxdrNRfZy63g9MZon4dWelk0N24Q0M2pjWqlmCjrVEAfKuxPG1yiY6-X3FAyl-90rxdOYIikwjzToaC-PKcDioIfgCsul8D8dQbZQ4CU3UYCX1feeqJpzXTXRGgfrKmta5W0jkpZWVkwR",
    link: "#",
    size: "small",
  },
  {
    id: "project-3",
    title: "CLEANBEE",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Auth"],
    description: "Aplikasi mobile untuk pemesanan layanan kebersihan asrama mahasiswa, dilengkapi fitur penjadwalan, chat real-time, notifikasi, dan sistem rating ulasan.",
    category: "Mobile App",
    status: "Completed",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo2B9mGfiTARy8Y6XuMWNlBGKJe9_R2dwzCNVmdgjHeh2sZu0fg0ebMGh5britCC4zFxOLP83NMs6-yJmjKJaJlgxxsZjhsUnm35KtPvv-rekjiYcsgouKc01xfcBdLFYSa0FJVNmZnvS84Ub_j6UP3llveWXCjYpEl_-sLKZCUohcTaL2Px1mR0cpjsNqhXMPfZHXZ7vn9dpVO0Iuu6iKNE-TzoiE8wu1ZgBV5_9O6mGsKFAK0SOvNz2yjX-dU5iWPpQAlrB1JkHr",
    link: "#",
    size: "small",
  },
  {
    id: "project-4",
    title: "PROFILE COMPANY",
    stack: ["Next.js", "TypeScript", "Laravel API"],
    description: "Website company profile modern dengan CMS headless dan performa Lighthouse score 95+.",
    category: "Web App",
    status: "Completed",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDixAPnNLVuBXK3jOWy7sDAc7lvB9eDgZywvfpcTrRfe0rwPW2W7BxzeIem2DGFLt2fY4gmF9KQvTPq3xYuuiXkkmrL1mS1VLwbL3m0k0IzjNqgD97Z3WmjZ-EPSIl7P1AkxdrNRfZy63g9MZon4dWelk0N24Q0M2pjWqlmCjrVEAfKuxPG1yiY6-X3FAyl-90rxdOYIikwjzToaC-PKcDioIfgCsul8D8dQbZQ4CU3UYCX1feeqJpzXTXRGgfrKmta5W0jkpZWVkwR",
    link: "#",
    size: "large",
  },
];

export const certifications = [
  { name: "Junior Web Developer", issuer: "BNSP (Badan Nasional Sertifikasi Profesi)", year: "2024", icon: "workspace_premium" },
  { name: "React – The Complete Guide", issuer: "Udemy", year: "2023", icon: "verified" },
  { name: "Back End Development & APIs", issuer: "freeCodeCamp", year: "2023", icon: "stars" },
  { name: "Google IT Support Professional", issuer: "Google / Coursera", year: "2023", icon: "military_tech" },
  { name: "Flutter & Dart – The Complete Guide", issuer: "Udemy", year: "2024", icon: "laptop_chromebook" },
  { name: "SQL for Data Science", issuer: "UC Davis / Coursera", year: "2022", icon: "database" },
];

export const contacts = {
  heading: "Mari Berkolaborasi",
  subtext: "Terbuka untuk project freelance, kolaborasi, maupun diskusi seputar teknologi. Jangan ragu untuk menghubungi!",
  buttonText: "Kirim Pesan",
  socials: {
    github: "https://github.com/ketutanggawicaksana",
    linkedin: "https://www.linkedin.com/in/ketut-angga-wicaksana-8a0946280/",
    instagram: "https://instagram.com/@nggaa.w",
    email: "anggawicaksana@student.telkomuniversity.ac.id",
    whatsapp: "https://wa.me/6282154592338",
  },
};
