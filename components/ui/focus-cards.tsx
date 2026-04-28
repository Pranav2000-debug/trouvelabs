"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export type CardType = {
  title: string;
  jobTitle: string;
  src: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const isHovered = hovered === index;

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className="relative flex flex-col items-center justify-center p-4 cursor-pointer">
        {/* Animated teal ring outside the circle */}
        <div
          className="absolute inset-2 rounded-full pointer-events-none z-10 transition-all duration-500"
          style={{
            border: `2px solid ${isHovered ? "var(--trouve-teal, #5eead4)" : "transparent"}`,
            boxShadow: isHovered ? "0 0 16px rgba(94,234,212,0.3)" : "none",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Circular Avatar */}
        <div
          className={cn(
            "relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden transition-all duration-300 ease-out border-2 border-trouve-border bg-muted",
            hovered !== null && hovered !== index && "blur-[2px] opacity-60 scale-[0.98]",
            isHovered && "scale-[1.05]",
          )}>
          {card.src ? (
            <Image
              src={card.src}
              alt={card.title}
              fill
              sizes="(min-width: 768px) 96px, 64px"
              className={cn("object-cover transition-all duration-500", isHovered ? "grayscale-0" : "grayscale")}
            />
          ) : (
            <div
              aria-label={card.title}
              className="flex h-full w-full items-center justify-center bg-trouve-navy/50">
              <UserRound className="h-1/2 w-1/2 text-muted-foreground" strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* Hover Text Popup overlay (centered above or below) */}
        <div
          className={cn(
            "absolute -bottom-8 w-[150px] text-center z-20 flex flex-col items-center justify-center transition-all duration-300 bg-background/90 backdrop-blur-sm p-2 rounded-lg border border-trouve-border shadow-xl",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
          )}>
          <span className="text-sm font-bold text-foreground">{card.title}</span>
          <span className="text-xs text-trouve-teal font-poppins uppercase tracking-wider">{card.jobTitle}</span>
        </div>
      </div>
    );
  },
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  // The grid structural classes are dropped so we can let the parent flexbox handle wrapping layout.
  return (
    <>
      {cards.map((card, index) => (
        <Card key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </>
  );
}
