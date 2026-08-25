"use client";

import { DeliveryFlow } from "./delivery-flow";
import { PortraitFrame } from "./portrait-frame";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";
import { useLanguage } from "./language-provider";

function ProjectVisual({ id }: { id: string }) {
  if (id === "health") {
    return (
      <div className="relative h-full min-h-[220px] overflow-hidden rounded-2xl bg-accent-soft p-8 sm:min-h-[280px]">
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/25 sm:h-52 sm:w-52" />
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40 sm:h-32 sm:w-32" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        <span className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-accent-secondary" />
        <span className="absolute bottom-10 left-10 h-2 w-2 rounded-full bg-accent" />
        <span className="absolute right-14 bottom-16 h-2 w-2 rounded-full bg-accent-secondary" />
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[220px] flex-col justify-end gap-2.5 overflow-hidden rounded-2xl bg-accent-soft p-8 sm:min-h-[280px]">
      <div className="h-3 w-[42%] rounded-full bg-accent/25" />
      <div className="h-3 w-[68%] rounded-full bg-accent/40" />
      <div className="h-3 w-[86%] rounded-full bg-accent" />
      <div className="h-3 w-[55%] rounded-full bg-accent-secondary/70" />
    </div>
  );
}

export function HomePage() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-full flex-col bg-background">
      <SiteHeader />

      <main id="top" className="flex-1">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 pb-10 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)] lg:gap-16 lg:pt-20">
            <div>
              <p className="animate-hero font-display text-[2.6rem] leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4.6rem]">
                {t.hero.greeting}
              </p>
              <h1 className="animate-hero animate-delay-1 mt-6 max-w-xl text-2xl font-medium leading-snug tracking-tight sm:text-4xl sm:leading-[1.15]">
                <span className="text-accent">{t.hero.roleLine1}</span>
                <br />
                {t.hero.roleLine2}
              </h1>
              <p className="animate-hero animate-delay-2 mt-7 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {t.hero.body}
              </p>
              <div className="animate-hero animate-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_12px_28px_rgba(8,127,140,0.28)]"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="#work"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-surface px-6 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent hover:text-accent"
                >
                  {t.hero.secondary}
                </a>
              </div>
            </div>
            <div className="animate-hero animate-delay-4">
              <PortraitFrame />
            </div>
          </div>
          <div className="animate-hero animate-delay-5 mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
            <DeliveryFlow />
          </div>
        </section>

        <section
          id="positioning"
          className="border-y border-line bg-surface"
          aria-labelledby="positioning-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-accent">
                {t.positioning.kicker}
              </p>
              <h2
                id="positioning-heading"
                className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-[2.5rem]"
              >
                {t.positioning.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:leading-8">
                {t.positioning.text}
              </p>
            </Reveal>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
          aria-labelledby="services-heading"
        >
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="services-heading"
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              {t.services.heading}
            </h2>
            <p className="max-w-sm text-sm leading-6 text-muted">
              {t.services.intro}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {t.services.items.map((item, index) => (
              <Reveal key={item.number} delay={index * 90}>
                <article className="h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-accent/35 md:hover:shadow-[0_16px_36px_rgba(8,127,140,0.1)] sm:p-7">
                  <span className="font-mono text-xs tracking-widest text-accent">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-xl font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-24 border-t border-line bg-surface"
          aria-labelledby="work-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-accent">
                {t.work.kicker}
              </p>
              <h2
                id="work-heading"
                className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl"
              >
                {t.work.heading}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                {t.work.intro}
              </p>
            </Reveal>

            <div className="mt-14 space-y-8">
              {t.work.projects.map((project, index) => (
                <Reveal key={project.id} delay={index * 80}>
                  <a
                    href="#contact"
                    className="group grid overflow-hidden rounded-3xl border border-line bg-background transition-all duration-300 md:hover:-translate-y-1 md:hover:border-accent/40 md:hover:shadow-[0_20px_48px_rgba(8,127,140,0.12)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                  >
                    <ProjectVisual id={project.id} />
                    <div className="flex flex-col p-7 sm:p-10">
                      <p className="text-xs font-medium tracking-[0.16em] uppercase text-accent">
                        {project.kicker}
                      </p>
                      <h3 className="mt-3 text-2xl font-medium leading-snug tracking-tight sm:text-[1.75rem]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{project.role}</p>
                      <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                        {project.text}
                      </p>
                      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                        {project.impact.map((item) => (
                          <li
                            key={item}
                            className="text-sm leading-6 text-foreground"
                          >
                            <span className="mr-2 text-accent">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-transform duration-300 md:group-hover:translate-x-1">
                        {t.work.cta}
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
          aria-labelledby="approach-heading"
        >
          <Reveal>
            <h2
              id="approach-heading"
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              {t.approach.heading}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
              {t.approach.intro}
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.approach.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <li className="relative">
                  <span className="font-display text-3xl text-accent-secondary">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-t border-line bg-surface"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 lg:py-24">
            <Reveal>
              <h2
                id="about-heading"
                className="font-display text-4xl tracking-tight sm:text-5xl"
              >
                {t.about.heading}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-7 text-muted sm:leading-8">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </Reveal>
            <Reveal delay={80} className="flex flex-col justify-center">
              <dl className="space-y-6 rounded-3xl border border-line bg-background p-8">
                {t.about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs tracking-[0.16em] uppercase text-accent">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-lg text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 bg-accent text-white"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <Reveal>
              <h2
                id="contact-heading"
                className="max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-5xl"
              >
                {t.contact.heading}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/80">
                {t.contact.body}
              </p>
              <a
                href="mailto:hello@placeholder.com"
                className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
              >
                {t.contact.cta}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted">
            © {year} Chris. {t.footer.rights}
          </p>
          <div className="flex flex-wrap gap-7 text-sm text-muted">
            <a
              href="https://www.linkedin.com"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@placeholder.com"
              className="transition-colors hover:text-accent"
            >
              Email
            </a>
            <span>{t.footer.imprint}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
