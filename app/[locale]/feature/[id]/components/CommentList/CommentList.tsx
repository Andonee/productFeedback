import { Card, CardContent, CardTitle } from '@/components/ui/card'
import prisma from '@/lib/prisma'
import Comment from '../Comment'
import { CommentListProps } from './types'

const CommentList = async ({ feedbackId }: CommentListProps) => {
  const comments = await prisma.comment.findMany({
    where: { feedbackId: feedbackId },
    include: { author: true },
  })
  return (
    <Card className='flex flex-col gap-10'>
      <CardTitle>{comments.length} Comments</CardTitle>
      <CardContent className='mb-5 flex flex-col gap-10'>
        {comments.map(comment => {
          return (
            <Comment
              key={comment.commentId}
              content={comment.content}
              firstname={comment.author.name}
              lastname={comment.author.lastname}
            />
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CommentList
