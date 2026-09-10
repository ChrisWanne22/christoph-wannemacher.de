"use client";

import { CwLineElement, CwTileFrame } from "./cw-design-elements";
import { Reveal } from "./reveal";

type CapabilityItem = {
  number: string;
  title: string;
  text: string;
};

export function CapabilityList({
  items,
}: {
  items: readonly CapabilityItem[];
}) {
  return (
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.number} delay={index * 70}>
          <CwTileFrame className="tile group h-full">
            <article className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs tracking-widest text-muted">
                  {item.number}
                </span>
                <CwLineElement className="cw-tile-accent-line" />
              </div>
              <h3 className="mt-8 text-lg font-medium leading-snug tracking-tight sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                {item.text}
              </p>
              <span
                className="tile-arrow mt-6 inline-flex text-sm text-foreground"
                aria-hidden
              >
                →
              </span>
            </article>
          </CwTileFrame>
        </Reveal>
      ))}
    </div>
  );
}
