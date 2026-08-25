"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "./language-provider";

export function DeliveryFlow() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    if (reduce || mobile) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 360) * 0.04;
        node.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="w-full" aria-hidden>
      <div className="flex items-center justify-between gap-2 sm:gap-3">
        {t.hero.flow.map((step, index) => (
          <div key={step} className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flow-dot inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span className="truncate text-[11px] font-medium tracking-[0.14em] uppercase text-foreground sm:text-xs">
                {step}
              </span>
            </div>
            {index < t.hero.flow.length - 1 ? (
              <span className="relative h-px min-w-4 flex-1 overflow-hidden bg-line">
                <span className="flow-line absolute inset-y-0 left-0 w-full bg-accent" />
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
