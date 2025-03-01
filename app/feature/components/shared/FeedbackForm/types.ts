import { FeatureFormSchema } from '@/app/feature/create/validation'
import { RemoveFeedbackType, TagList } from '@/app/types/globalTypes'
import { z } from 'zod'

export type FeedbackFormType = CreateFeedbackFormType | EditFeedbackFormType

export type CreateFeedbackFormType = {
  type: 'create'
  tags: TagList | undefined
  onSubmit: (values: z.infer<typeof FeatureFormSchema>) => void
}

export type EditFeedbackFormType = {
  type: 'edit'
  tags: TagList | undefined
  title: string
  description: string
  tag: string
  feedbackId: string
  onSubmit: (
    values: z.infer<typeof FeatureFormSchema> & { feedbackId: string },
  ) => void
  onRemove: (values: RemoveFeedbackType) => void
}
