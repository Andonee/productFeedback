'use server'

import { signOut } from '@/auth'

export const logoutHandler = async () => {
  // here you can to some server stuff
  await signOut()
}
