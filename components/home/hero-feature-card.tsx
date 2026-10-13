import type { ReactNode } from "react";
import { FloatingCard, type CardDepth, type TiltDirection } from "@/components/ui/floating-card";
import { cn } from "@/lib/constants/utils";

export interface HeroFeatureCardProps {
  id?: string;
  className?: string;
  category: string;
  title: ReactNode;
  icon: ReactNode;
  footer?: ReactNode;
  /** Optional label rendered above-right of the card, outside its border, tilted to match. */
  outerEyebrow?: string;
  dimmed?: boolean;
  tilted?: boolean;
  tiltDirection?: TiltDirection;
  depth?: CardDepth;
  fadeBottom?: boolean;
  onClick?: () => void;
}

/**
 * Reusable hero card: category label + title + icon on top, footer metric
 * (if any) on the bottom. Swap category/title/icon/footer per instance.
 */
export function HeroFeatureCard({
  id,
  className,
  category,
  title,
  icon,
  footer,
  outerEyebrow,
  dimmed = false,
  tilted = true,
  tiltDirection = "default",
  depth = "foreground",
  fadeBottom = false,
  onClick,
}: HeroFeatureCardProps) {
  return (
    <div className="relative">
      {outerEyebrow && (
        <div
          className="mb-2 hidden pr-6 text-right sm:block"
          style={{
            transform: tilted ? "perspective(1000px) rotateX(15deg) rotateY(-18deg) rotateZ(3deg)" : undefined,
          }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">{outerEyebrow}</span>
        </div>
      )}

      <FloatingCard
        id={id}
        tilted={tilted}
        tiltDirection={tiltDirection}
        depth={depth}
        fadeBottom={fadeBottom}
        onClick={onClick}
        aria-label={typeof title === "string" ? title : category}
        className={cn(
          "w-full lg:w-[220px] xl:w-[290px]",
          dimmed && "opacity-45 transition-opacity duration-300 hover:opacity-90",
          className,
        )}
      >
        <div className="flex h-full min-h-[135px] flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-foreground">
                {category}
              </span>
              <p className="mt-1 text-base leading-snug text-muted-foreground">
                {title}
              </p>
            </div>

            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-primary/40">
              {icon}
            </div>
          </div>

          {footer && (
            <div className="mt-4 flex items-center justify-between pt-2">
              <span className="text-xs font-mono text-muted-foreground">{footer}</span>
            </div>
          )}
        </div>
      </FloatingCard>
    </div>
  );
}
