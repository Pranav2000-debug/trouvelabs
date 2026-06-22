import * as React from "react";
import { cn } from "@/lib/constants/utils";

type FabPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";
type FabSize = "sm" | "md" | "lg";
type FabVariant = "default" | "primary";

interface FabProps extends React.ComponentProps<"button"> {
  icon: React.ReactNode;
  position?: FabPosition;
  size?: FabSize;
  variant?: FabVariant;
  pressed?: boolean;
}

const positionClass: Record<FabPosition, string> = {
  "bottom-right": "fixed bottom-6 right-6",
  "bottom-left": "fixed bottom-6 left-6",
  "top-right": "fixed top-29 right-12",
  "top-left": "fixed top-24 left-6",
};

const sizeClass: Record<FabSize, string> = {
  sm: "h-8 w-8 [&_svg]:size-4",
  md: "h-12 w-12 [&_svg]:size-5",
  lg: "h-14 w-14 [&_svg]:size-6",
};

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>(function Fab(
  { icon, position = "bottom-right", size = "md", variant = "default", pressed = false, className, type = "button", ...props },
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
      data-slot="fab"
      data-pressed={pressed || undefined}
      aria-pressed={pressed}
      className={cn(
        "z-50 inline-flex items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        positionClass[position],
        sizeClass[size],
        variantClass,
        className,
      )}
      {...props}>
      {icon}
    </button>
  );
});
