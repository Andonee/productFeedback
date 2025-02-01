import RoadmapItem from '../RoadmapItem/RoadmapItem'
import { RoadmapItemType } from '../RoadmapItem/types'

const items: RoadmapItemType[] = [
  {
    status: 'planned',
    amount: 3,
  },
  {
    status: 'in-progress',
    amount: 2,
  },
  {
    status: 'live',
    amount: 5,
  },
]

const RoadmapItems = () => {
  return (
    <div className='w-full'>
      {items.map(item => (
        <RoadmapItem status={item.status} amount={item.amount} />
      ))}
    </div>
  )
}

export default RoadmapItems
