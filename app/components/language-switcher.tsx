"use client";

import { useLanguage } from "./language-provider";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`flex items-center gap-2 text-sm ${className}`}
      role="group"
      aria-label={t.nav.language}
    >
      <button
        type="button"
        onClick={() => setLocale("de")}
        aria-pressed={locale === "de"}
        className={`tracking-wide transition-colors ${
          locale === "de"
            ? "font-semibold text-accent"
            : "text-muted hover:text-accent"
        }`}
      >
        DE
      </button>
      <span className="text-line" aria-hidden>
        |
      </span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`tracking-wide transition-colors ${
          locale === "en"
            ? "font-semibold text-accent"
            : "text-muted hover:text-accent"
        }`}
      >
        EN
      </button>
    </div>
  );
}
