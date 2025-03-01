import { RemoveFeedbackType } from '@/app/types/globalTypes'

export type RemoveButtonProps = {
  feedbackId: string
  onRemove: (values: RemoveFeedbackType) => void
}
