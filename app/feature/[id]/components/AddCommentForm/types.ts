import { CreateCommentType } from '@/app/types/globalTypes'

export type AddCommentFormProps = {
  onSubmit: (values: CreateCommentType) => void
  userId: number
  feedbackId: number
}
