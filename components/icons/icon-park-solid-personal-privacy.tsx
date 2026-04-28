import * as React from "react";

export function PersonalPrivacyIcon({
  size = 48,
  color = "currentColor",
  strokeWidth = 2,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="24" cy="11" r="7"/><path d="M4 41c0-8.837 8.059-16 18-16"/><path d="M27 31h14v10H27z"/><path d="M37 31v-3a3 3 0 1 0-6 0v3"/>
    </svg>
  );
}
