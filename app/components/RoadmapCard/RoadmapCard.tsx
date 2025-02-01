import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import RoadmapItems from './RoadmapItems'

const RoadmapCard = () => {
  return (
    <Card className='w-full'>
      <CardContent className='flex flex-wrap gap-2'>
        <div className='flex w-full items-center justify-between'>
          <span className='font-bold'>Roadmap</span>
          <span>
            <Button variant='link'>View</Button>
          </span>
        </div>
        <RoadmapItems />
      </CardContent>
    </Card>
  )
}

export default RoadmapCard
