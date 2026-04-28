import { cn } from "@/lib/utils";

type Side = "left" | "center" | "right";

interface JourneyConnectorProps {
  /** Horizontal anchor where the line starts (top edge) */
  from?: Side;
  /** Horizontal anchor where the line ends (bottom edge) */
  to?: Side;
  /** Connector height in px (default 120) */
  height?: number;
  /** Stroke style — solid or dashed (default "solid") */
  variant?: "solid" | "dashed";
  /** Show a small filled dot at the line's start */
  showStartDot?: boolean;
  /** Show a small filled dot at the line's end */
  showEndDot?: boolean;
  /** Wrapper classes — control color via `text-*` (uses currentColor) */
  className?: string;
}

const SIDE_X: Record<Side, number> = {
  left: 10,
  center: 50,
  right: 90,
};

/**
 * Decorative SVG connector for vertical "journey" layouts that link
 * alternating left/right content sections. The S-curve runs from the
 * top edge `from` anchor to the bottom edge `to` anchor; same anchors
 * render a straight vertical line.
 */
export function JourneyConnector({
  from = "center",
  to = "center",
  height = 120,
  variant = "solid",
  showStartDot = false,
  showEndDot = false,
  className,
}: JourneyConnectorProps) {
  const x1 = SIDE_X[from];
  const x2 = SIDE_X[to];

  const path =
    x1 === x2
      ? `M ${x1} 0 L ${x2} 100`
      : `M ${x1} 0 C ${x1} 50, ${x2} 50, ${x2} 100`;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none relative w-full text-trouve-teal", className)}
      style={{ height }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.4}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeDasharray={variant === "dashed" ? "3 4" : undefined}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {showStartDot && (
        <span
          className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"
          style={{ left: `${x1}%`, top: 0 }}
        />
      )}
      {showEndDot && (
        <span
          className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"
          style={{ left: `${x2}%`, top: "100%" }}
        />
      )}
    </div>
  );
}
