import { EditUpvoteType } from '@/app/types/globalTypes'

export type UpvoteButtonProps = {
  userId: number
  feedbackId: number
  onUpvoteClick: (values: EditUpvoteType) => void
  upvoteAmount: number
}
