"use client";

import Image from "next/image";
import { withBasePath } from "../lib/paths";
import { CwCubicFrame } from "./cw-design-elements";
import { useLanguage } from "./language-provider";

export function PortraitFrame() {
  const { t } = useLanguage();

  return (
    <div className="portrait-cw relative w-full max-w-xs sm:max-w-sm" aria-label={t.beyond.portrait}>
      <CwCubicFrame className="portrait-cw-frame" />
      <div className="portrait-cw-inner relative aspect-[4/5] overflow-hidden bg-[var(--neutral)]">
        <Image
          src={withBasePath("/images/chris-portrait.png")}
          alt={t.beyond.portrait}
          fill
          sizes="(max-width: 640px) 256px, 384px"
          className="object-cover object-[center_22%]"
          priority={false}
        />
      </div>
    </div>
  );
}
