import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { FloatingCard, type CardDepth } from "@/components/ui/floating-card";
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
  depth?: CardDepth;
  fadeBottom?: boolean;
  onClick?: () => void;
}

/**
 * Reusable hero card: category label + title + icon on top, arrow + footer
 * metric on the bottom. Swap category/title/icon/footer per instance.
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
        depth={depth}
        fadeBottom={fadeBottom}
        onClick={onClick}
        aria-label={typeof title === "string" ? title : category}
        className={cn(
          "w-full sm:w-[270px] md:w-[290px] lg:w-[220px] xl:w-[290px]",
          dimmed && "opacity-45 transition-opacity duration-300 hover:opacity-90",
          className,
        )}
      >
        <div className="flex h-full min-h-[135px] flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {category}
              </span>
              <h3 className="mt-1 text-lg font-medium leading-snug tracking-tight text-foreground md:text-xl">
                {title}
              </h3>
            </div>

            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-primary/40">
              {icon}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between pt-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary">
              <ArrowUpRight className="h-4 w-4" />
            </span>
            {footer && <span className="text-xs font-mono text-muted-foreground">{footer}</span>}
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}
