"use client";

import { useLanguage } from "./language-provider";
import type { Locale } from "../lib/content";

export function LanguageSwitcher({
  className = "",
  onLocaleChange,
}: {
  className?: string;
  onLocaleChange?: (locale: Locale) => void;
}) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`language-switcher flex items-center gap-2 text-sm ${className}`}
      role="group"
      aria-label={t.nav.language}
    >
      {(["de", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            className={`language-switcher-btn inline-flex min-h-11 min-w-11 touch-manipulation cursor-pointer items-center justify-center tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
              active
                ? "font-semibold text-foreground underline decoration-foreground underline-offset-4"
                : "text-muted-soft hover:text-foreground"
            }`}
            onClick={() => {
              setLocale(code);
              onLocaleChange?.(code);
            }}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
