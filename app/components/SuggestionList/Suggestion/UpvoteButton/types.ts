import { EditUpvoteType } from '@/app/types/globalTypes'

export type UpvoteButtonProps = {
  userId: string
  feedbackId: string
  onUpvoteClick: (values: EditUpvoteType) => void
  upvoteAmount: number
}
