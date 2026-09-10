"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { withBasePath } from "../lib/paths";
import { buildCubicSpace, TunnelCube } from "../lib/tunnel-cubes";
import { SiteLogo } from "./site-logo";

const MOBILE_MQ = "(max-width: 1023px)";

export function CubicTunnelHero({ children }: { children: ReactNode }) {
  const [headerCompact, setHeaderCompact] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mobileMq = window.matchMedia(MOBILE_MQ);
    setIsMobile(mobileMq.matches);

    const updateMobile = () => setIsMobile(mobileMq.matches);
    mobileMq.addEventListener("change", updateMobile);
    return () => mobileMq.removeEventListener("change", updateMobile);
  }, []);

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

  return (
    <section className="tunnel-section tunnel-section-static" aria-label="Hero">
      <div className="tunnel-sticky">
        <a
          href={withBasePath("/#top")}
          className={`hero-brand-mark${headerCompact ? " is-scrolled" : ""}`}
          aria-label="CW"
        >
          <SiteLogo size="hero" />
        </a>

        <div className="tunnel-scene" aria-hidden>
          <div className="tunnel-glow" />

          <div className="tunnel-camera">
            {cubes.map((cube, index) => (
              <TunnelCube key={index} {...cube} />
            ))}
          </div>

          <div className="tunnel-vignette" />
        </div>

        <div className="tunnel-content">{children}</div>
      </div>
    </section>
  );
}
