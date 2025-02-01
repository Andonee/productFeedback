export enum StatusColors {
  'blueMana',
  'creamyPeach',
  'promiscuousPink',
  'ravenNight',
}

export const statusColors = Object.values(StatusColors)
export type StatusColorsType = keyof typeof StatusColors
