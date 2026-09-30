// =============================================================================
// gradients.ts — the two "no hard edges" helpers from the design handoff.
//
// A linear-gradient with only two stops looks like a visible ramp. An *eased*
// gradient (many stops that follow a smooth curve) hides the ramp, so one
// section melts into the next. Both helpers below just build that stop list.
// =============================================================================

// [position %, mix %] pairs — the easing curve from the handoff README.
const BAND_STOPS: Array<[number, number]> = [
  [12, 4],
  [26, 16],
  [38, 34],
  [50, 50],
  [62, 66],
  [74, 84],
  [88, 96],
];

/**
 * Gradient band between two flat sections of colour A (above) and B (below).
 * Uses `color-mix(in oklab, …)` so the middle of the ramp doesn't go muddy.
 */
export function bandGradient(a: string, b: string): string {
  const mid = BAND_STOPS.map(([pos, pct]) => `color-mix(in oklab, ${a}, ${b} ${pct}%) ${pos}%`);
  return `linear-gradient(180deg, ${a} 0%, ${mid.join(', ')}, ${b} 100%)`;
}

// Alpha stops (hex AA) for fading an image into the NEXT section's colour.
const FADE_STOPS: Array<[string, number]> = [
  ['00', 0],
  ['0A', 18],
  ['29', 34],
  ['5C', 50],
  ['99', 64],
  ['D1', 78],
  ['F2', 90],
  ['FF', 100],
];

/** Transparent → solid `hex` (a 6-digit colour like "#14110F"), eased. */
export function fadeGradient(hex: string): string {
  return `linear-gradient(180deg, ${FADE_STOPS.map(([a, p]) => `${hex}${a} ${p}%`).join(', ')})`;
}
