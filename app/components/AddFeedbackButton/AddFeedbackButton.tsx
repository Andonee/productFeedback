import { Button } from '@/components/ui/button'
import { colors } from '@/components/ui/colors'
import { PlusIcon } from 'lucide-react'

const AddFeedbackButton = () => {
  return (
    <Button className='bg-promiscuousPink text-cottonBall hover:bg-promiscuousPink/90'>
      <PlusIcon color={colors.cottonBall} /> Add Feedback
    </Button>
  )
}

export default AddFeedbackButton
