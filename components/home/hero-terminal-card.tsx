import { FloatingCard, type CardDepth } from "@/components/ui/floating-card";
import { cn } from "@/lib/constants/utils";

export interface TerminalLine {
  text: string;
}

export interface HeroTerminalCardProps {
  id?: string;
  className?: string;
  lines: TerminalLine[];
  /** Index of the line rendered as highlighted. Defaults to the last line. */
  activeIndex?: number;
  tilted?: boolean;
  depth?: CardDepth;
  fadeBottom?: boolean;
  onClick?: () => void;
}

/** Terminal-style pipeline card: a stack of lines with one highlighted. */
export function HeroTerminalCard({
  id,
  className = "",
  lines,
  activeIndex,
  tilted = true,
  depth = "mid",
  fadeBottom = true,
  onClick,
}: HeroTerminalCardProps) {
  const highlighted = activeIndex ?? lines.length - 1;

  return (
    <FloatingCard
      id={id}
      tilted={tilted}
      depth={depth}
      fadeBottom={fadeBottom}
      onClick={onClick}
      aria-label="System pipeline terminal output"
      className={cn("w-full sm:w-[320px] md:w-[350px] lg:w-[360px]", className)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="select-none space-y-1.5 font-mono text-xs leading-relaxed">
          {lines.map((line, idx) => {
            const isHighlight = idx === highlighted;
            return (
              <div
                key={line.text}
                className={cn(
                  "flex items-center gap-1 transition-colors duration-200",
                  isHighlight ? "font-medium text-foreground" : "text-muted-foreground/70 hover:text-muted-foreground",
                )}
              >
                <span>{line.text}</span>
                {isHighlight && <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-primary" />}
              </div>
            );
          })}
        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] font-mono text-sm text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
          [ ]
        </div>
      </div>
    </FloatingCard>
  );
}
