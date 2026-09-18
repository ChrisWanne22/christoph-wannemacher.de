"use client";

import { useState } from "react";
import {
  buildBrainCubes,
  type StrengthId,
} from "../lib/brain-cubes";
import { CwKickerAccent } from "./cw-design-elements";
import { Reveal } from "./reveal";
import styles from "./brain-section.module.css";

export type BrainStrengthItem = {
  id: StrengthId;
  label: string;
  title: string;
  text: string;
};

export type BrainContent = {
  kicker: string;
  heading: string;
  intro: string;
  hint: string;
  items: readonly BrainStrengthItem[];
};

const CUBES = buildBrainCubes();

export function BrainSection({ brain }: { brain: BrainContent }) {
  const [activeId, setActiveId] = useState<StrengthId>("vertrauen");

  const active =
    brain.items.find((item) => item.id === activeId) ?? brain.items[0];

  const structural = CUBES.filter((cube) => cube.type === "structure");
  const strengths = CUBES.filter((cube) => cube.type === "strength");

  return (
    <section
      id="brain"
      className={`${styles.section} scroll-mt-[4.25rem] sm:scroll-mt-24`}
      aria-labelledby="brain-heading"
    >
      <div className={styles.inner}>
        <Reveal>
          <div className="cw-kicker-row">
            <CwKickerAccent />
            <p className="text-kicker">{brain.kicker}</p>
          </div>
          <h2 id="brain-heading" className={styles.heading}>
            {brain.heading}
          </h2>
          <p className={styles.intro}>{brain.intro}</p>
        </Reveal>

        <div className={styles.layout}>
          <div className={styles.stageWrap}>
            <div
              className={styles.stage}
              role="group"
              aria-label={brain.heading}
            >
              <svg
                className={styles.brainSvg}
                viewBox="0 0 100 100"
                role="presentation"
              >
                {structural.map((cube) => (
                  <rect
                    key={cube.id}
                    className={styles.structureSquare}
                    x={cube.x - cube.size / 2}
                    y={cube.y - cube.size / 2}
                    width={cube.size}
                    height={cube.size}
                  />
                ))}
              </svg>

              {strengths.map((cube) => {
                const item = brain.items.find((s) => s.id === cube.strengthId);
                if (!item || !cube.strengthId || !cube.number) return null;

                return (
                  <button
                    key={cube.id}
                    type="button"
                    className={`${styles.strengthSquare} ${
                      activeId === cube.strengthId ? styles.strengthActive : ""
                    }`}
                    style={{
                      left: `${cube.x}%`,
                      top: `${cube.y}%`,
                      width: `${cube.size}%`,
                      height: `${cube.size}%`,
                    }}
                    aria-pressed={activeId === cube.strengthId}
                    aria-label={`${cube.number} ${item.label}`}
                    onClick={() => setActiveId(cube.strengthId!)}
                  >
                    <span className={styles.strengthCaption}>
                      <span className={styles.strengthCaptionNum}>
                        {cube.number}
                      </span>
                      <span className={styles.strengthCaptionRule} aria-hidden />
                      <span className={styles.strengthCaptionLabel}>
                        {item.label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <p className={styles.hint}>{brain.hint}</p>
          </div>

          <div className={styles.panel} aria-live="polite">
            <p className={styles.panelLabel}>{active.label}</p>
            <h3 className={styles.panelTitle}>{active.title}</h3>
            <p className={styles.panelText}>{active.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
