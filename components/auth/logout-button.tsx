'use client'
import { logoutHandler } from '@/app/actions/logout'
import React from 'react'

interface LogoutButtonProps {
  children?: React.ReactNode
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
     logoutHandler()
  }
  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  )
}

export default LogoutButton
