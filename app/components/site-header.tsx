"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LINKEDIN_URL } from "../lib/content";
import { ExternalLinkIcon } from "./external-link-icon";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-provider";
import { SiteLogo } from "./site-logo";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export function SiteHeader({
  overHero = false,
}: {
  overHero?: boolean;
}) {
  const { t } = useLanguage();
  const panelId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const [compact, setCompact] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!overHero) {
      setPastHero(true);
      return;
    }

    const hero = document.getElementById("top");
    if (!hero) {
      setPastHero(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(entry.intersectionRatio < 0.75);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [overHero]);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const header = headerRef.current;
    if (header) setHeaderHeight(header.offsetHeight);

    const scrollY = window.scrollY;
    const { body, documentElement } = document;
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    // iOS-safe scroll lock: body fixed so the page cannot scroll under the menu.
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      body.style.overflow = previous.overflow;
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  const showOverHeroStyle = overHero && !pastHero;
  const hideLogo = showOverHeroStyle && !compact;

  const links: NavLink[] = [
    { href: "/#top", label: t.nav.home },
    { href: "/#work", label: t.nav.work },
    { href: "/#beyond", label: t.nav.about },
    { href: LINKEDIN_URL, label: t.nav.contact, external: true },
  ];

  const mobileMenu =
    mounted && menuOpen
      ? createPortal(
          <div className="mobile-nav-layer" role="presentation">
            <button
              type="button"
              className="mobile-nav-backdrop"
              aria-label={t.nav.close}
              tabIndex={-1}
              onClick={closeMenu}
            />
            <div
              id={panelId}
              className="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label={t.nav.menu}
              onClick={(event) => event.stopPropagation()}
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-cw-mobile inline-flex min-h-11 items-center gap-1.5 py-2.5 text-foreground touch-manipulation"
                    onClick={closeMenu}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                    {link.external ? <ExternalLinkIcon /> : null}
                  </a>
                ))}
              </nav>

              <div className="mt-4 border-t border-line-subtle pt-4">
                <LanguageSwitcher onLocaleChange={closeMenu} />
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      {menuOpen ? (
        <div style={{ height: headerHeight || undefined }} aria-hidden />
      ) : null}
      <header
        ref={headerRef}
        className={`site-header ${
          menuOpen ? "is-menu-open fixed inset-x-0 top-0" : "sticky top-0"
        } z-[100] lg:z-50 ${
          showOverHeroStyle
            ? `header-over-hero ${compact ? "is-compact" : ""}`
            : `border-b border-line/50 bg-background/90 backdrop-blur-sm ${compact || pastHero ? "shadow-[0_1px_0_rgba(217,217,217,0.7)]" : ""}`
        }`}
        style={{
          paddingTop: "env(safe-area-inset-top, 0px)",
        }}
      >
        <div
          className={`header-compact mx-auto flex max-w-[90rem] items-center gap-4 px-5 sm:px-10 lg:px-14 ${
            compact || pastHero
              ? "h-[3.75rem] sm:h-[4.5rem]"
              : "h-[4.25rem] sm:h-24"
          }`}
        >
          <a
            href="/#top"
            className={`brand-logo shrink-0 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground ${
              hideLogo ? "pointer-events-none invisible w-0 overflow-hidden" : ""
            }`}
            aria-label={t.nav.name}
            tabIndex={hideLogo ? -1 : undefined}
            onClick={closeMenu}
          >
            <SiteLogo size={compact || pastHero ? "sm" : "md"} />
          </a>

          <nav
            className="ml-auto hidden items-center gap-10 lg:flex"
            aria-label="Primary"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-cw inline-flex items-center gap-1.5 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
                {link.external ? <ExternalLinkIcon /> : null}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-4 lg:ml-8">
            <LanguageSwitcher className="hidden lg:flex" />

            <button
              type="button"
              className="nav-cw inline-flex min-h-11 min-w-11 touch-manipulation cursor-pointer items-center justify-center px-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground lg:hidden"
              aria-controls={panelId}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.nav.close : t.nav.menu}
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
