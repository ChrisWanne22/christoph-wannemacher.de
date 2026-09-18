/**
 * Flat 2D cubic brain — side profile (left = forehead, right = back/stem).
 */

export type StrengthId =
  | "vertrauen"
  | "ownership"
  | "individualitaet"
  | "potenzial"
  | "logik";

export type BrainCubeSpec = {
  id: string;
  type: "structure" | "strength";
  x: number;
  y: number;
  size: number;
  strengthId?: StrengthId;
  number?: string;
};

function sq(id: string, x: number, y: number, size: number): BrainCubeSpec {
  return { id, type: "structure", x, y, size };
}

function sk(
  id: string,
  strengthId: StrengthId,
  number: string,
  x: number,
  y: number,
  size: number,
): BrainCubeSpec {
  return { id, type: "strength", strengthId, number, x, y, size };
}

/**
 * Side-view silhouette approximated with overlapping squares.
 *
 *      ■■■■■
 *   ■■■■■■■■■
 *  ■■■■■■■■■■■■
 *  ■■■■■■■■■■■■■
 *   ■■■■■■■■■■■
 *    ■■■■■■■■
 *       ■■■
 *        ■■
 *         ■
 */
const STRUCTURAL: readonly BrainCubeSpec[] = [
  // Frontal lobe (left / front)
  sq("a1", 18, 36, 16),
  sq("a2", 20, 24, 13),
  sq("a3", 14, 48, 12),
  sq("a4", 28, 20, 12),
  sq("a5", 26, 34, 14),
  sq("a6", 24, 50, 13),
  sq("a7", 18, 60, 11),

  // Upper parietal / crown
  sq("b1", 38, 16, 14),
  sq("b2", 50, 14, 13),
  sq("b3", 62, 18, 13),
  sq("b4", 40, 28, 15),
  sq("b5", 54, 26, 14),
  sq("b6", 66, 28, 12),

  // Central mass
  sq("c1", 38, 42, 15),
  sq("c2", 52, 40, 15),
  sq("c3", 66, 40, 14),
  sq("c4", 36, 56, 14),
  sq("c5", 50, 54, 14),
  sq("c6", 64, 52, 13),
  sq("c7", 44, 66, 12),
  sq("c8", 58, 64, 12),

  // Occipital / back (right)
  sq("d1", 76, 24, 12),
  sq("d2", 78, 38, 14),
  sq("d3", 80, 52, 12),
  sq("d4", 72, 60, 11),
  sq("d5", 86, 34, 10),
  sq("d6", 84, 48, 10),

  // Temporal underside + brainstem (down-back)
  sq("e1", 32, 70, 11),
  sq("e2", 70, 72, 10),
  sq("e3", 74, 82, 9),
  sq("e4", 78, 90, 8),
  sq("e5", 82, 96, 7),
];

export const STRENGTH_CUBES: readonly BrainCubeSpec[] = [
  sk("s-vertrauen", "vertrauen", "01", 22, 38, 14),
  sk("s-ownership", "ownership", "02", 72, 34, 13),
  sk("s-individualitaet", "individualitaet", "03", 36, 58, 13),
  sk("s-potenzial", "potenzial", "04", 58, 70, 12),
  sk("s-logik", "logik", "05", 52, 22, 13),
];

export function buildBrainCubes(_mobile = false): BrainCubeSpec[] {
  return [...STRUCTURAL, ...STRENGTH_CUBES];
}
