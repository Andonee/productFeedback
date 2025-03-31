'use client'

import { useCurrentUser } from '@/hooks/useCurrentUser'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { useTranslations } from 'next-intl'
import { FaUser } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import LogoutButton from './logout-button'

export const UserButton = () => {
  const user = useCurrentUser()
  const t = useTranslations('Authentication')
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ''} />
          <AvatarFallback className='bg-sky-500'>
            <FaUser className='text-white' />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <LogoutButton>
          <DropdownMenuItem>{t('signOut')}</DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
  // )
}
