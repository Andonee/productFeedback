import { Button } from '@/components/ui/button'
import { getServerTranslation } from '@/lib/getServerTranslation'
import { ArrowLeft } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import Link from 'next/link'

const GoBackButton = async () => {
  const locale = await getLocale() // Retrieve the locale separately
  const t = await getServerTranslation('utils') // Get the translator function
  return (
    <Link href={`/${locale}`}>
      <Button variant={'link'}>
        <ArrowLeft />
        {t('goBack')}
      </Button>
    </Link>
  )
}

export default GoBackButton
