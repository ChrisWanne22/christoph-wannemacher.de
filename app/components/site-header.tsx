"use client";

import { useState } from "react";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-provider";

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-[#fafbf9]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <a
          href="#top"
          className="shrink-0 font-display text-xl tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Chris
        </a>

        <nav
          className="ml-auto hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:ml-8">
          <LanguageSwitcher />
          <button
            type="button"
            className="text-sm text-muted transition-colors hover:text-accent lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-background px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground transition-colors hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
