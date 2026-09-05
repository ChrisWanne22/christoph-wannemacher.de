"use client";

import { CwCubicFrame } from "./cw-design-elements";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function LegalLayout({
  children,
  titleId,
}: {
  children: React.ReactNode;
  titleId: string;
}) {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main id="top" className="relative" aria-labelledby={titleId}>
        <div className="relative mx-auto max-w-6xl overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <CwCubicFrame className="legal-cw-frame" />
          <article className="relative max-w-2xl">{children}</article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
