import { Card, CardContent } from '@/components/ui/card'
import { getServerTranslation } from '@/lib/getServerTranslation'
import AddFeedbackButton from '../../AddFeedbackButton'
import NoSuggestionsIcons from './NoSuggestionsIcons'

const NoSuggestions = async () => {
  const t = await getServerTranslation('FeedbackBoard')
  return (
    <Card className='flex h-full items-center justify-center'>
      <CardContent className='flex flex-col items-center gap-8'>
        <NoSuggestionsIcons />
        <div className='flex flex-col items-center gap-4'>
          <div className='font-bold'>{t('noFeedback')}</div>
          <div>{t('noFeedbackMessage')}</div>
          <AddFeedbackButton />
        </div>
      </CardContent>
    </Card>
  )
}

export default NoSuggestions
