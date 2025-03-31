import { addComment } from '@/app/actions'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { getServerTranslation } from '@/lib/getServerTranslation'
import AddCommentForm from '../AddCommentForm'
import { AddCommentProps } from './types'

const AddComment = async ({ feedbackId, userId }: AddCommentProps) => {
  const t = await getServerTranslation('FeedbackBoard')
  return (
    <Card className='flex flex-col gap-10'>
      <CardTitle>{t('addComment')}</CardTitle>
      <CardContent className='mb-2 flex flex-col gap-4'>
        <AddCommentForm
          onSubmit={addComment}
          userId={userId}
          feedbackId={feedbackId}
        />
      </CardContent>
    </Card>
  )
}

export default AddComment
