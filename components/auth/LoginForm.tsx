'use client'
import { login } from '@/app/actions/login'
import { getLoginFormSchema } from '@/app/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { LoginFormValues } from '../../app/schemas/index'
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

const LoginForm = () => {
  const [isPending, startTransition] = useTransition()
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const locale = useLocale()

  const t = useTranslations('Authentication')
  const validationMessages = useTranslations('Validation')

  const router = useRouter()

  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with different provider'
      : ''

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(getLoginFormSchema(validationMessages)),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: LoginFormValues) => {
    setError('')
    setSuccess('')

    console.log('values', values)

    startTransition(() => {
      login(values)
        .then(data => {
          if (data?.error) {
            form.reset()
            setError(data.error)
          }

          if (data.success) {
            form.reset()
            setSuccess(data.success)
          }

          if (data.twoFactor) {
            setShowTwoFactor(true)
          }

          if (data.success === '') {
            router.push('/settings')
          }
        })
        .catch(() => setError('Something went wrong!'))
    })
  }
  return (
    <CardWrapper
      headerLabel={t('welcomeBack')}
      backButtonLabel={t('noAccount')}
      backButtonHref={`/${locale}/auth/register`}
      showSocial
    >
      <Form {...form}>
        <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            {showTwoFactor && (
              <FormField
                control={form.control}
                name='code'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('twoFactorCode')}</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('email')}</FormLabel>
                      <FormControl>
                        <Input {...field} type='email' disabled={isPending} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('password')}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type='password'
                          disabled={isPending}
                        />
                      </FormControl>
                      <Button
                        size='sm'
                        variant='link'
                        asChild
                        className='px-0 font-normal'
                      >
                        <Link href={`/${locale}</Button>/auth/reset`}>
                          {t('forgotPassword')}
                        </Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
          <FormSuccess message={success} />
          <FormError message={error || urlError} />
          <Button type='submit' className='w-full' disabled={isPending}>
            {showTwoFactor ? `${t('confirm')}` : `${t('login')}`}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm
