"use client";

type CubeProps = {
  size?: number | "xs" | "sm" | "md" | "lg";
  className?: string;
};

const presetSizes = {
  xs: 20,
  sm: 28,
  md: 40,
  lg: 56,
} as const;

/** Single solid cube with soft floor shadow — reference element */
export function Cube3D({ size = "md", className = "" }: CubeProps) {
  const pixelSize = typeof size === "number" ? size : presetSizes[size];

  return (
    <div
      className={`cube-unit ${className}`}
      style={{ ["--cube-size" as string]: `${pixelSize}px` }}
      aria-hidden
    >
      <div className="cube-unit-body">
        <div className="cube-unit-face cube-unit-top" />
        <div className="cube-unit-face cube-unit-left" />
        <div className="cube-unit-face cube-unit-front" />
      </div>
      <div className="cube-unit-shadow" />
    </div>
  );
}
