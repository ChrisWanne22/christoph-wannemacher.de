"use client";

import { LegalLayout } from "./legal-layout";
import { useLanguage } from "./language-provider";

const linkClass =
  "text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground";

export function PrivacyPage() {
  const { t } = useLanguage();
  const c = t.privacy;

  return (
    <LegalLayout titleId="privacy-heading">
      <h1
        id="privacy-heading"
        className="text-2xl font-medium tracking-tight sm:text-4xl"
      >
        {c.title}
      </h1>

      <div className="mt-12 space-y-12">
        {c.sections.map((section) => (
          <section
            key={section.heading}
            className="space-y-3 text-base leading-7 text-muted sm:leading-8"
          >
            <h2 className="text-lg font-medium tracking-tight text-foreground">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {"address" in section && section.address ? (
              <p>
                {section.address.name}
                <br />
                {section.address.street}
                <br />
                {section.address.city}
                <br />
                {section.address.country}
              </p>
            ) : null}
            {"email" in section && section.email ? (
              <p>
                {section.email.label}: [{section.email.address}]
              </p>
            ) : null}
            {"list" in section && section.list ? (
              <ul className="list-disc space-y-2 pl-5">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {"closing" in section && section.closing ? (
              <p>{section.closing}</p>
            ) : null}
            {"link" in section && section.link ? (
              <p>
                <a
                  href={section.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {section.link.label}
                </a>
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </LegalLayout>
  );
}
