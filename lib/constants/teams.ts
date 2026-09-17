export type TeamGroup =
  | "management"
  | "llm"
  | "ai-research"
  | "decentralization"
  | "perception-sdk"
  | "fullstack"
  | "product-engineers"
  | "devops";

export interface TeamMember {
  title: string;
  jobTitle: string;
  src: string;
  teams: TeamGroup[];
  /** Tailwind class to counter-rotate/reframe a crooked source photo. */
  imgClassName?: string;
}

export const TEAM_GROUPS: { id: TeamGroup; label: string }[] = [
  { id: "management", label: "Management & Operations" },
  { id: "llm", label: "Data Intelligence" },
  { id: "ai-research", label: "Research & R&D" },
  { id: "decentralization", label: "Decentralization" },
  { id: "perception-sdk", label: "Perception SDK" },
  { id: "fullstack", label: "Fullstack" },
  { id: "product-engineers", label: "Product Engineering" },
  { id: "devops", label: "Software & DevOps" },
];

const PLACEHOLDER = "";

export const TEAM_MEMBERS: TeamMember[] = [
  { title: "Hood Khizer", jobTitle: "CEO / Founder", src: "/team/hood-khizer.webp", teams: ["management"] },
  { title: "Muhammad Ibrahim", jobTitle: "Engineering Management & Director of Research", src: "/team/Muhammad-ibrahim.webp", teams: ["management"] },
  { title: "Wahaj Ahmad", jobTitle: "Staff AI Researcher", src: "/team/Wahaj.webp", teams: ["llm"] },
  { title: "Misbah Hareem", jobTitle: "Operations Coordinator (People & Culture)", src: "/team/misbah-hareem.webp", teams: ["management"] },
  { title: "Muhammad Waqas Afzal", jobTitle: "Office Manager", src: "/team/waqas-afzal.webp", teams: ["management"] },
  { title: "Zuhad Bin Nisar", jobTitle: "Project Coordinator", src: "/team/zuhad-nisar.webp", teams: ["management"] },

  { title: "Ahmad Ali", jobTitle: "Senior AI Engineer (RnD)", src: "/team/Ahmad-ali.webp", teams: ["llm"] },
  { title: "Huzaifah Bin Khawar", jobTitle: "AI Engineer (RnD)", src: "/team/Huzaifa-bin-khawar.webp", teams: ["llm"] },
  { title: "Muhammad Kashif", jobTitle: "AI Engineer (RnD)", src: "/team/muhammad-kashif.webp", teams: ["llm"] },
  { title: "Talha Yousuf", jobTitle: "Senior AI Engineer (RnD)", src: "/team/Talha-Yousuf.webp", teams: ["ai-research"] },
  { title: "Umair Pervaiz Butt", jobTitle: "Backend Developer - Python", src: "/team/umair-pervaiz.webp", teams: ["llm"] },
  { title: "Ali Asghar Huzaifa", jobTitle: "AI Engineer (RnD)", src: "/team/aliashgar-huzaifa.webp", teams: ["ai-research"] },
  { title: "Fatimah Emad Eldin", jobTitle: "Researcher", src: "/team/fatima-emad-eldin.webp", teams: ["ai-research"] },

  { title: "Talha Ejaz", jobTitle: "AI Engineer", src: "/team/talha-ejaz.webp", teams: ["ai-research"] },
  { title: "Shah Nawaz Khan", jobTitle: "Senior AI Engineer (RnD)", src: "/team/shah-nawaz-khan.webp", teams: ["ai-research"] },
  { title: "Kaab Gazdar", jobTitle: "AI Intern", src: "/team/kaab-gazdar.webp", teams: ["ai-research"] },
  { title: "Khoula Ali Sheikh", jobTitle: "AI Engineer (RnD)", src: "/team/khoula.webp", teams: ["ai-research"] },
  { title: "Hasnain Ahmad", jobTitle: "Senior AI Engineer", src: "/team/hasnain-ahmed.webp", teams: ["perception-sdk"] },
  { title: "Muhammad Ijlal Baig", jobTitle: "Senior Researcher", src: PLACEHOLDER, teams: ["ai-research"] },
  { title: "Ahmad Mansoor", jobTitle: "Senior Researcher", src: "/team/ahmad-mansoor.webp", teams: ["ai-research"] },

  { title: "Abdul Munem", jobTitle: "Decentralization", src: "/team/abdul-munem.webp", teams: ["decentralization"] },
  { title: "Mehboob Raza", jobTitle: "Data Engineer", src: "/team/mehboob-raza.webp", teams: ["llm"] },
  { title: "Syed Sam", jobTitle: "Software Engineer", src: "/team/syed-sam.webp", teams: ["devops"] },

  { title: "Haider Asad", jobTitle: "AI Engineer", src: "/team/haider-asad.webp", teams: ["perception-sdk"] },
  { title: "Muhammad Asim Latif", jobTitle: "AI Engineer (RnD)", src: "/team/Muhammad-asim-latif.webp", teams: ["ai-research"] },

  { title: "Muhammad Yasir Saleem", jobTitle: "Principal Product Engineer", src: "/team/yasir.webp", teams: ["product-engineers"] },
  { title: "Pranav Chandra", jobTitle: "Frontend / Backend", src: "/team/pranav-chandra.webp", teams: ["fullstack"] },
  { title: "Kazi Ikram", jobTitle: "Frontend Developer", src: "/team/Kazi-Ikram.webp", teams: ["fullstack"] },
  { title: "Usama Bin Asif", jobTitle: "Frontend Developer", src: "/team/usama-bin-asif.webp", teams: ["fullstack"] },
  { title: "Malik Umar Daraz", jobTitle: "Senior Product Engineer", src: PLACEHOLDER, teams: ["product-engineers"] },

  { title: "Muhammad Zarar", jobTitle: "AI Engineer (RnD)", src: "/team/Muhammad-zarar.webp", teams: ["perception-sdk"] },
  { title: "Salman Hassan", jobTitle: "AI Engineer", src: "/team/salman-hassan.webp", teams: ["ai-research"] },
  { title: "Hafiz Muhammad Hassan Sadiq", jobTitle: "Computer Vision Engineer", src: PLACEHOLDER, teams: ["perception-sdk"] },
  { title: "Talha Nadeem", jobTitle: "Data Scientist", src: PLACEHOLDER, teams: ["ai-research"] },

  { title: "Zerq Jehan Ahmed", jobTitle: "Senior DevOps Engineer", src: PLACEHOLDER, teams: ["devops"] },
];
