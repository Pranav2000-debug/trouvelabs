"use client";

import Image from "next/image";
import { useState } from "react";
import { UserRound } from "lucide-react";
import * as motion from "motion/react-m";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TEAM_GROUPS, TEAM_MEMBERS, type TeamGroup } from "@/lib/constants/teams";
import { cn } from "@/lib/constants/utils";

// CEO outranks Staff outranks Senior outranks a plain title outranks Intern. The
// management tab is an org chart, not an AI-role hierarchy, so "Staff" shouldn't
// jump someone above manually-ordered leadership peers there - only CEO is pinned.
function seniorityRank(jobTitle: string, tab: TeamGroup): number {
  if (/\bceo\b/i.test(jobTitle)) return 0;
  if (tab === "management") return 1;
  if (/^staff\b/i.test(jobTitle)) return 1;
  if (/^senior\b/i.test(jobTitle)) return 2;
  if (/intern/i.test(jobTitle)) return 4;
  return 3;
}

export default function Teams() {
  const [activeTab, setActiveTab] = useState<TeamGroup>(TEAM_GROUPS[0].id);
  const members = TEAM_MEMBERS.filter((member) => member.teams.includes(activeTab)).sort(
    (a, b) => seniorityRank(a.jobTitle, activeTab) - seniorityRank(b.jobTitle, activeTab),
  );

  return (
    <section id="team" className="relative overflow-hidden bg-background px-4 py-14 sm:px-6 sm:py-20 scroll-mt-24">
      <div className="absolute top-20 left-0  right-0 bottom-0 z-0">
        <Image
          src="/assets/gradient-mesh.webp"
          alt="About Background"
          width={2000}
          height={2000}
          style={{ height: "auto" }}
          className="max-w-none w-full object-cover opacity-50 md:opacity-30"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex rounded-md bg-muted px-4 py-1.5 text-sm font-medium text-primary">Team</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Our Creative Minds</h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">The team behind Trouve Labs.</p>
        </div>

        <div
          role="tablist"
          className="relative mt-8 -mx-4 flex gap-x-4 overflow-x-auto px-4 pb-2 scrollbar-hide sm:mx-0 sm:mt-12 sm:flex-wrap sm:justify-center sm:gap-y-2 sm:overflow-visible sm:px-0 sm:pb-0">
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

        <div role="tabpanel" className="mt-8 sm:mt-12 w-full min-h-80">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-6 md:gap-y-7 lg:grid-cols-4">
            {members.map((member) => (
              <div key={member.title} className="flex items-center gap-3 md:gap-4">
                <Avatar className="size-10 shrink-0 ring-2 ring-border md:size-16">
                  {member.src ? (
                    <Image
                      src={member.src}
                      alt={member.title}
                      fill
                      sizes="(min-width: 768px) 64px, 40px"
                      className={cn("object-cover", member.imgClassName)}
                    />
                  ) : (
                    <AvatarFallback>
                      <UserRound className="size-4 text-muted-foreground md:size-6" strokeWidth={1.5} />
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold leading-tight text-foreground md:text-base">{member.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground md:mt-1 md:text-sm">{member.jobTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
