"use client";

import { useMemo } from "react";
import { LINKEDIN_URL } from "../lib/content";
import { BeliefTiles } from "./belief-tiles";
import { CapabilityList } from "./capability-list";
import { CubicTunnelHero } from "./cubic-tunnel-hero";
import { ExternalLinkIcon } from "./external-link-icon";
import { PortraitFrame } from "./portrait-frame";
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
      { id: "how", label: t.scrollNav.how },
      { id: "work", label: t.scrollNav.work },
      { id: "beliefs", label: t.scrollNav.beliefs },
      { id: "curious", label: t.scrollNav.curious },
      { id: "beyond", label: t.scrollNav.beyond },
      { id: "contact", label: t.scrollNav.contact },
    ],
    [t],
  );

  return (
    <div className="bg-background">
      <SectionScrollNav sections={scrollSections} />

      <SiteHeader overHero />

      <div id="top" className="relative">
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
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cw btn-cw-primary"
            >
              {t.hero.cta}
              <ExternalLinkIcon />
            </a>
          </div>
        </CubicTunnelHero>
      </div>

      <main>
        {/* ── WHAT LIGHTS ME UP ── */}
        <section
          id="how"
          className="pillar-section pillar-section-overlap scroll-mt-[4.25rem] sm:scroll-mt-24"
          aria-labelledby="how-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <h2
                id="how-heading"
                className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight sm:text-4xl sm:leading-tight"
              >
                {t.how.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:leading-8">
                {t.how.intro}
              </p>
            </Reveal>
            <CapabilityList items={t.how.items} />
          </div>
        </section>

        {/* ── STORIES ── */}
        <SelectedWork work={t.work} />

        {/* ── LESSONS ── */}
        <section
          id="beliefs"
          className="relative scroll-mt-[4.25rem] overflow-visible bg-background sm:scroll-mt-24"
          aria-labelledby="beliefs-heading"
        >
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-32">
            <Reveal>
              <div className="cw-kicker-row">
                <CwKickerAccent />
                <p className="text-kicker">{t.beliefs.kicker}</p>
              </div>
              <h2
                id="beliefs-heading"
                className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl"
              >
                {t.beliefs.heading}
              </h2>
            </Reveal>
            <BeliefTiles items={t.beliefs.items} />
          </div>
        </section>

        {/* ── STILL CURIOUS ── */}
        <section
          id="curious"
          className="relative scroll-mt-[4.25rem] overflow-visible bg-background-secondary sm:scroll-mt-24"
          aria-labelledby="curious-heading"
        >
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-32">
            <Reveal>
              <div className="cw-kicker-row">
                <CwKickerAccent />
                <p className="text-kicker">{t.curious.kicker}</p>
              </div>
              <h2
                id="curious-heading"
                className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl"
              >
                {t.curious.heading}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {t.curious.intro}
              </p>
            </Reveal>

            <ul className="mt-14 divide-y divide-line-subtle border-y border-line-subtle">
              {t.curious.items.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={index * 60}>
                    <div className="grid gap-3 py-8 sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] sm:gap-10">
                      <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── OUTSIDE THE LAPTOP ── */}
        <section
          id="beyond"
          className="relative scroll-mt-[4.25rem] overflow-visible bg-background sm:scroll-mt-24"
          aria-labelledby="beyond-heading"
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
                id="beyond-heading"
                className="text-2xl font-semibold tracking-tight sm:text-4xl"
              >
                {t.beyond.heading}
              </h2>
              <p className="mt-8 max-w-lg text-base leading-7 text-muted sm:leading-8">
                {t.beyond.bio}
              </p>
              <dl className="mt-10 grid max-w-lg gap-5 sm:grid-cols-2">
                {t.beyond.interests.map((interest) => (
                  <div key={interest.label}>
                    <dt className="text-xs tracking-wide text-muted-soft">
                      {interest.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-foreground">
                      {interest.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── SAY HI ── */}
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
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cw btn-cw-primary mt-10"
                  >
                    {t.contact.cta}
                    <ExternalLinkIcon />
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
