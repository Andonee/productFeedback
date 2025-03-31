'use client'
import { reset } from '@/app/actions/reset'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ResetSchema } from '../../app/schemas/index'
import FormError from '../shared/FormError/FormError'
import FormSuccess from '../shared/FormSuccess/FormError'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import CardWrapper from './CardWrapper'
import { useLocale, useTranslations } from 'next-intl'

const ResetForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const locale = useLocale()

  const t = useTranslations('Authentication')

  const router = useRouter()

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      reset(values).then(data => {
        setError(data.error)

        setSuccess(data.success)

        if (data.success === '') {
          router.push(`/${locale}/settings`)
        }
      })
    })
  }
  return (
    <CardWrapper
      headerLabel={t('forgotPassword')}
      backButtonLabel={t('alreadbackToLoginyHaveAccount')}
      backButtonHref={`${locale}/auth/login`}
    >
      <Form {...form}>
        <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('emailAddress')}</FormLabel>
                  <FormControl>
                    <Input {...field} type='email' disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button type='submit' className='w-full' disabled={isPending}>
            {t('sendResetEmail')}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default ResetForm
