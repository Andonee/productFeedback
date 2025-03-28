import { currentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import NoSuggestions from './NoSuggestions'
import Suggestion from './Suggestion'

const SuggestionList = async () => {
  const user = await currentUser()

  if (!user || !user.id) return

  const suggestions = await prisma.feedback.findMany({
    include: { upvotes: true },
  })

  const userId = user.id

  return (
    <div className='flex h-full flex-col gap-4'>
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, idx) => (
          <Link
            href={`/feature/${suggestion.feedbackId}`}
            key={`${suggestion.title}_${idx}`}
          >
            {/* <Suggestion
              {...suggestion}
              upvotes={suggestion.upvotes.length}
              userId={user.id}
            /> */}
            <Suggestion
              title={suggestion.title}
              description={suggestion.description}
              userId={userId}
              feedbackId={suggestion.feedbackId}
              upvotes={suggestion.upvotes.length}
            />
          </Link>
        ))
      ) : (
        <NoSuggestions />
      )}
    </div>
  )
}

export default SuggestionList
