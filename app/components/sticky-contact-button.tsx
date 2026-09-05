"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";
import styles from "./sticky-contact-button.module.css";

export function StickyContactButton() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setVisible(true);
      return;
    }

    const hero = document.getElementById("top");
    if (!hero) {
      setVisible(true);
      return;
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio < 0.75);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    heroObserver.observe(hero);
    return () => heroObserver.disconnect();
  }, [pathname]);

  return (
    <a
      href="/#contact"
      className={`${styles.sticky} ${visible ? styles.isVisible : styles.isHidden}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      {t.nav.contact}
      <span className={styles.arrow} aria-hidden>
        →
      </span>
    </a>
  );
}
