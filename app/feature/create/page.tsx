import { addFeedback, getTags } from '@/app/actions'
import GoBackButton from '@/components/shared/GoBackButton/GoBackButton'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import CreateFeedbackForm from '../components/shared/FeedbackForm/FeedbackForm'

const CreatePage = async () => {
  const tags = await getTags()

  return (
    <div className='flex flex-col gap-16'>
      <GoBackButton />
      <Card className='relative flex flex-col gap-10'>
        <div className='absolute top-[-50%] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-bl from-[#E84D70] via-[#A337F6] to-[#28A7ED]'>
          <Plus color='#fff' size={26} />
        </div>
        <CardTitle>Create New Feedback</CardTitle>
        <CardContent>
          <CreateFeedbackForm
            tags={tags}
            onSubmit={addFeedback}
            type='create'
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default CreatePage
