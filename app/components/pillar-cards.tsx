"use client";

import { CwIconFrame } from "./cw-design-elements";
import { Reveal } from "./reveal";

type PillarItem = {
  title: string;
  text: string;
};

export function PillarCards({ items }: { items: readonly PillarItem[] }) {
  return (
    <div className="pillar-grid">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 80}>
          <article className="pillar-card">
            <CwIconFrame className="pillar-card-mark" />
            <h3 className="pillar-card-title">{item.title}</h3>
            <p className="pillar-card-text">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
