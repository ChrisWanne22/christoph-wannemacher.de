"use client";

import { LegalLayout } from "./legal-layout";
import { useLanguage } from "./language-provider";

export function ImprintPage() {
  const { t } = useLanguage();
  const c = t.imprint;

  return (
    <LegalLayout titleId="imprint-heading">
      <h1
        id="imprint-heading"
        className="text-2xl font-medium tracking-tight sm:text-4xl"
      >
        {c.title}
      </h1>

      <section className="mt-12 space-y-3 text-base leading-7 text-muted sm:leading-8">
        <h2 className="text-lg font-medium tracking-tight text-foreground">
          {c.accordingTo}
        </h2>
        <p>
          {c.name}
          <br />
          {c.street}
          <br />
          {c.city}
          <br />
          {c.country}
        </p>
        <p>
          {c.emailLabel}: [{c.email}]
        </p>
      </section>

      <section className="mt-12 space-y-3 text-base leading-7 text-muted sm:leading-8">
        <h2 className="text-lg font-medium tracking-tight text-foreground">
          {c.responsibleHeading}
        </h2>
        <p>
          {c.name}
          <br />
          {c.street}
          <br />
          {c.city}
          <br />
          {c.country}
        </p>
      </section>

      <section className="mt-12 space-y-3 text-base leading-7 text-muted sm:leading-8">
        <h2 className="text-lg font-medium tracking-tight text-foreground">
          {c.noticeHeading}
        </h2>
        <p>{c.notice}</p>
      </section>
    </LegalLayout>
  );
}
