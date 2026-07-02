export type TeamGroup =
  | "management"
  | "llm"
  | "ai-research"
  | "decentralization"
  | "vision"
  | "fullstack"
  | "product-engineers";

export interface TeamMember {
  title: string;
  jobTitle: string;
  src: string;
  teams: TeamGroup[];
}

export const TEAM_GROUPS: { id: TeamGroup; label: string }[] = [
  { id: "management", label: "Management & Support" },
  { id: "llm", label: "LLM Team" },
  { id: "ai-research", label: "AI & Research" },
  { id: "decentralization", label: "Decentralization Team" },
  { id: "vision", label: "Vision SDK" },
  { id: "fullstack", label: "Fullstack" },
  { id: "product-engineers", label: "Product Engineers" },
];

const PLACEHOLDER = "";

export const TEAM_MEMBERS: TeamMember[] = [
  { title: "Hood Khizer", jobTitle: "CEO", src: "/team/hood-khizer.webp", teams: ["management"] },
  { title: "Muhammad Ibrahim", jobTitle: "Director Research & EM", src: "/team/Muhammad-ibrahim.webp", teams: ["management"] },
  { title: "Ilya Klyuev", jobTitle: "Business Development Manager", src: "/team/Ilya-Klyuev.webp", teams: ["management"] },
  { title: "Misbah Hareem", jobTitle: "Performance Evaluation Manager", src: "/team/misbah-hareem.webp", teams: ["management"] },
  { title: "M. Waqas Afzal", jobTitle: "Office Manager", src: PLACEHOLDER, teams: ["management"] },

  { title: "Ahmad Ali", jobTitle: "Researcher", src: "/team/Ahmad-ali.webp", teams: ["llm"] },
  { title: "Huzaifa Bin Khawar", jobTitle: "Researcher", src: "/team/Huzaifa-bin-khawar.webp", teams: ["llm"] },
  { title: "Muhammad Kashif", jobTitle: "Researcher", src: PLACEHOLDER, teams: ["llm"] },
  { title: "Talha Yousuf", jobTitle: "Researcher", src: "/team/Talha-Yousuf.webp", teams: ["llm"] },
  { title: "Umair Pervaiz Butt", jobTitle: "Dev SDK", src: PLACEHOLDER, teams: ["llm"] },
  { title: "Ali Asghar Huzaifa", jobTitle: "Researcher", src: "/team/aliashgar-huzaifa.webp", teams: ["llm", "vision"] },
  { title: "Fatimah Emad Eldin", jobTitle: "Researcher", src: PLACEHOLDER, teams: ["llm", "vision"] },

  { title: "Wahaj", jobTitle: "Staff AI Researcher", src: "/team/Wahaj.webp", teams: ["ai-research"] },
  { title: "Talha Ejaz", jobTitle: "AI Engineer", src: PLACEHOLDER, teams: ["ai-research"] },
  { title: "Shah Nawaz", jobTitle: "Senior AI Engineer", src: "/team/shah-nawaz-khan.webp", teams: ["ai-research"] },
  { title: "Kaab Gazdar", jobTitle: "GenAI SDK / Intern", src: PLACEHOLDER, teams: ["ai-research"] },
  { title: "Khoula", jobTitle: "Researcher", src: "/team/khoula.webp", teams: ["ai-research"] },

  { title: "Abdul Munem", jobTitle: "Tokenization", src: "/team/abdul-munem.webp", teams: ["decentralization"] },
  { title: "Mehboob Raza", jobTitle: "Tokenization", src: PLACEHOLDER, teams: ["decentralization"] },
  { title: "Syed Sam", jobTitle: "Tokenization", src: "/team/syed-sam.webp", teams: ["decentralization"] },

  { title: "Haider Asad", jobTitle: "Researcher", src: "/team/haider-asad.webp", teams: ["vision"] },
  { title: "Muhammad Asim Latif", jobTitle: "Researcher", src: "/team/Muhammad-asim-latif.webp", teams: ["vision"] },

  { title: "M. Yasir Saleem", jobTitle: "Principal Product Engineer", src: "/team/yasir.webp", teams: ["fullstack", "product-engineers"] },
  { title: "Pranav Chandra", jobTitle: "Frontend/Backend (Intern)", src: "/team/pranav-chandra.webp", teams: ["fullstack"] },
  { title: "Kazi Ikram", jobTitle: "Front-end", src: "/team/Kazi-Ikram.webp", teams: ["fullstack"] },
  { title: "Usama Bin Asif", jobTitle: "Full-stack Engineer + AI", src: "/team/usama-bin-asif.webp", teams: ["fullstack"] },
  { title: "Malik Umar Daraz", jobTitle: "Senior Product Engineer", src: PLACEHOLDER, teams: ["product-engineers"] },

  { title: "Muhammad Zarar", jobTitle: "Full-stack Engineer + AI", src: "/team/Muhammad-zarar.webp", teams: ["vision"] },
  { title: "Salman Hassan", jobTitle: "Backend + Researcher", src: "/team/salman-hassan.webp", teams: ["vision"] },
  { title: "Hafiz Hassan Sadiq", jobTitle: "SDK Dev", src: PLACEHOLDER, teams: ["vision"] },
  { title: "Talha Nadeem", jobTitle: "SDK Dev", src: PLACEHOLDER, teams: ["vision"] },
];
