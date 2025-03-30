import { Button } from '@/components/ui/button'
import { colors } from '@/components/ui/colors'
import { getServerTranslation } from '@/lib/getServerTranslation'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

const AddFeedbackButton = async () => {
  const t = await getServerTranslation('FeedbackBoard')

  return (
    <Link href={`/feature/create`}>
      <Button className='bg-promiscuousPink text-cottonBall hover:bg-promiscuousPink/90'>
        <PlusIcon color={colors.cottonBall} /> {t('addFeedback')}
      </Button>
    </Link>
  )
}

export default AddFeedbackButton
