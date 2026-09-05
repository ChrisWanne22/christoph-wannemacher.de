import type { ReactNode } from "react";

type CwElementProps = {
  className?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Kubischer Rahmen — offener Rahmen mit abgerundeten Ecken links */
export function CwCubicFrame({ className = "" }: CwElementProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M 50 10 H 18 C 12 10 10 12 10 18 V 46 C 10 52 12 54 18 54 H 50"
        {...strokeProps}
      />
    </svg>
  );
}

/** Kubische Karte — Rechteck mit abgeschrägter oberer rechter Ecke */
export function CwCubicCard({ className = "" }: CwElementProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M 12 10 H 42 L 52 20 V 48 C 52 54 48 54 44 54 H 16 C 10 54 10 48 10 42 V 18 C 10 12 12 10 16 10 H 12"
        {...strokeProps}
      />
    </svg>
  );
}

/** Linienelement — horizontale Linie mit 45°-Abwinkelung nach unten */
export function CwLineElement({ className = "" }: CwElementProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M 6 12 H 46 L 56 22" {...strokeProps} />
    </svg>
  );
}

/** Vertikaler Abschluss — horizontale Linie mit 45°-Abwinkelung nach oben */
export function CwVerticalCap({ className = "" }: CwElementProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M 6 12 H 46 L 56 2" {...strokeProps} />
    </svg>
  );
}

/** Icon Rahmen — fragmentierter Rahmen mit separater rechter Linie */
export function CwIconFrame({ className = "" }: CwElementProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M 48 10 H 18 C 12 10 10 12 10 18 V 46 C 10 52 12 54 18 54 H 48"
        {...strokeProps}
      />
      <path d="M 54 16 V 48" {...strokeProps} />
    </svg>
  );
}

type CwTileFrameProps = {
  className?: string;
  children: ReactNode;
};
export function CwTileFrame({ className = "", children }: CwTileFrameProps) {
  return (
    <div className={`cw-tile-frame ${className}`}>
      <svg
        className="cw-tile-frame-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M 8 6 H 72 L 88 22 V 88 C 88 94 84 94 78 94 H 16 C 8 94 6 88 6 82 V 16 C 6 8 8 6 14 6 H 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="cw-tile-frame-inner">{children}</div>
    </div>
  );
}

/** Akzent neben Section-Kickern */
export function CwKickerAccent({ className = "" }: CwElementProps) {
  return <CwVerticalCap className={`cw-kicker-accent ${className}`} />;
}
