"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { withBasePath } from "../lib/paths";
import { CwKickerAccent } from "./cw-design-elements";
import { Reveal } from "./reveal";
import styles from "./selected-work.module.css";

export type WorkProject = {
  id: string;
  number: string;
  category: string;
  title: string;
  metric: string;
  role: string;
  work: readonly string[];
  storyIntro: string;
  story: string;
  image: string;
};

export type WorkContent = {
  kicker: string;
  heading: string;
  intro: string;
  learnMore: string;
  back: string;
  roleLabel: string;
  workLabel: string;
  projects: readonly WorkProject[];
  statement: {
    lines: readonly [string, string, string];
  };
};

function AdventureCard({
  project,
  learnMore,
  back,
  roleLabel,
  workLabel,
}: {
  project: WorkProject;
  learnMore: string;
  back: string;
  roleLabel: string;
  workLabel: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const reactId = useId();
  const frontId = `${reactId}-front`;
  const backId = `${reactId}-back`;
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const skipInitialFocus = useRef(true);

  useEffect(() => {
    if (skipInitialFocus.current) {
      skipInitialFocus.current = false;
      return;
    }
    if (flipped) {
      backButtonRef.current?.focus();
    } else {
      openButtonRef.current?.focus();
    }
  }, [flipped]);

  const open = () => setFlipped(true);
  const close = () => setFlipped(false);

  return (
    <div className={styles.scene}>
      <div
        className={`${styles.card} ${flipped ? styles.isFlipped : ""}`}
        data-flipped={flipped ? "true" : "false"}
      >
        <div
          id={frontId}
          className={`${styles.face} ${styles.front}`}
          aria-hidden={flipped}
          inert={flipped ? true : undefined}
        >
          <div className={styles.media}>
            <Image
              src={withBasePath(project.image)}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 720px"
              className={styles.mediaImage}
            />
          </div>
          <div className={styles.body}>
            <div className={styles.meta}>
              <span className={styles.number}>{project.number}</span>
              <span className={styles.category}>{project.category}</span>
            </div>

            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.metric}>{project.metric}</p>
            <p className={styles.storyIntro}>{project.storyIntro}</p>
            <p className={styles.text}>{project.story}</p>

            <div className={styles.footer}>
              <button
                ref={openButtonRef}
                type="button"
                className={styles.cta}
                aria-expanded={flipped}
                aria-controls={backId}
                onClick={open}
              >
                {learnMore}
              </button>
            </div>
          </div>
        </div>

        <div
          id={backId}
          className={`${styles.face} ${styles.back}`}
          aria-hidden={!flipped}
          inert={!flipped ? true : undefined}
        >
          <div className={styles.media}>
            <Image
              src={withBasePath(project.image)}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 720px"
              className={styles.mediaImage}
            />
          </div>
          <div className={styles.body}>
            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>{roleLabel}</p>
              <p className={styles.detailValue}>{project.role}</p>
            </div>

            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>{workLabel}</p>
              <ul className={styles.workList}>
                {project.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.footer}>
              <button
                ref={backButtonRef}
                type="button"
                className={styles.cta}
                aria-expanded={flipped}
                aria-controls={frontId}
                onClick={close}
              >
                {back}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatementCard({ lines }: { lines: readonly [string, string, string] }) {
  return (
    <article className={styles.statementCard} aria-label={lines.join(" ")}>
      <p className={styles.statementLines}>
        {lines.map((line) => (
          <span key={line} className={styles.statementLine}>
            {line}
          </span>
        ))}
      </p>
    </article>
  );
}

export function SelectedWork({ work }: { work: WorkContent }) {
  return (
    <section
      id="work"
      className={`${styles.section} relative scroll-mt-[4.25rem] sm:scroll-mt-24`}
      aria-labelledby="work-heading"
    >
      <div className={styles.inner}>
        <Reveal>
          <div className="cw-kicker-row">
            <CwKickerAccent />
            <p className="text-kicker">{work.kicker}</p>
          </div>
          <h2 id="work-heading" className={styles.heading}>
            {work.heading}
          </h2>
          <p className={styles.intro}>{work.intro}</p>
        </Reveal>

        <ul className={styles.grid}>
          {work.projects.map((project, index) => (
            <li key={project.id} className={styles.item}>
              <Reveal delay={Math.min(index * 70, 280)} className="h-full">
                <AdventureCard
                  project={project}
                  learnMore={work.learnMore}
                  back={work.back}
                  roleLabel={work.roleLabel}
                  workLabel={work.workLabel}
                />
              </Reveal>
            </li>
          ))}
          <li className={styles.item}>
            <Reveal delay={280} className="h-full">
              <StatementCard lines={work.statement.lines} />
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}
