"use client";

import Image from "next/image";
import { useState } from "react";
import { UserRound } from "lucide-react";
import * as motion from "motion/react-m";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TEAM_GROUPS, TEAM_MEMBERS, type TeamGroup } from "@/lib/teams";
import { cn } from "@/lib/utils";

export default function Teams() {
  const [activeTab, setActiveTab] = useState<TeamGroup>(TEAM_GROUPS[0].id);
  const members = TEAM_MEMBERS.filter((member) => member.teams.includes(activeTab));

  return (
    <section id="team" className="relative overflow-hidden bg-background px-6 py-20 scroll-mt-24">
      <div className="absolute top-20 left-0 xl:left-50 right-0 bottom-0 z-0">
        <Image
          src="/gradient-mesh.png"
          alt="About Background"
          width={2000}
          height={2000}
          className="max-w-none h-auto w-full xl:w-[2000px] object-cover opacity-50 md:opacity-30"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex rounded-md bg-muted px-4 py-1.5 text-sm font-medium text-primary">Team</span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Our Creative Minds</h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">The team behind Trouve Labs.</p>
        </div>

        <div
          role="tablist"
          className="mt-12 -mx-6 flex gap-x-4 overflow-x-auto px-6 pb-2 scrollbar-hide sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-y-2 sm:overflow-visible sm:px-0 sm:pb-0">
          {TEAM_GROUPS.map((group) => {
            const isActive = activeTab === group.id;
            return (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(group.id)}
                className={cn(
                  "relative shrink-0 whitespace-nowrap px-2 py-1 text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}>
                {group.label}
                {isActive && (
                  <motion.span
                    layoutId="team-tab-underline"
                    className="absolute -bottom-1 inset-x-0 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground/60 sm:hidden">Swipe to explore →</p>

        <div role="tabpanel" className="mt-12 w-full min-h-80">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-6 md:gap-y-7 lg:grid-cols-4">
            {members.map((member) => (
              <div key={member.title} className="flex items-center gap-3 md:gap-4">
                <Avatar className="size-12 shrink-0 ring-2 ring-border md:size-20">
                  {member.src ? (
                    <Image src={member.src} alt={member.title} fill sizes="(min-width: 768px) 80px, 48px" className="object-cover" />
                  ) : (
                    <AvatarFallback>
                      <UserRound className="size-5 text-muted-foreground md:size-7" strokeWidth={1.5} />
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-tight text-foreground md:text-xl">{member.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground md:mt-1 md:text-base">{member.jobTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
