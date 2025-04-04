'use client'
import { signIn } from 'next-auth/react'
import { useLocale } from 'next-intl'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '../ui/button'

const Social = () => {
  const locale = useLocale()
  const onClick = (provider: 'google' | 'github') => {
    // signIn(provider, {
    //   callbackUrl: DEFAULT_LOGIN_REDIRECT,
    // })

    signIn(provider)
    signIn(provider).catch(() => {
      return (window.location.href = `/${locale}/auth/login?error=OAuthAccountNotLinked`)
    })
  }
  return (
    <div className='flex w-full items-center gap-x-2'>
      <Button
        size='lg'
        className='w-full'
        variant='outline'
        onClick={() => onClick('google')}
      >
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button
        size='lg'
        className='w-full'
        variant='outline'
        onClick={() => onClick('github')}
      >
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  )
}

export default Social
