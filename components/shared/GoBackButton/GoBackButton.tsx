import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const GoBackButton = () => {
  return (
    <Link href={'/'}>
      <Button variant={'link'}>
        <ArrowLeft />
        Go Back
      </Button>
    </Link>
  )
}

export default GoBackButton
