import { z } from 'zod'

export const FeatureFormSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: 'This field is required.',
    })
    .max(200, {
      message: 'Name must not be longer than 200 characters.',
    }),
  description: z
    .string()
    .min(1, {
      message: 'This field is required.',
    })
    .max(1000, {
      message: 'Name must not be longer than 1000 characters.',
    }),
  category: z.string().min(1, {
    message: 'This field is required.',
  }),
})
