"use client";

import Image from "next/image";
import { withBasePath } from "../lib/paths";
import { CwKickerAccent } from "./cw-design-elements";
import { Reveal } from "./reveal";
import styles from "./selected-work.module.css";

export type WorkProject = {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  text: string;
  metric: string;
  image: string;
  span: "default" | "full";
};

export type WorkContent = {
  kicker: string;
  heading: string;
  intro: string;
  projects: readonly WorkProject[];
};

function spanClass(span: WorkProject["span"]) {
  return span === "full" ? styles.spanFull : "";
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
            <li
              key={project.id}
              className={`${styles.item} ${spanClass(project.span)}`}
            >
              <Reveal delay={Math.min(index * 70, 280)} className="h-full">
                <article className={styles.card}>
                  <div className={styles.media}>
                    <Image
                      src={withBasePath(project.image)}
                      alt={project.title}
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
                    <p className={styles.role}>{project.subtitle}</p>
                    <p className={styles.text}>{project.text}</p>

                    <div className={styles.footer}>
                      <span className={styles.metric}>{project.metric}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
