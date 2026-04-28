import * as React from "react";

export function FilenIcon({
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
      <circle cx="24" cy="24" r="21.5"/><circle cx="28.348" cy="25.356" r="2.932"/><circle cx="13.749" cy="24" r="2.131"/><circle cx="26.857" cy="9.257" r="2.131"/><circle cx="21.869" cy="29.36" r="2.131"/><path d="M28.348 28.288v16.628M24.726 9.257H8.356m-2.583 3.337v22.608m7.976-13.333V16.9H34.85V5.436m0 37.127V25.356h10.607M19.738 29.36h-5.989v13.543"/>
    </svg>
  );
}
