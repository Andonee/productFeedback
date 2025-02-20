import { Button } from '@/components/ui/button'
import { colors } from '@/components/ui/colors'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

const AddFeedbackButton = () => {
  return (
    <Link href={'/feature/create'}>
      <Button className='bg-promiscuousPink text-cottonBall hover:bg-promiscuousPink/90'>
        <PlusIcon color={colors.cottonBall} /> Add Feedback
      </Button>
    </Link>
  )
}

export default AddFeedbackButton
