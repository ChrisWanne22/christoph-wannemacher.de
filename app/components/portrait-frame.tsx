"use client";

import { useLanguage } from "./language-provider";

/**
 * To add a portrait later:
 * 1. Put the file in /public, e.g. public/chris.jpg
 * 2. Import Image from "next/image"
 * 3. Render <Image src="/chris.jpg" alt="Chris" fill className="object-cover" />
 */
export function PortraitFrame() {
  const { t } = useLanguage();

  return (
    <div className="portrait-drift relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.75rem] bg-accent-soft lg:max-w-none">
      <div className="absolute inset-6 rounded-[1.35rem] border border-accent/20" />
      <div className="absolute right-[18%] top-[16%] h-24 w-24 rounded-full bg-accent/10" />
      <div className="absolute bottom-[22%] left-[14%] h-40 w-40 rounded-full bg-accent-secondary/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-7xl text-accent">C</span>
        <span className="mt-4 text-xs tracking-[0.18em] uppercase text-muted">
          {t.about.portrait}
        </span>
      </div>
    </div>
  );
}
