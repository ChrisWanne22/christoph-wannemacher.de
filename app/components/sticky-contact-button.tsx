"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LINKEDIN_URL } from "../lib/content";
import { ExternalLinkIcon } from "./external-link-icon";
import { useLanguage } from "./language-provider";
import styles from "./sticky-contact-button.module.css";

export function StickyContactButton() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setPastHero(true);
    } else {
      const hero = document.getElementById("top");
      if (!hero) {
        setPastHero(true);
      } else {
        const heroObserver = new IntersectionObserver(
          ([entry]) => {
            setPastHero(entry.intersectionRatio < 0.75);
          },
          { threshold: [0, 0.25, 0.5, 0.75, 1] },
        );
        heroObserver.observe(hero);
        return () => heroObserver.disconnect();
      }
    }
  }, [pathname]);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "0px 0px -12% 0px" },
    );

    footerObserver.observe(footer);
    return () => footerObserver.disconnect();
  }, [pathname]);

  const visible = pastHero && !footerVisible;

  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.sticky} ${visible ? styles.isVisible : styles.isHidden}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      {t.nav.contact}
      <ExternalLinkIcon className={styles.externalIcon} />
    </a>
  );
}
