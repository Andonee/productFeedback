import { getStatusColor } from '@/lib/getStatusColor'
import { RoadmapItemType } from './types'

const RoadmapItem = ({ status, amount }: RoadmapItemType) => {
  const circleColor = `bg-${getStatusColor(status)}`
  return (
    <div className='flex w-full items-center justify-between'>
      <span>
        <div
          className={`inline-block h-[8px] w-[8px] rounded-full ${circleColor} `}
        />
        <span className='ml-2'>{status}</span>
      </span>
      <span className='font-bold'>{amount}</span>
    </div>
  )
}

export default RoadmapItem
