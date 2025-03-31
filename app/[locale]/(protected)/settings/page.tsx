'use client'

// import { logoutHandler } from '@/app/actions/logout'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useTranslations } from 'next-intl'

const SettingsPage = () => {
  const user = useCurrentUser()
  const t = useTranslations('Authentication')

  const onClick = () => {
    // logoutHandler()
  }

  return (
    <div className='rounded-xl bg-white p-10'>
      <button onClick={onClick}>{t('signOut')}</button>
      {JSON.stringify(user)}
    </div>
  )
}

export default SettingsPage
