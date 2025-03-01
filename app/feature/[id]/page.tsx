import Suggestion from '@/app/components/SuggestionList/Suggestion'
import GoBackButton from '@/components/shared/GoBackButton/GoBackButton'
import { Button } from '@/components/ui/button'
import prisma from '@/lib/prisma'
import Link from 'next/link'

const FeaturePage = async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const feedbackId = (await params).id

  console.log('feedbackId', feedbackId)

  const feedbackData = await prisma.feedback.findUnique({
    where: {
      feedbackId: parseInt(feedbackId),
    },
  })

  console.log('feedbackData', feedbackData)

  if (!feedbackData) return <div>No data</div>

  const title = feedbackData?.title
  const description = feedbackData?.description

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full justify-between'>
        <GoBackButton />
        <Link href={`/feature/edit/${feedbackId}`}>
          <Button>Edit Feedback</Button>
        </Link>
      </div>
      <Suggestion
        title={title}
        description={description}
        userId={1}
        feedbackId={1}
      />
    </div>
  )
}

export default FeaturePage
