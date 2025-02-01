import Tag from '@/components/shared/Tag/Tag'
import { Card, CardContent } from '@/components/ui/card'

const TagsCard = () => {
  return (
    <Card className='h-full w-full'>
      <CardContent className='flex flex-wrap gap-2'>
        <Tag label='All' value='1' interactive active />
        <Tag label='UI' value='2' interactive />
        <Tag label='UX' value='3' interactive />
        <Tag label='Enhancement' value='4' interactive />
        <Tag label='Bug' value='5' interactive />
        <Tag label='Feature' value='6' interactive />
      </CardContent>
    </Card>
  )
}

export default TagsCard
