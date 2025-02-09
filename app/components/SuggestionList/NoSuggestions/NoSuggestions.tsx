import { Card, CardContent } from '@/components/ui/card'
import AddFeedbackButton from '../../AddFeedbackButton'
import NoSuggestionsIcons from './NoSuggestionsIcons'

const NoSuggestions = () => {
  return (
    <Card className='flex h-full items-center justify-center'>
      <CardContent className='flex flex-col items-center gap-8'>
        <NoSuggestionsIcons />
        <div className='flex flex-col items-center gap-4'>
          <div className='font-bold'>There is no feedback yet</div>
          <div>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </div>
          <AddFeedbackButton />
        </div>
      </CardContent>
    </Card>
  )
}

export default NoSuggestions
