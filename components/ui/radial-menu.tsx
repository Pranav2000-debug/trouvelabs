"use client";

import * as React from "react";
import Link from "next/link";
import * as m from "motion/react-m";
import { Backdrop } from "@/components/ui/backdrop";
import { cn } from "@/lib/constants/utils";

type RadialAnchor = "bottom-right" | "bottom-left" | "top-right" | "top-left" | "edge-right" | "edge-left" | "edge-top" | "edge-bottom";

interface RadialMenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
  radius: number;
  arcStart: number;
  arcEnd: number;
  anchor: RadialAnchor;
}

const RadialMenuContext = React.createContext<RadialMenuContextValue | null>(null);

function useRadialMenu() {
  const ctx = React.useContext(RadialMenuContext);
  if (!ctx) throw new Error("RadialMenu subcomponents must render inside <RadialMenu>");
  return ctx;
}

interface RadialMenuProps {
  /** Viewport corner the trigger is anchored to. Items share this anchor. */
  anchor?: RadialAnchor;
  /** Distance in px from the trigger center to each item center. */
  radius?: number;
  /** Arc start angle in degrees. Math convention: 0 = east, 90 = north, 180 = west, 270 = south. */
  arcStart?: number;
  /** Arc end angle in degrees. */
  arcEnd?: number;
  /** Show a blurred backdrop behind the menu when open. Default: true. */
  backdrop?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function RadialMenu({
  anchor = "bottom-right",
  radius = 88,
  arcStart = 180,
  arcEnd = 270,
  backdrop = true,
  children,
  className,
}: RadialMenuProps) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const childrenArray = React.Children.toArray(children);
  const itemPositions = new Map<unknown, number>();
  childrenArray.forEach((child, i) => {
    if (React.isValidElement(child) && child.type === RadialMenuItem) {
      itemPositions.set(child, itemPositions.size);
      void i;
    }
  });
  const itemCount = itemPositions.size;

  const renderedChildren = childrenArray.map((child, key) => {
    if (React.isValidElement(child) && child.type === RadialMenuItem) {
      const i = itemPositions.get(child) ?? 0;
      return React.cloneElement(child as React.ReactElement<RadialMenuItemProps>, {
        index: i,
        total: itemCount,
        key: (child as React.ReactElement).key ?? key,
      });
    }
    return child;
  });

  const toggle = React.useCallback(() => setOpen((v) => !v), []);

  React.useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointerDown(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  const ctxValue = React.useMemo<RadialMenuContextValue>(
    () => ({ open, setOpen, toggle, radius, arcStart, arcEnd, anchor }),
    [open, toggle, radius, arcStart, arcEnd, anchor],
  );

  return (
    <RadialMenuContext.Provider value={ctxValue}>
      <div ref={containerRef} className={cn("contents", className)}>
        {backdrop && <Backdrop open={open} onClick={() => setOpen(false)} />}
        {renderedChildren}
      </div>
    </RadialMenuContext.Provider>
  );
}

interface RadialMenuTriggerProps {
  children: React.ReactElement | ((state: { open: boolean; toggle: () => void }) => React.ReactElement);
}

export function RadialMenuTrigger({ children }: RadialMenuTriggerProps) {
  const { open, toggle } = useRadialMenu();

  if (typeof children === "function") {
    const el = children({ open, toggle });
    return React.cloneElement(el, {
      onClick: (e: React.MouseEvent) => {
        const original = (el.props as { onClick?: (e: React.MouseEvent) => void }).onClick;
        original?.(e);
        if (!e.defaultPrevented) toggle();
      },
    } as React.HTMLAttributes<HTMLElement>);
  }

  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      const original = (children.props as { onClick?: (e: React.MouseEvent) => void }).onClick;
      original?.(e);
      if (!e.defaultPrevented) toggle();
    },
  } as React.HTMLAttributes<HTMLElement>);
}

type RadialMenuItemMode = "text" | "icon";

interface RadialMenuItemProps {
  /** Text label. Used as the visible content in `mode="text"` (default), or as a floating chip + aria-label in `mode="icon"`. */
  label: string;
  /** Required when `mode="icon"`. Ignored in `mode="text"`. */
  icon?: React.ReactNode;
  /** Render mode. Defaults to "text" (compact rounded pill). */
  mode?: RadialMenuItemMode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  /** Injected by parent <RadialMenu>. */
  index?: number;
  /** Injected by parent <RadialMenu>. */
  total?: number;
}

function angleForIndex(index: number, count: number, arcStart: number, arcEnd: number): number {
  if (count <= 1) return (arcStart + arcEnd) / 2;
  const step = (arcEnd - arcStart) / (count - 1);
  return arcStart + step * index;
}

const anchorClass: Record<RadialAnchor, string> = {
  "bottom-right": "fixed bottom-6 right-6",
  "bottom-left": "fixed bottom-6 left-6",
  "top-right": "fixed top-24 right-6",
  "top-left": "fixed top-24 left-6",
  "edge-right": "fixed right-0 top-36",
  "edge-left": "fixed left-0 top-36",
  "edge-top": "fixed top-0 left-12",
  "edge-bottom": "fixed bottom-0 left-12",
};

export function RadialMenuItem({ icon, label, mode = "text", href, onClick, active = false, className, index = 0, total = 1 }: RadialMenuItemProps) {
  const { open, setOpen, radius, arcStart, arcEnd, anchor } = useRadialMenu();

  const angleDeg = angleForIndex(index, total, arcStart, arcEnd);
  const angleRad = (angleDeg * Math.PI) / 180;
  // CSS y axis is inverted vs math convention.
  const targetX = Math.cos(angleRad) * radius;
  const targetY = -Math.sin(angleRad) * radius;

  const itemClass = cn(
    "inline-flex items-center justify-center border shadow-md backdrop-blur-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    mode === "icon" ? "h-9 w-9 rounded-full [&_svg]:size-4" : "h-8 whitespace-nowrap rounded-full px-3 text-xs font-medium",
    active ? "border-primary bg-primary text-primary-foreground" : "border-border/60 bg-card/80 text-foreground hover:border-primary/30",
    className,
  );

  function handleClick() {
    onClick?.();
    setOpen(false);
  }

  const motionProps = {
    initial: { x: 0, y: 0, scale: 0, opacity: 0 },
    animate: open ? { x: targetX, y: targetY, scale: 1, opacity: 1 } : { x: 0, y: 0, scale: 0, opacity: 0 },
    transition: {
      delay: open ? index * 0.04 : 0,
      type: "spring" as const,
      stiffness: 400,
      damping: 30,
    },
    style: {
      pointerEvents: open ? ("auto" as const) : ("none" as const),
    },
  };

  const floatingLabel =
    mode === "icon" ? (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border/60 bg-card/80 px-2 py-0.5 text-xs text-foreground backdrop-blur-xl">
        {label}
      </span>
    ) : null;

  const content = mode === "icon" ? icon : label;

  if (href) {
    return (
      <m.div className={cn("z-50", anchorClass[anchor])} {...motionProps}>
        <div className="relative">
          {floatingLabel}
          <Link
            href={href}
            prefetch={false}
            aria-label={label}
            aria-current={active ? "page" : undefined}
            onClick={handleClick}
            className={itemClass}>
            {content}
          </Link>
        </div>
      </m.div>
    );
  }

  return (
    <m.div className={cn("z-50", anchorClass[anchor])} {...motionProps}>
      <div className="relative">
        {floatingLabel}
        <button type="button" aria-label={label} aria-pressed={active} onClick={handleClick} className={itemClass}>
          {content}
        </button>
      </div>
    </m.div>
  );
}
