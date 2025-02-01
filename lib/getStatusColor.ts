import { StatusColorsType } from '@/app/types/enums'
import { RoadmapStatusType } from '@/app/types/globalTypes'

export const getStatusColor = (status: RoadmapStatusType): StatusColorsType => {
  switch (status) {
    case 'planned':
      return 'creamyPeach'
    case 'in-progress':
      return 'promiscuousPink'
    case 'live':
      return 'blueMana'
    default:
      return 'ravenNight'
  }
}
