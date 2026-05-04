"use client";

import { useState } from "react";
import { Card } from "@/components/ui/focus-cards";
import Image from "next/image";

export type TeamMember = {
  title: string;
  jobTitle: string;
  src: string;
};

// Members without a photo render a silhouette fallback inside <Card />.
// Drop a real /team/<member>.png in and update the entry's `src` once available.
const PLACEHOLDER = "";

const teamMembers: TeamMember[] = [
  { title: "Hood Khizer", jobTitle: "CEO", src: "/team/Hood%20Khizer.png" },
  { title: "Muhammad Ibrahim", jobTitle: "Director Research & EM", src: "/team/Muhammad-ibrahim.png" },
  { title: "Ilya Klyuev", jobTitle: "Business Development Manager", src: "/team/Ilya-Klyuev.png" },
  { title: "Misbah Hareem", jobTitle: "Performance Evaluation Manager", src: "/team/misbah-hareem.png" },
  { title: "Ahmad Ali", jobTitle: "Researcher", src: "/team/Ahmad-ali.png" },
  { title: "Huzaifa Bin Khawar", jobTitle: "Researcher", src: "/team/Huzaifa-bin-khawar.png" },
  { title: "Muhammad Kashif", jobTitle: "Researcher", src: PLACEHOLDER },
  { title: "Talha Yousuf", jobTitle: "Researcher", src: "/team/Talha-Yousuf.png" },
  { title: "Umair Pervaiz Butt", jobTitle: "Dev SDK", src: PLACEHOLDER },
  { title: "Talha Nadeem", jobTitle: "SDK Dev", src: PLACEHOLDER },
  { title: "Hafiz Hassan Sadiq", jobTitle: "SDK Dev", src: PLACEHOLDER },
  { title: "Haider Asad", jobTitle: "Researcher", src: PLACEHOLDER },
  { title: "Ali Asghar Huzaifa", jobTitle: "Researcher", src: "/team/aliashgar-huzaifa.png" },
  { title: "Muhammad Asim Latif", jobTitle: "Researcher", src: "/team/Muhammad-asim-latif.png" },
  { title: "Abdul Munem", jobTitle: "Tokenization", src: "/team/abdul-munem.png" },
  { title: "Mehboob Raza", jobTitle: "Tokenization", src: PLACEHOLDER },
  { title: "Syed Sam", jobTitle: "Tokenization", src: "/team/syed-sam.png" },
  { title: "Fatimah Emad Eldin", jobTitle: "Researcher", src: PLACEHOLDER },
  { title: "Kazi Ikram", jobTitle: "Front-end", src: "/team/Kazi-Ikram.png" },
  { title: "Muhammad Zarar", jobTitle: "Full-stack Engineer + AI", src: "/team/Muhammad-zarar.png" },
  { title: "Salman Hassan", jobTitle: "Backend + Researcher", src: "/team/salman-hassan.png" },
  { title: "Khoula", jobTitle: "Researcher", src: "/team/khoula.png" },
  { title: "Usama Bin Asif", jobTitle: "Full-stack Engineer + AI", src: "/team/usama-bin-asif.png" },
  { title: "Wahaj", jobTitle: "Staff AI Researcher", src: PLACEHOLDER },
  { title: "M. Waqas Afzal", jobTitle: "Office Manager", src: PLACEHOLDER },
  { title: "Kaab Gazdar", jobTitle: "GenAI SDK / Intern", src: PLACEHOLDER },
  { title: "Pranav Chandra", jobTitle: "Frontend/Backend (Intern)", src: "/team/pranav-chandra.png" },
  { title: "M. Yasir Saleem", jobTitle: "Principal Product Engineer", src: PLACEHOLDER },
  { title: "Talha Ejaz", jobTitle: "AI Engineer", src: PLACEHOLDER },
  { title: "Shah Nawaz", jobTitle: "Senior AI Engineer", src: PLACEHOLDER },
  { title: "Malik Umar Daraz", jobTitle: "Senior Product Engineer", src: PLACEHOLDER },
];

export default function Teams() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const membersPerPage = 6;
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  const start = (currentPage - 1) * membersPerPage;
  const paginatedMembers = teamMembers.slice(start, start + membersPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setHovered(null);
  };

  return (
    <section className="relative overflow-hidden bg-background px-6 py-20">
      <div className="absolute inset-0 z-0">
        <Image src="/gradient-mesh.png" alt="About Background" width={2000} height={2000} className="object-cover opacity-40" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(280px,1fr)_minmax(420px,1.4fr)] lg:gap-16">
          <div className="lg:pt-4">
            <span className="inline-flex rounded-md bg-muted px-4 py-1.5 text-sm font-medium text-primary">Team</span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Our Creative Minds</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">The team behind Trouve Labs.</p>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-y-7 sm:grid-cols-2 sm:gap-x-10">
              {paginatedMembers.map((member, index) => (
                <div key={member.title} className="flex items-center gap-4">
                  <Card card={member} index={index} hovered={hovered} setHovered={setHovered} />
                  <div className="min-w-0">
                    <h3 className="text-md font-semibold leading-tight text-foreground md:text-xl">{member.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground md:text-base">{member.jobTitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40">
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    page === currentPage
                      ? "bg-primary/10 text-primary"
                      : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}>
                  {page}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
