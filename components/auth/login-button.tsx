'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useLocale } from 'use-intl/react'

interface LoginButtonProps {
  children: React.ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

const LoginButton = ({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) => {
  const router = useRouter()
  const locale = useLocale()

  const onClick = () => {
    router.push(`${locale}/auth/login`)
  }

  if (mode === 'modal') {
    return <span>Implement modal</span>
  }

  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  )
}

export default LoginButton
