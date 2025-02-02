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
      {items.map((item, idx) => (
        <RoadmapItem
          status={item.status}
          amount={item.amount}
          key={`${idx}_${item.status}`}
        />
      ))}
    </div>
  )
}

export default RoadmapItems
