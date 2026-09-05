"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  buildCubicSpace,
  sequentialStepOpacity,
  TunnelCube,
} from "../lib/tunnel-cubes";
import { useLanguage } from "./language-provider";
import styles from "./process-journey.module.css";

type ProcessStep = {
  title: string;
  text: string;
  keywords: readonly string[];
};

const STEP_TRANSITION_MS = 1400;
const KEYWORD_TRANSITION_RATIO = 0.42;

function stepTargetProgress(
  index: number,
  total: number,
  transitionRatio = KEYWORD_TRANSITION_RATIO,
) {
  const segment = 1 / total;
  const halfTransition = (segment * transitionRatio) / 2;
  const segmentStart = index * segment;
  const segmentEnd = (index + 1) * segment;
  const plateauStart = index === 0 ? 0 : segmentStart + halfTransition;
  const plateauEnd = index === total - 1 ? 1 : segmentEnd - halfTransition;
  return (plateauStart + plateauEnd) / 2;
}

function easeProgress(t: number) {
  return 1 - (1 - t) ** 1.35;
}

const MOBILE_MQ = "(max-width: 1023px)";

export function ProcessJourney({
  heading,
  intro,
  steps,
}: {
  heading: string;
  intro: string;
  steps: readonly ProcessStep[];
}) {
  const { t } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [progress, setProgress] = useState(() =>
    stepTargetProgress(0, steps.length),
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const progressRef = useRef(stepTargetProgress(0, steps.length));
  const animFrameRef = useRef<number | null>(null);
  const activeIndexRef = useRef(0);
  const animatingRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const ignoreScrollRef = useRef(false);

  useEffect(() => {
    setMounted(true);
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
    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const syncTrack = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;
    ignoreScrollRef.current = true;
    slide.scrollIntoView({ behavior, inline: "center", block: "nearest" });
    window.setTimeout(() => {
      ignoreScrollRef.current = false;
    }, behavior === "smooth" ? 450 : 50);
  }, []);

  const goToStep = useCallback(
    (index: number, opts?: { fromScroll?: boolean }) => {
      const clamped = Math.max(0, Math.min(steps.length - 1, index));
      if (clamped === activeIndexRef.current && Math.abs(progressRef.current - stepTargetProgress(clamped, steps.length)) < 0.001) {
        return;
      }

      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }

      const target = stepTargetProgress(clamped, steps.length);
      const start = progressRef.current;
      const duration =
        reducedMotion || opts?.fromScroll
          ? 0
          : isMobile
            ? 500
            : STEP_TRANSITION_MS;

      activeIndexRef.current = clamped;
      setActiveStepIndex(clamped);

      if (!opts?.fromScroll && isMobile) {
        syncTrack(clamped);
      }

      if (duration === 0 || Math.abs(target - start) < 0.001) {
        progressRef.current = target;
        animatingRef.current = false;
        setProgress(target);
        setIsAnimating(false);
        return;
      }

      animatingRef.current = true;
      setIsAnimating(true);
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = Math.min(1, (now - startTime) / duration);
        const next = start + (target - start) * easeProgress(elapsed);
        progressRef.current = next;
        setProgress(next);

        if (elapsed < 1) {
          animFrameRef.current = requestAnimationFrame(tick);
        } else {
          progressRef.current = target;
          animatingRef.current = false;
          setProgress(target);
          setIsAnimating(false);
          animFrameRef.current = null;
        }
      };

      animFrameRef.current = requestAnimationFrame(tick);
    },
    [isMobile, reducedMotion, steps.length, syncTrack],
  );

  const advanceStep = useCallback(() => {
    if (activeIndexRef.current >= steps.length - 1) return;
    goToStep(activeIndexRef.current + 1);
  }, [goToStep, steps.length]);

  const retreatStep = useCallback(() => {
    if (activeIndexRef.current <= 0) return;
    goToStep(activeIndexRef.current - 1);
  }, [goToStep]);

  useEffect(() => {
    if (!mounted || !isMobile) return;
    syncTrack(activeIndexRef.current, "auto");
  }, [mounted, isMobile, syncTrack]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !isMobile) return;

    const onScroll = () => {
      if (ignoreScrollRef.current) return;
      const slides = [...track.children] as HTMLElement[];
      if (slides.length === 0) return;

      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let closestDist = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(slideCenter - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = index;
        }
      });

      if (closest !== activeIndexRef.current) {
        goToStep(closest, { fromScroll: true });
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [goToStep, isMobile, mounted]);

  const cubes = useMemo(
    () =>
      mounted
        ? buildCubicSpace({
            mobile: isMobile,
            seed: 20260903,
            target: isMobile ? 68 : 118,
            maxDepth: isMobile ? 2400 : 3400,
          })
        : [],
    [isMobile, mounted],
  );

  const staticScene = reducedMotion;
  const flatMobileScene = isMobile && !reducedMotion;
  const eased = 1 - (1 - progress) ** 1.35;
  const travelZ =
    staticScene || flatMobileScene ? 0 : eased * (isMobile ? 2100 : 3000);
  const headerOpacity = staticScene ? 1 : Math.max(0, 1 - progress * 5);
  const canAdvance = !isAnimating && activeStepIndex < steps.length - 1;
  const canRetreat = !isAnimating && activeStepIndex > 0;

  return (
    <section
      id="approach"
      className={`${styles.processTunnel} scroll-mt-[4.25rem] sm:scroll-mt-24`}
      aria-labelledby="approach-heading"
    >
      <div className={styles.processViewport}>
        <header
          className={styles.processHeader}
          style={
            staticScene
              ? undefined
              : {
                  opacity: headerOpacity,
                  transform: `translateY(${progress * -40}px)`,
                }
          }
        >
          <div className={styles.processHeaderInner}>
            <h2 id="approach-heading" className={styles.processHeading}>
              {heading}
            </h2>
            <p className={styles.processIntro}>{intro}</p>
          </div>
        </header>

        <div
          className={`tunnel-scene ${styles.processScene}`}
          style={
            staticScene
              ? undefined
              : flatMobileScene
                ? { transform: `translateY(${progress * -18}px)` }
                : { transform: `translateY(${progress * -36}px)` }
          }
          aria-hidden
        >
          <div className="tunnel-glow" />
          <div
            className="tunnel-camera"
            style={
              staticScene
                ? undefined
                : flatMobileScene
                  ? {
                      transform: `translateY(${progress * -12}px) scale(${1 + eased * 0.03})`,
                    }
                  : {
                      transform: `translateZ(${travelZ}px) translateY(${progress * -22}px) scale(${1 + eased * 0.06})`,
                    }
            }
          >
            {cubes.map((cube, index) => (
              <TunnelCube key={index} {...cube} />
            ))}
          </div>
          <div className="tunnel-vignette" />
        </div>

        {/* Mobile: native horizontal swipe track */}
        <div
          ref={trackRef}
          className={styles.swipeTrack}
          aria-label={t.approach.stepNavLabel}
        >
          {steps.map((step, index) => (
            <div
              key={`slide-${step.title}`}
              className={styles.swipeSlide}
              data-active={activeStepIndex === index ? "true" : "false"}
            >
              <div className={styles.swipeKeywords}>
                {step.keywords.map((word) => (
                  <span key={word} className={styles.keywordLine}>
                    {word}
                  </span>
                ))}
                <span className={styles.keywordSubtitle}>{step.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: arrows + stacked keyword fade */}
        <div className={styles.keywordStage}>
          <button
            type="button"
            className={styles.sideNavButton}
            onClick={retreatStep}
            disabled={!canRetreat}
            aria-label={t.approach.prevStep}
          >
            <span className={styles.sideNavIcon} aria-hidden>
              ←
            </span>
          </button>

          <button
            type="button"
            className={`${styles.clickZone} ${canAdvance ? styles.clickZoneActive : ""}`}
            onClick={advanceStep}
            disabled={!canAdvance}
            aria-label={t.approach.nextStep}
          >
            <div className={styles.keywordLayer} aria-live="polite">
              {steps.map((step, index) => {
                const opacity = sequentialStepOpacity(
                  progress,
                  index,
                  steps.length,
                  KEYWORD_TRANSITION_RATIO,
                );

                return (
                  <div
                    key={`kw-${step.title}`}
                    className={styles.keywordPanel}
                    data-active={opacity > 0.02 ? "true" : "false"}
                    style={{
                      opacity,
                      transform: `translateY(${(1 - opacity) * 16}px) scale(${0.96 + opacity * 0.04})`,
                    }}
                    aria-hidden={opacity < 0.02}
                  >
                    {step.keywords.map((word) => (
                      <span key={word} className={styles.keywordLine}>
                        {word}
                      </span>
                    ))}
                    <span className={styles.keywordSubtitle}>{step.text}</span>
                  </div>
                );
              })}
            </div>
          </button>

          <button
            type="button"
            className={styles.sideNavButton}
            onClick={advanceStep}
            disabled={!canAdvance}
            aria-label={t.approach.nextStep}
          >
            <span className={styles.sideNavIcon} aria-hidden>
              →
            </span>
          </button>
        </div>

        <p className={styles.swipeHint} aria-hidden>
          {t.approach.swipeHint}
        </p>

        <nav className={styles.stepNav} aria-label={t.approach.stepNavLabel}>
          <ol className={styles.stepNavList}>
            {steps.map((step, index) => {
              const isCurrent = activeStepIndex === index;

              return (
                <li key={`nav-${step.title}`}>
                  <button
                    type="button"
                    className={`${styles.stepNavButton} ${isCurrent ? styles.isActive : ""}`}
                    onClick={() => goToStep(index)}
                    aria-current={isCurrent ? "step" : undefined}
                    aria-label={`${String(index + 1).padStart(2, "0")} ${step.title}`}
                  >
                    <span className={styles.stepNavNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.stepNavTitle}>{step.title}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
