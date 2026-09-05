"use client";

import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-provider";
import { SiteLogo } from "./site-logo";

const UP_SCROLL_REVEAL_PX = 120;
const MOBILE_NAV_MQ = "(max-width: 1023px)";

function closeMobileNav(details: HTMLDetailsElement | null) {
  if (details) details.open = false;
}

export function SiteHeader({
  overHero = false,
  absolute = false,
  revealOnScrollUp = false,
}: {
  overHero?: boolean;
  absolute?: boolean;
  /** Fixed header: hidden after hero, revealed after sustained upward scroll */
  revealOnScrollUp?: boolean;
}) {
  const { t } = useLanguage();
  const [compact, setCompact] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDetailsElement>(null);
  const lastScrollY = useRef(0);
  const upScrollAccum = useRef(0);

  const isVisible =
    !revealOnScrollUp || !pastHero || revealed || menuOpen;

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const update = () => setIsMobileNav(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!revealOnScrollUp) return;

    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(entry.intersectionRatio < 0.75);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [revealOnScrollUp]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCompact(y > 48);

      if (revealOnScrollUp) {
        const delta = y - lastScrollY.current;

        if (delta < -2) {
          upScrollAccum.current += Math.abs(delta);
          if (upScrollAccum.current >= UP_SCROLL_REVEAL_PX) {
            setRevealed(true);
          }
        } else if (delta > 2) {
          upScrollAccum.current = 0;
          setRevealed(false);
        }

        lastScrollY.current = y;
      }
    };

    lastScrollY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealOnScrollUp]);

  useEffect(() => {
    if (!pastHero) {
      setRevealed(false);
      upScrollAccum.current = 0;
    }
  }, [pastHero]);

  useEffect(() => {
    if (!revealOnScrollUp) return;
    if (!isVisible) closeMobileNav(mobileNavRef.current);
  }, [isVisible, revealOnScrollUp]);

  useEffect(() => {
    const details = mobileNavRef.current;
    if (!details) return;

    const sync = () => {
      const open = details.open;
      setMenuOpen(open);
      if (open) {
        setRevealed(true);
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    };

    details.addEventListener("toggle", sync);
    sync();
    return () => {
      details.removeEventListener("toggle", sync);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const showOverHeroStyle = overHero && !pastHero;
  const hideLogo = showOverHeroStyle && !compact;

  const hideHeader = revealOnScrollUp && !isVisible;

  const links = [
    { href: "/#top", label: t.nav.home },
    { href: "/#work", label: t.nav.work },
    { href: "/#about", label: t.nav.about },
    { href: "/#contact", label: t.nav.contact },
  ];

  const positionClass = revealOnScrollUp
    ? "fixed inset-x-0 top-0"
    : absolute
      ? "absolute inset-x-0 top-0"
      : "sticky top-0";

  return (
    <header
      className={`site-header ${positionClass} z-[100] lg:z-50 transition-transform duration-300 ${
        hideHeader ? "-translate-y-full lg:pointer-events-none" : "translate-y-0"
      } ${
        showOverHeroStyle
          ? `header-over-hero ${compact ? "is-compact" : ""}`
          : `border-b border-line/50 bg-background/90 backdrop-blur-sm ${compact || pastHero ? "shadow-[0_1px_0_rgba(217,217,217,0.7)]" : ""}`
      }`}
      aria-hidden={hideHeader ? true : undefined}
      data-visible={isVisible ? "true" : "false"}
      style={{
        paddingTop: "env(safe-area-inset-top, 0px)",
      }}
    >
      <div
        className={`header-compact mx-auto flex max-w-[90rem] items-center gap-4 px-5 sm:px-10 lg:px-14 ${
          compact || (isMobileNav && pastHero) ? "h-[3.75rem] sm:h-[4.5rem]" : "h-[4.25rem] sm:h-24"
        }`}
      >
        <a
          href="/#top"
          className={`brand-logo shrink-0 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground ${
            hideLogo ? "pointer-events-none invisible w-0 overflow-hidden" : ""
          }`}
          aria-label={t.nav.name}
          tabIndex={hideLogo ? -1 : undefined}
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
              className="nav-cw transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-4 lg:ml-8">
          <LanguageSwitcher className={isMobileNav ? "hidden" : "hidden sm:flex"} />
          <div className="min-w-11 lg:hidden" aria-hidden />
        </div>
      </div>

      <details ref={mobileNavRef} className="mobile-nav-details group lg:hidden">
        <summary
          className="nav-cw mobile-nav-trigger inline-flex min-h-11 min-w-11 touch-manipulation cursor-pointer list-none items-center justify-center px-2 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground [&::-webkit-details-marker]:hidden"
          aria-controls="mobile-nav"
        >
          <span className="group-open:hidden">{t.nav.menu}</span>
          <span className="hidden group-open:inline">{t.nav.close}</span>
        </summary>
        <div
          id="mobile-nav"
          className="mobile-nav-panel relative z-[60] border-t border-line/50 bg-background px-5 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))]"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-cw-mobile block min-h-11 py-2.5 text-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                onClick={() => closeMobileNav(mobileNavRef.current)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 border-t border-line-subtle pt-4">
            <LanguageSwitcher />
          </div>
        </div>
      </details>
    </header>
  );
}
