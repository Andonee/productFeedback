'use client'
import { login } from '@/app/actions/login'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { LoginSchema } from '../../app/schemas/index'
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

  const router = useRouter()

  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with different provider'
      : ''

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')

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
      headerLabel='Welcome back'
      backButtonLabel="Don't have an account?"
      backButtonHref='/auth/register'
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
                    <FormLabel>Two Factor Code</FormLabel>
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
                      <FormLabel>Email</FormLabel>
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
                      <FormLabel>Password</FormLabel>
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
                        <Link href='/auth/reset'>Forgot password</Link>
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
            {showTwoFactor ? 'Confirm' : 'Login'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm
