"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { buildCubicSpace, TunnelCube } from "../lib/tunnel-cubes";

const MOBILE_MQ = "(max-width: 1023px)";

export function CubicTunnelHero({ children }: { children: ReactNode }) {
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

  const cubes = useMemo(
    () => (mounted ? buildCubicSpace({ mobile: isMobile }) : []),
    [isMobile, mounted],
  );

  return (
    <section className="tunnel-section tunnel-section-static" aria-label="Hero">
      <div className="tunnel-sticky">
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
