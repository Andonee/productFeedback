import { z } from 'zod'

export const CommentFormSchema = z.object({
  content: z
    .string()
    .min(1, {
      message: 'This field is required.',
    })
    .max(250, {
      message: 'Name must not be longer than 200 characters.',
    }),
})
