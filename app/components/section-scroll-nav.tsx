"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";

export type ScrollSection = {
  id: string;
  label: string;
};

export function SectionScrollNav({ sections }: { sections: readonly ScrollSection[] }) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
          return;
        }

        const scrollY = window.scrollY + window.innerHeight * 0.35;
        let current = sections[0].id;
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (!element) continue;
          if (element.offsetTop <= scrollY) {
            current = section.id;
          }
        }
        setActiveId(current);
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="section-scroll-nav"
      aria-label={t.nav.sectionNav}
    >
      <ul className="section-scroll-nav-list">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                className={`section-scroll-dot ${isActive ? "is-active" : ""}`}
                onClick={() => scrollTo(section.id)}
                aria-label={section.label}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="section-scroll-dot-hit" />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
