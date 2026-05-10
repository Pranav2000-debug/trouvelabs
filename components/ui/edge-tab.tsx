import * as React from "react";
import { cn } from "@/lib/utils";

type EdgeTabEdge = "right" | "left" | "top" | "bottom";
type EdgeTabSize = "sm" | "md" | "lg";
type EdgeTabVariant = "default" | "primary";

interface EdgeTabProps extends React.ComponentProps<"button"> {
  icon: React.ReactNode;
  /** Which viewport edge the tab is anchored to. Default: "right". */
  edge?: EdgeTabEdge;
  size?: EdgeTabSize;
  variant?: EdgeTabVariant;
  pressed?: boolean;
  /**
   * Tailwind class for the perpendicular position (e.g. "top-29" for a
   * right-edge tab, "left-1/2" for a top-edge tab). Defaults to ~120px
   * from the start of the perpendicular axis.
   */
  offsetClass?: string;
}

const edgeBaseClass: Record<EdgeTabEdge, string> = {
  right: "fixed right-0 rounded-l-2xl rounded-r-none border-r-0",
  left: "fixed left-0 rounded-r-2xl rounded-l-none border-l-0",
  top: "fixed top-0 rounded-b-2xl rounded-t-none border-t-0",
  bottom: "fixed bottom-0 rounded-t-2xl rounded-b-none border-b-0",
};

const defaultOffsetClass: Record<EdgeTabEdge, string> = {
  right: "top-36",
  left: "top-36",
  top: "left-12",
  bottom: "left-12",
};

// Width is along the perpendicular axis (how far it protrudes); height is along the edge.
const sizeClass: Record<EdgeTabEdge, Record<EdgeTabSize, string>> = {
  right: {
    sm: "h-10 w-7 [&_svg]:size-4",
    md: "h-12 w-9 [&_svg]:size-5",
    lg: "h-14 w-11 [&_svg]:size-6",
  },
  left: {
    sm: "h-10 w-7 [&_svg]:size-4",
    md: "h-12 w-9 [&_svg]:size-5",
    lg: "h-14 w-11 [&_svg]:size-6",
  },
  top: {
    sm: "h-7 w-10 [&_svg]:size-4",
    md: "h-9 w-12 [&_svg]:size-5",
    lg: "h-11 w-14 [&_svg]:size-6",
  },
  bottom: {
    sm: "h-7 w-10 [&_svg]:size-4",
    md: "h-9 w-12 [&_svg]:size-5",
    lg: "h-11 w-14 [&_svg]:size-6",
  },
};

export const EdgeTab = React.forwardRef<HTMLButtonElement, EdgeTabProps>(
  function EdgeTab(
    {
      icon,
      edge = "right",
      size = "md",
      variant = "default",
      pressed = false,
      offsetClass,
      className,
      type = "button",
      ...props
    },
    ref,
  ) {
    const variantClass =
      variant === "primary"
        ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
        : pressed
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border/60 bg-card/80 text-foreground hover:border-primary/30";

    return (
      <button
        ref={ref}
        type={type}
        data-slot="edge-tab"
        data-pressed={pressed || undefined}
        aria-pressed={pressed}
        className={cn(
          "z-50 inline-flex items-center justify-center border shadow-lg backdrop-blur-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          edgeBaseClass[edge],
          offsetClass ?? defaultOffsetClass[edge],
          sizeClass[edge][size],
          variantClass,
          className,
        )}
        {...props}
      >
        {icon}
      </button>
    );
  },
);
