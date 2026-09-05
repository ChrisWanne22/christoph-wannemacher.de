"use client";

import { useMemo } from "react";
import { CapabilityList } from "./capability-list";
import { CubicTunnelHero } from "./cubic-tunnel-hero";
import { PillarCards } from "./pillar-cards";
import { PortraitFrame } from "./portrait-frame";
import { ProcessJourney } from "./process-journey";
import { Reveal } from "./reveal";
import { SectionScrollNav } from "./section-scroll-nav";
import { SelectedWork } from "./selected-work";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { useLanguage } from "./language-provider";
import { CwCubicFrame, CwKickerAccent } from "./cw-design-elements";

export function HomePage() {
  const { t } = useLanguage();

  const scrollSections = useMemo(
    () => [
      { id: "top", label: t.scrollNav.hero },
      { id: "pillars", label: t.scrollNav.pillars },
      { id: "services", label: t.scrollNav.services },
      { id: "work", label: t.scrollNav.work },
      { id: "approach", label: t.scrollNav.approach },
      { id: "about", label: t.scrollNav.about },
      { id: "contact", label: t.scrollNav.contact },
    ],
    [t],
  );

  return (
    <div className="bg-background">
      <SectionScrollNav sections={scrollSections} />

      <SiteHeader overHero revealOnScrollUp />

      <div id="top" className="relative">

        {/* ── HERO: Cubic Tunnel ── */}
        <CubicTunnelHero>
          <p className="text-kicker animate-hero">{t.hero.greeting}</p>
          <h1 className="text-display animate-hero animate-delay-1">
            {t.hero.headlineLines.map((line) => (
              <span key={line} className="hero-headline-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-lead animate-hero animate-delay-2">
            {t.hero.valueProp}
          </p>
          <div className="hero-actions animate-hero animate-delay-3">
            <a href="#services" className="btn-cw btn-cw-primary">
              {t.hero.cta} →
            </a>
          </div>
        </CubicTunnelHero>
      </div>

      <main>
        {/* ── PILLARS: Strategie / Design / Umsetzung ── */}
        <section
          id="pillars"
          className="pillar-section pillar-section-overlap scroll-mt-[4.25rem] sm:scroll-mt-24"
          aria-label="Pillars"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <PillarCards items={t.pillars.items} />
          </div>
        </section>

        {/* ── POSITIONING ── */}
        <section
          id="positioning"
          className="relative scroll-mt-[4.25rem] overflow-visible bg-background-secondary sm:scroll-mt-24"
          aria-labelledby="positioning-heading"
        >
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-32">
            <Reveal>
              <div className="cw-kicker-row">
                <CwKickerAccent />
                <p className="text-kicker">{t.positioning.kicker}</p>
              </div>
              <h2
                id="positioning-heading"
                className="mt-4 max-w-2xl text-2xl font-semibold leading-snug tracking-tight sm:text-4xl sm:leading-tight"
              >
                {t.positioning.heading}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:leading-8">
                {t.positioning.text}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          id="services"
          className="relative scroll-mt-[4.25rem] overflow-visible sm:scroll-mt-24"
          aria-labelledby="services-heading"
        >
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-32">
            <Reveal>
              <h2
                id="services-heading"
                className="text-2xl font-semibold tracking-tight sm:text-4xl"
              >
                {t.services.heading}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {t.services.intro}
              </p>
            </Reveal>
            <CapabilityList items={t.services.items} />
          </div>
        </section>

        {/* ── WORK ── */}
        <SelectedWork work={t.work} />

        {/* ── APPROACH ── */}
        <ProcessJourney
          heading={t.approach.heading}
          intro={t.approach.intro}
          steps={t.approach.steps}
        />

        {/* ── ABOUT ── */}
        <section
          id="about"
          className="relative scroll-mt-[4.25rem] overflow-visible bg-background sm:scroll-mt-24"
          aria-labelledby="about-heading"
        >
          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20 lg:py-32">
            <Reveal
              delay={80}
              className="order-1 flex justify-center overflow-visible lg:justify-start"
            >
              <PortraitFrame />
            </Reveal>
            <Reveal className="order-2">
              <h2
                id="about-heading"
                className="text-2xl font-semibold tracking-tight sm:text-4xl"
              >
                {t.about.heading}
              </h2>
              <p className="mt-8 max-w-lg text-base leading-7 text-muted sm:leading-8">
                {t.about.bio}
              </p>
              <div className="mt-10 max-w-lg">
                <h3 className="text-lg font-medium tracking-tight text-foreground">
                  {t.about.styleHeading}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted sm:leading-8">
                  {t.about.styleText}
                </p>
              </div>
              <dl className="mt-10 grid max-w-lg gap-5 sm:grid-cols-2">
                {t.about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs tracking-wide text-muted-soft">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="#contact"
                className="btn-cw btn-cw-primary mt-10"
              >
                {t.about.cta} →
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          id="contact"
          className="relative scroll-mt-[4.25rem] sm:scroll-mt-24"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
              <div className="contact-panel">
                <CwCubicFrame className="contact-panel-frame" />
                <div className="contact-panel-inner">
                <h2
                  id="contact-heading"
                  className="max-w-xl text-2xl font-semibold leading-snug tracking-tight sm:text-4xl sm:leading-tight"
                >
                  {t.contact.heading}
                </h2>
                <p className="mt-5 text-lg text-muted sm:text-xl">
                  {t.contact.body}
                </p>
                <a
                  href="mailto:[EMAIL PLACEHOLDER]"
                  className="btn-cw btn-cw-primary mt-10"
                >
                  {t.contact.cta} →
                </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
