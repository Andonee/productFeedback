import * as z from 'zod'

export const ResetSchema = z.object({
  email: z.string().email(),
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
})

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
  name: z.string().min(1),
  lastname: z.string().min(1),
})

export function getLoginFormSchema(t?: (key: string) => string) {
  return z.object({
    email: z.string().email({
      message: t ? t('required') : 'This field is required',
    }),
    password: z.string().min(1, {
      message: t ? t('required') : 'This field is required',
    }),
    code: z.optional(z.string()),
  })
}

export function getRegisterFormSchema(
  t?: (key: string, values?: { [key: string]: string }) => string,
) {
  return z.object({
    email: z.string().email({
      message: t ? t('required') : 'This field is required',
    }),
    password: z.string().min(6, {
      message: t
        ? t('minLength', { min: '6' })
        : 'Minimum length is {min} characters',
    }),
    name: z.string().email({
      message: t ? t('required') : 'This field is required',
    }),
    lastname: z.string().email({
      message: t ? t('required') : 'This field is required',
    }),
  })
}

export type LoginFormValues = z.infer<
  Awaited<ReturnType<typeof getLoginFormSchema>>
>

export type RegisterFormValues = z.infer<
  Awaited<ReturnType<typeof getRegisterFormSchema>>
>
