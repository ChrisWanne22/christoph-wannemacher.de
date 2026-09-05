"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  buildCubicSpace,
  tunnelScrollProgress,
  TunnelCube,
} from "../lib/tunnel-cubes";
import { SiteLogo } from "./site-logo";
import { useLanguage } from "./language-provider";

const MOBILE_MQ = "(max-width: 1023px)";

export function CubicTunnelHero({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [headerCompact, setHeaderCompact] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mobileMq = window.matchMedia(MOBILE_MQ);
    setIsMobile(mobileMq.matches);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = window.matchMedia(MOBILE_MQ);
    const updateMotion = () => setReducedMotion(mq.matches);
    const updateMobile = () => setIsMobile(mobileMq.matches);
    updateMotion();
    updateMobile();
    mq.addEventListener("change", updateMotion);
    mobileMq.addEventListener("change", updateMobile);
    return () => {
      mq.removeEventListener("change", updateMotion);
      mobileMq.removeEventListener("change", updateMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      setProgress(tunnelScrollProgress(section));
      setHeaderCompact(window.scrollY > 48);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    const onScroll = () => setHeaderCompact(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cubes = useMemo(
    () => (mounted ? buildCubicSpace({ mobile: isMobile }) : []),
    [isMobile, mounted],
  );

  const staticHero = !mounted || isMobile || reducedMotion;
  const eased = 1 - (1 - progress) ** 1.35;
  const travelZ = staticHero ? 0 : eased * (isMobile ? 820 : 1180);
  const contentShift = isMobile ? -72 : -120;
  const brandOpacity =
    headerCompact || progress > 0.02 ? 0 : Math.max(0, 1 - progress * 3);

  return (
    <section ref={sectionRef} className="tunnel-section" aria-label="Hero">
      <div className="tunnel-sticky">
        <a
          href="/#top"
          className="hero-brand-mark"
          aria-label="CW"
          style={{ opacity: staticHero ? (headerCompact ? 0 : 1) : brandOpacity }}
        >
          <SiteLogo size="hero" />
        </a>

        <div
          className="tunnel-scene"
          style={
            staticHero
              ? { opacity: 0.5 }
              : {
                  opacity: 1 - progress * 0.55,
                  transform: `translateY(${progress * -80}px)`,
                }
          }
          aria-hidden
        >
          <div className="tunnel-glow" />

          <div
            className="tunnel-camera"
            style={
              staticHero
                ? undefined
                : {
                    transform: `translateZ(${travelZ}px) translateY(${progress * -28}px) scale(${1 + eased * 0.08})`,
                  }
            }
          >
            {cubes.map((cube, index) => (
              <TunnelCube key={index} {...cube} />
            ))}
          </div>

          <div className="tunnel-vignette" />
        </div>

        <div
          className="tunnel-content"
          style={
            staticHero
              ? undefined
              : {
                  opacity: 1 - progress * 0.85,
                  transform: `translateY(${progress * contentShift}px)`,
                }
          }
        >
          {children}
        </div>

        <div
          className="tunnel-scroll-hint"
          style={
            staticHero
              ? undefined
              : { opacity: Math.max(0, 1 - progress * 2.5) }
          }
          aria-hidden
        >
          <span className="tunnel-scroll-chevrons">⌄⌄</span>
          <span className="tunnel-scroll-label">{t.hero.scroll}</span>
        </div>
      </div>
    </section>
  );
}
