"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { buildCubicSpace, TunnelCube } from "../lib/tunnel-cubes";

const MOBILE_MQ = "(max-width: 1023px)";
const FINE_POINTER_MQ = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_MQ = "(prefers-reduced-motion: reduce)";

/** Max camera tilt in degrees — subtle, the room should "breathe", not swing. */
const TILT_X = 6;
const TILT_Y = 9;
/** Smoothing factor per frame (0..1). Lower = softer, more inertia. */
const EASE = 0.055;

export function CubicTunnelHero({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);

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

  /* Pointer parallax: camera tilts towards the cursor, light follows it.
     Without a fine pointer (touch) the room drifts slowly on its own. */
  useEffect(() => {
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    if (!scene || !camera) return;
    if (window.matchMedia(REDUCED_MOTION_MQ).matches) return;

    const finePointer = window.matchMedia(FINE_POINTER_MQ).matches;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let visible = true;
    const start = performance.now();

    const onPointerMove = (event: PointerEvent) => {
      target.x = (event.clientX / window.innerWidth) * 2 - 1;
      target.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const onPointerLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const tick = (now: number) => {
      if (!finePointer) {
        const t = (now - start) / 1000;
        target.x = Math.sin(t * 0.32) * 0.55;
        target.y = Math.sin(t * 0.21 + 1.2) * 0.4;
      }

      current.x += (target.x - current.x) * EASE;
      current.y += (target.y - current.y) * EASE;

      camera.style.transform = `translate3d(${current.x * -28}px, ${
        current.y * -18
      }px, 0) rotateX(${current.y * TILT_X}deg) rotateY(${
        current.x * -TILT_Y
      }deg)`;
      scene.style.setProperty("--hero-light-x", `${current.x * 22}%`);
      scene.style.setProperty("--hero-light-y", `${current.y * 16}%`);

      frame = visible ? requestAnimationFrame(tick) : 0;
    };

    const resume = () => {
      if (!frame && visible && !document.hidden) {
        frame = requestAnimationFrame(tick);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) resume();
    });
    observer.observe(scene);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        resume();
      }
    };

    if (finePointer) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
    }
    document.addEventListener("visibilitychange", onVisibility);
    resume();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section
      className="tunnel-section tunnel-section-static tunnel-section-alive"
      aria-label="Hero"
    >
      <div className="tunnel-sticky">
        <div className="tunnel-scene" aria-hidden ref={sceneRef}>
          <div className="tunnel-glow" />

          <div className="tunnel-camera" ref={cameraRef}>
            {cubes.map((cube, index) => (
              <TunnelCube key={index} index={index} {...cube} />
            ))}
          </div>

          <div className="tunnel-vignette" />
        </div>

        <div className="tunnel-content">{children}</div>
      </div>
    </section>
  );
}
