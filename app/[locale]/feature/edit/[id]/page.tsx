import { deleteFeedback, editFeedback, getTags } from '@/app/actions'
import GoBackButton from '@/components/shared/GoBackButton/GoBackButton'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import prisma from '@/lib/prisma'
import { Plus } from 'lucide-react'
import FeedbackForm from '../../components/shared/FeedbackForm/FeedbackForm'

const EditFeedbackPage = async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const feedbackId = (await params).id
  const tags = await getTags()

  const feedbackData = await prisma.feedback.findFirst({
    where: {
      feedbackId: feedbackId,
    },
  })

  if (!feedbackData) return <div>No data</div>

  const title = feedbackData.title
  const description = feedbackData.description
  const categoryId = feedbackData.categoryId.toString()

  return (
    <div className='flex flex-col gap-16'>
      <GoBackButton />
      <Card className='relative flex flex-col gap-10'>
        <div className='absolute top-[-50%] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-bl from-[#E84D70] via-[#A337F6] to-[#28A7ED]'>
          <Plus color='#fff' size={26} />
        </div>
        <CardTitle>{`Editing "${title}"`}</CardTitle>
        <CardContent>
          <FeedbackForm
            type='edit'
            tags={tags}
            title={title}
            description={description}
            tag={categoryId}
            feedbackId={feedbackId}
            onSubmit={editFeedback}
            onRemove={deleteFeedback}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default EditFeedbackPage
