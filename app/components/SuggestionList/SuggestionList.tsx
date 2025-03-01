import prisma from '@/lib/prisma'
import Link from 'next/link'
import NoSuggestions from './NoSuggestions'
import Suggestion from './Suggestion'

const SuggestionList = async () => {
  const suggestions = await prisma.feedback.findMany()
  return (
    <div className='flex h-full flex-col gap-4'>
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, idx) => (
          <Link
            href={`/feature/${suggestion.feedbackId}`}
            key={`${suggestion.title}_${idx}`}
          >
            <Suggestion {...suggestion} userId={1} />
          </Link>
        ))
      ) : (
        <NoSuggestions />
      )}
    </div>
  )
}

export default SuggestionList
