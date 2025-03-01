import Tag from '@/components/shared/Tag/Tag'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle } from 'lucide-react'
import { SuggestionType } from './types'
import UpvoteButton from './UpvoteButton'

const Suggestion = ({
  title,
  description,
  userId,
  feedbackId,
}: SuggestionType) => {
  return (
    <Card>
      <CardContent className='flex items-center justify-between'>
        <div className='flex items-start gap-4 rounded-md p-4'>
          <div>
            <UpvoteButton userId={userId} feedbackId={feedbackId} />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='font-bold'>{title}</div>

            <div>{description}</div>
            <div>
              <Tag label='UI' value='2' interactive={false} />
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-2'>
            <span className='[&>svg]:fill-oceanNight [&>svg]:text-oceanNight'>
              <MessageCircle />
            </span>
            <span className='font-bold'>6</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Suggestion
