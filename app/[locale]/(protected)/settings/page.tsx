'use client'

// import { logoutHandler } from '@/app/actions/logout'
import { useCurrentUser } from '@/hooks/useCurrentUser'

const SettingsPage = () => {
  const user = useCurrentUser()

  const onClick = () => {
    // logoutHandler()
  }

  return (
    <div className='rounded-xl bg-white p-10'>
      <button onClick={onClick}>Sign out</button>
      {JSON.stringify(user)}
    </div>
  )
}

export default SettingsPage
