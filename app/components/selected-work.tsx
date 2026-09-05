"use client";

import Image from "next/image";
import { CwKickerAccent } from "./cw-design-elements";
import { Reveal } from "./reveal";
import styles from "./selected-work.module.css";

export type WorkProject = {
  id: string;
  number: string;
  category: string;
  title: string;
  text: string;
  metric: string;
  role: string;
  image: string;
  imageAlt: string;
  span: "default" | "wide" | "tall";
};

export type WorkContent = {
  kicker: string;
  heading: string;
  intro: string;
  cta: string;
  resultLabel: string;
  projects: readonly WorkProject[];
};

function spanClass(span: WorkProject["span"]) {
  if (span === "wide") return styles.spanWide;
  if (span === "tall") return styles.spanTall;
  return "";
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
                <a
                  href="#contact"
                  className={styles.card}
                  aria-label={`${project.number} ${project.title}. ${work.cta}`}
                >
                  <div className={styles.media}>
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes={
                        project.span === "wide"
                          ? "(max-width: 768px) 100vw, 66vw"
                          : "(max-width: 768px) 100vw, 33vw"
                      }
                      className={styles.image}
                    />
                    <div className={styles.mediaShade} aria-hidden />
                  </div>

                  <div className={styles.body}>
                    <div className={styles.meta}>
                      <span className={styles.number}>{project.number}</span>
                      <span className={styles.category}>{project.category}</span>
                    </div>

                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.text}>{project.text}</p>
                    <p className={styles.role}>{project.role}</p>

                    <div className={styles.footer}>
                      <span className={styles.metric}>{project.metric}</span>
                      <span className={styles.cta} aria-hidden>
                        <span className={styles.ctaLabel}>{work.cta}</span>
                        <span className={styles.arrow}>→</span>
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
