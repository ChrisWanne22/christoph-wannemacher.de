"use client";

import { CwLineElement, CwTileFrame } from "./cw-design-elements";
import { Reveal } from "./reveal";

export type BeliefItem = {
  number: string;
  title: string;
  text: string;
};

export function BeliefTiles({ items }: { items: readonly BeliefItem[] }) {
  return (
    <ul className="mt-14 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <li
          key={item.number}
          className={
            index === items.length - 1 && items.length % 2 === 1
              ? "sm:col-span-2 lg:col-span-1"
              : undefined
          }
        >
          <Reveal delay={index * 70} className="h-full">
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
        </li>
      ))}
    </ul>
  );
}
