'use client'

import { UserButton } from '@/components/auth/userButton'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()
  const t = useTranslations('navbar')

  return (
    <nav className='flex w-[600px] items-center justify-between rounded-xl bg-white p-4 shadow-sm'>
      <div className='flex gap-x-2'>
        <Button
          asChild
          variant={pathname === '/server' ? 'default' : 'outline'}
        >
          <Link href='/server'>{t('server')}</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/client' ? 'default' : 'outline'}
        >
          <Link href='/client'>{t('client')}</Link>
        </Button>
        <Button asChild variant={pathname === '/admin' ? 'default' : 'outline'}>
          <Link href='/admin'>{t('admin')}</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/settings' ? 'default' : 'outline'}
        >
          <Link href='/settings'>{t('settings')}</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  )
}
