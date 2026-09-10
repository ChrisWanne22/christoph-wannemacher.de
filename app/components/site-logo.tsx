import Image from "next/image";
import { withBasePath } from "../lib/paths";

type SiteLogoProps = {
  className?: string;
  size?: "sm" | "md" | "hero";
};

const LOGO_SRC = withBasePath("/logo/cw-monogram-bold.svg");

const sizes = {
  sm: { width: 240, height: 160, className: "h-16 w-auto" },
  md: { width: 280, height: 187, className: "h-20 w-auto sm:h-[5.5rem]" },
  hero: { width: 200, height: 133, className: "h-16 w-auto sm:h-[4.5rem] lg:h-20" },
} as const;

export function SiteLogo({ className = "", size = "md" }: SiteLogoProps) {
  const { width, height, className: sizeClass } = sizes[size];

  return (
    <Image
      src={LOGO_SRC}
      alt="CW"
      width={width}
      height={height}
      className={`site-logo-image block shrink-0 object-contain ${sizeClass} ${className}`}
      priority={size === "hero"}
    />
  );
}
