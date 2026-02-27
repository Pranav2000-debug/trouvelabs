"use client";

import { useState } from "react";
import { Card } from "@/components/ui/focus-cards";
import Image from "next/image";

export type TeamMember = {
  title: string;
  jobTitle: string;
  src: string;
};

const teamMembers: TeamMember[] = [
  {
    title: "Hood Khizer",
    jobTitle: "CEO",
    src: "/team/team-5.png",
  },
  {
    title: "Ilya Klyuev",
    jobTitle: "Entrepreneur in Residence",
    src: "/team/team-7.png",
  },
  {
    title: "Muhammad Ibrahim",
    jobTitle: "CTO",
    src: "/team/team-17.png",
  },
  {
    title: "Misbah Hareem",
    jobTitle: "Project Coordinator",
    src: "/team/team-15.png",
  },
  {
    title: "Ahmed Ali",
    jobTitle: "Senior AI Engineer",
    src: "/team/team-10.png",
  },
  {
    title: "Talha Yousuf",
    jobTitle: "Senior AI Software Engineer",
    src: "/team/team-9.png",
  },
  {
    title: "Usama Bin Asif",
    jobTitle: "Frontend Engineer",
    src: "/team/team-1.png",
  },
  {
    title: "Muhammad Zara",
    jobTitle: "AI/ML Engineer",
    src: "/team/team-2.png",
  },
  {
    title: "Muhammad Asim Latif",
    jobTitle: "AI Engineer",
    src: "/team/team-3.png",
  },
  {
    title: "Abdul Munim",
    jobTitle: "Blockchain Developer",
    src: "/team/team-4.png",
  },

  {
    title: "Huzaifah Bin Khawar",
    jobTitle: "AI/ML Engineer",
    src: "/team/team-6.png",
  },
  {
    title: "Pranav Chandra",
    jobTitle: "Fullstack Developer",
    src: "/team/team-14.png",
  },
  {
    title: "Kazi Ikram",
    jobTitle: "Research Assistant",
    src: "/team/team-8.png",
  },
  {
    title: "Khoula Ali Sheikh",
    jobTitle: "AI/ML Engineer",
    src: "/team/team-18.png",
  },
  {
    title: "Syed Ahmed",
    jobTitle: "Research Assistant",
    src: "/team/team-11.png",
  },
  {
    title: "liasghar Huzaifa",
    jobTitle: "AI Engineer",
    src: "/team/team-12.png",
  },
  {
    title: "Salman Hassan",
    jobTitle: "AI Engineer",
    src: "/team/team-13.png",
  },
  {
    title: "Mirza Shaharyar Ali Baig",
    jobTitle: "Data Scientist",
    src: "/team/team-16.png",
  },
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
            <span className="inline-flex rounded-md bg-muted px-4 py-1.5 text-sm font-medium text-trouve-teal">Team</span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Our Creative Minds</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">The team behind Trouve Labs.</p>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-y-7 sm:grid-cols-2 sm:gap-x-10">
              {paginatedMembers.map((member, index) => (
                <div key={member.title} className="flex items-center gap-4">
                  <Card card={member} index={index} hovered={hovered} setHovered={setHovered} />
                  <div className="min-w-0">
                    <h3 className="text-md font-semibold leading-tight text-foreground md:text-[20px]">{member.title}</h3>
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
                className="rounded-md border border-trouve-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-trouve-teal hover:text-trouve-teal disabled:cursor-not-allowed disabled:opacity-40">
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    page === currentPage
                      ? "bg-trouve-teal/15 text-trouve-teal"
                      : "border border-trouve-border text-muted-foreground hover:border-trouve-teal hover:text-trouve-teal"
                  }`}>
                  {page}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="rounded-md border border-trouve-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-trouve-teal hover:text-trouve-teal disabled:cursor-not-allowed disabled:opacity-40">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
