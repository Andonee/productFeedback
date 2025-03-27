export enum StatusColors {
  'blueMana',
  'creamyPeach',
  'promiscuousPink',
  'ravenNight',
}

export const statusColors = Object.values(StatusColors)
export type StatusColorsType = keyof typeof StatusColors

export enum CategoryType {
  Feature = '1',
  UI = '2',
  UX = '3',
  Enhancement = '4',
  Bug = '5',
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
