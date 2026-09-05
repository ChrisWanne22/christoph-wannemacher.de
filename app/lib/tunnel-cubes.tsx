"use client";

export type TunnelCubeData = {
  x: number;
  y: number;
  z: number;
  size: number;
  rotateX: number;
  rotateY: number;
  opacity: number;
};

export type BuildCubicSpaceOptions = {
  mobile: boolean;
  seed?: number;
  target?: number;
  maxDepth?: number;
};

function seededRandom(seed: number) {
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function inCenterVoid(x: number, y: number, voidW: number, voidH: number) {
  return Math.abs(x) < voidW && Math.abs(y) < voidH;
}

/** Organic cubic chamber — irregular depth, spacing and scale */
export function buildCubicSpace({
  mobile,
  seed = 20260902,
  target: targetOverride,
  maxDepth: maxDepthOverride,
}: BuildCubicSpaceOptions): TunnelCubeData[] {
  const rand = seededRandom(seed);
  const cubes: TunnelCubeData[] = [];
  const target = targetOverride ?? (mobile ? 48 : 82);
  const maxDepth = maxDepthOverride ?? (mobile ? 1050 : 1450);
  let z = -35;

  while (z > -maxDepth && cubes.length < target) {
    const depth = Math.abs(z) / maxDepth;
    const step = 62 + rand() * 98 * (1 - depth * 0.25);
    z -= step;

    const spanW = 360 * (0.5 + (1 - depth) * 0.5);
    const spanH = 280 * (0.5 + (1 - depth) * 0.5);
    const voidW = 75 + depth * 55;
    const voidH = 58 + depth * 42;
    const batch = mobile ? 1 + Math.floor(rand() * 2) : 2 + Math.floor(rand() * 3);

    for (let i = 0; i < batch && cubes.length < target; i++) {
      let x = 0;
      let y = 0;
      const placement = Math.floor(rand() * 6);

      if (placement === 0) {
        x = (rand() - 0.5) * spanW * 1.55;
        y = spanH * (0.52 + rand() * 0.28);
      } else if (placement === 1) {
        x = (rand() - 0.5) * spanW * 1.55;
        y = -spanH * (0.52 + rand() * 0.28);
      } else if (placement === 2) {
        x = -spanW * (0.62 + rand() * 0.32);
        y = (rand() - 0.5) * spanH * 1.35;
      } else if (placement === 3) {
        x = spanW * (0.62 + rand() * 0.32);
        y = (rand() - 0.5) * spanH * 1.35;
      } else {
        const angle = rand() * Math.PI * 2;
        const radius = voidW + 28 + rand() * spanW * 0.42;
        x = Math.cos(angle) * radius;
        y = Math.sin(angle) * radius * 0.82;
      }

      if (inCenterVoid(x, y, voidW, voidH)) continue;

      const zOffset = (rand() - 0.5) * step * 0.9;
      const size = (30 + rand() * 34) * (1.05 - depth * 0.58);
      const opacity = 0.28 + (1 - depth) * 0.72;
      const rotateY = 34 + (x / spanW) * 22 + (rand() - 0.5) * 16;
      const rotateX = -18 + (y / spanH) * -14 + (rand() - 0.5) * 12;

      cubes.push({
        x,
        y,
        z: z + zOffset,
        size,
        rotateX,
        rotateY,
        opacity,
      });
    }
  }

  const anchors: TunnelCubeData[] = mobile
    ? [
        {
          x: -175,
          y: 105,
          z: -95,
          size: 46,
          rotateX: -20,
          rotateY: 42,
          opacity: 0.92,
        },
        {
          x: 185,
          y: -88,
          z: -155,
          size: 42,
          rotateX: -24,
          rotateY: 30,
          opacity: 0.88,
        },
      ]
    : [
        {
          x: -215,
          y: 128,
          z: -85,
          size: 54,
          rotateX: -19,
          rotateY: 44,
          opacity: 0.95,
        },
        {
          x: 220,
          y: -108,
          z: -145,
          size: 50,
          rotateX: -23,
          rotateY: 28,
          opacity: 0.9,
        },
        {
          x: -165,
          y: -118,
          z: -235,
          size: 46,
          rotateX: -26,
          rotateY: 52,
          opacity: 0.82,
        },
        {
          x: 175,
          y: 132,
          z: -310,
          size: 42,
          rotateX: -21,
          rotateY: 36,
          opacity: 0.74,
        },
        {
          x: -130,
          y: 72,
          z: -420,
          size: 38,
          rotateX: -24,
          rotateY: 40,
          opacity: 0.62,
        },
      ];

  cubes.push(...anchors);

  return cubes;
}

export function TunnelCube({
  x,
  y,
  z,
  size,
  rotateX,
  rotateY,
  opacity,
}: TunnelCubeData) {
  return (
    <div
      className="tunnel-cube-slot"
      style={{
        transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px)`,
        opacity,
        ["--cube-size" as string]: `${size}px`,
        ["--cube-rotate-x" as string]: `${rotateX}deg`,
        ["--cube-rotate-y" as string]: `${rotateY}deg`,
      }}
      aria-hidden
    >
      <div className="cube-unit tunnel-cube-unit">
        <div className="cube-unit-body">
          <div className="cube-unit-face cube-unit-top" />
          <div className="cube-unit-face cube-unit-left" />
          <div className="cube-unit-face cube-unit-front" />
        </div>
        <div className="cube-unit-shadow" />
      </div>
    </div>
  );
}

export function tunnelScrollProgress(section: HTMLElement) {
  const scrollable = section.offsetHeight - window.innerHeight;
  if (scrollable <= 0) return 0;
  const rect = section.getBoundingClientRect();
  return Math.max(0, Math.min(1, -rect.top / scrollable));
}

export function stepSegmentOpacity(
  progress: number,
  index: number,
  total: number,
  fadeRatio = 0.22,
) {
  const segment = 1 / total;
  const start = index * segment;
  const end = (index + 1) * segment;
  const fade = segment * fadeRatio;

  if (progress < start - fade || progress > end + fade) return 0;
  if (progress >= start && progress <= end) return 1;
  if (progress < start) return Math.max(0, (progress - (start - fade)) / fade);
  return Math.max(0, 1 - (progress - end) / fade);
}

/** Sequential fade: outgoing step reaches 0 before incoming step begins. */
export function sequentialStepOpacity(
  progress: number,
  index: number,
  total: number,
  transitionRatio = 0.16,
): number {
  if (total <= 0) return 0;

  const segment = 1 / total;
  const halfTransition = (segment * transitionRatio) / 2;
  const segmentStart = index * segment;
  const segmentEnd = (index + 1) * segment;
  const plateauStart = index === 0 ? 0 : segmentStart + halfTransition;
  const plateauEnd = index === total - 1 ? 1 : segmentEnd - halfTransition;

  if (progress >= plateauStart && progress <= plateauEnd) return 1;

  if (index > 0 && progress >= segmentStart && progress < plateauStart) {
    return (progress - segmentStart) / halfTransition;
  }

  if (index < total - 1 && progress > plateauEnd && progress <= segmentEnd) {
    return 1 - (progress - plateauEnd) / halfTransition;
  }

  return 0;
}
