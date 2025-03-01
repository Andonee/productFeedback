import { addComment } from '@/app/actions'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import AddCommentForm from '../AddCommentForm'
import { AddCommentProps } from './types'

const AddComment = ({ feedbackId, userId }: AddCommentProps) => {
  return (
    <Card className='flex flex-col gap-10'>
      <CardTitle>Add Comment</CardTitle>
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
