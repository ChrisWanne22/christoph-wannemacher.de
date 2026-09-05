"use client";

import { LINKEDIN_URL } from "../lib/content";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-provider";
import { SiteLogo } from "./site-logo";

const linkClass =
  "transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/#top", label: t.nav.home },
    { href: "/#work", label: t.nav.work },
    { href: "/#about", label: t.nav.about },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-line/40 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a
              href="/"
              className={`brand-logo inline-block ${linkClass}`}
              aria-label={t.footer.name}
            >
              <SiteLogo size="sm" />
            </a>
            <p className="mt-3 text-sm text-muted">{t.footer.email}</p>
          </div>

          <nav
            className="flex flex-col gap-6 text-sm text-muted"
            aria-label="Footer"
          >
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {t.footer.linkedin}
                </a>
              </li>
              <li>
                <a href="/imprint" className={linkClass}>
                  {t.footer.imprint}
                </a>
              </li>
              <li>
                <a href="/privacy" className={linkClass}>
                  {t.footer.privacy}
                </a>
              </li>
            </ul>

            <LanguageSwitcher />
          </nav>
        </div>

        <p className="mt-10 text-xs text-muted/70">
          © {year} {t.footer.name}
        </p>
      </div>
    </footer>
  );
}
