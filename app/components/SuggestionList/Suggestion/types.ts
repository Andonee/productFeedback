import { UpvoteType } from '@/app/types/globalTypes'

export type SuggestionType = {
  title: string
  description: string
  userId: number
  feedbackId: number
  upvotes: number
}
