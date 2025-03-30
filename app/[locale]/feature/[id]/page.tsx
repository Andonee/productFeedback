import Suggestion from '@/app/components/SuggestionList/Suggestion'
import GoBackButton from '@/components/shared/GoBackButton/GoBackButton'
import { Button } from '@/components/ui/button'
import { currentUser } from '@/lib/auth'
import { getServerTranslation } from '@/lib/getServerTranslation'
import prisma from '@/lib/prisma'
import { getLocale } from 'next-intl/server'
import Link from 'next/link'
import AddComment from './components/AddComment/AddComment'
import CommentList from './components/CommentList'

const FeaturePage = async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const feedbackId = (await params).id
  const user = await currentUser()
  const t = await getServerTranslation('FeedbackBoard')
  const locale = await getLocale()

  if (!user || !user.id) return <div>Not logged in</div>

  const feedbackData = await prisma.feedback.findUnique({
    where: {
      feedbackId: feedbackId,
    },
    include: {
      upvotes: true,
    },
  })

  if (!feedbackData) return <div>No data</div>

  const title = feedbackData?.title
  const description = feedbackData?.description

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full justify-between'>
        <GoBackButton />
        <Link href={`${locale}/feature/edit/${feedbackId}`}>
          <Button>{t('editFeedback')}</Button>
        </Link>
      </div>
      <Suggestion
        title={title}
        description={description}
        userId={user.id}
        feedbackId={feedbackId}
        upvotes={feedbackData.upvotes.length}
      />
      <CommentList feedbackId={feedbackId} />
      <AddComment feedbackId={feedbackId} userId={feedbackData.authorId} />
    </div>
  )
}

export default FeaturePage
