"use client";

type SignatureVariant = "hero" | "positioning" | "contact" | "footer";

export function SignatureVisual({
  variant = "hero",
  className = "",
}: {
  variant?: SignatureVariant;
  className?: string;
}) {
  if (variant === "hero") {
    return (
      <div
        className={`group/kv kv cursor-default ${className}`}
        tabIndex={0}
        aria-hidden
      >
        <div className="kv-aura" />
        <div className="kv-circle" />
        <div className="kv-line" />
        <div className="kv-dot dot-pulse" />
      </div>
    );
  }

  if (variant === "positioning") {
    return (
      <div
        className={`group/kv kv-positioning relative ${className}`}
        tabIndex={0}
        aria-hidden
      >
        <div className="kv-pos-aura" />
        <div className="kv-pos-circle" />
        <div className="kv-pos-line" />
        <div className="kv-pos-dot" />
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className={`kv-contact relative ${className}`} aria-hidden>
        <div className="kv-contact-aura" />
        <div className="kv-contact-circle" />
        <div className="kv-contact-line" />
        <div className="kv-contact-dot dot-converge" />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-2.5 ${className}`} aria-hidden>
      <div className="h-8 w-px bg-line/45" />
      <div className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
    </div>
  );
}

export type CapMotif = "focus" | "partial" | "pair" | "concentric" | "line";

/** Circle / Line / Dot for capability & process tiles */
export function CapabilityVisual({
  motif = "line",
  className = "",
}: {
  motif?: CapMotif;
  className?: string;
}) {
  const showSecond =
    motif === "pair" || motif === "concentric";

  return (
    <div className={`cap-v cap-v-${motif} ${className}`} aria-hidden>
      <div className="cap-v-circle" />
      {showSecond ? <div className="cap-v-circle-b" /> : null}
      <div className="cap-v-line" />
      <div className="cap-v-dot" />
    </div>
  );
}

type WorkVisualKind = "alpha" | "beta" | "gamma";

export function WorkVisual({
  kind,
  className = "",
}: {
  kind: WorkVisualKind;
  className?: string;
}) {
  if (kind === "alpha") {
    return (
      <div className={`work-v work-v-alpha ${className}`} aria-hidden>
        <div className="el work-v-circle c1" />
        <div className="el work-v-line l1" />
        <div className="el work-v-dot d1" />
      </div>
    );
  }

  if (kind === "beta") {
    return (
      <div className={`work-v work-v-beta ${className}`} aria-hidden>
        <div className="el work-v-circle c1" />
        <div className="el work-v-circle c2" />
        <div className="el work-v-line l1" />
        <div className="el work-v-dot d1" />
        <div className="el work-v-dot d2" />
      </div>
    );
  }

  return (
    <div className={`work-v work-v-gamma ${className}`} aria-hidden>
      <div className="el work-v-circle c1" />
      <div className="el work-v-circle c2" />
      <div className="el work-v-circle c3" />
      <div className="el work-v-dot d1" />
    </div>
  );
}
