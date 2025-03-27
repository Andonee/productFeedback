import { logoutHandler } from '@/app/actions/logout'
import LoginButton from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const HeaderCard = ({ menuButton }: { menuButton?: React.ReactNode }) => {
  return (
    <Card className='z-[100] w-full rounded-none bg-gradient-to-bl from-[#E84D70] via-[#A337F6] to-[#28A7ED] md:h-full md:rounded-xl xl:h-[140px]'>
      <CardContent className='flex h-full flex-col justify-end p-0'>
        <div className='relative'>
          <LoginButton>
            <h2 className='text-snowy'>Frontend Mentor</h2>
          </LoginButton>
          <form action={logoutHandler}>
            <Button variant='link'>Sign out</Button>
          </form>
          <p className='text-snowy'>Feedback Board</p>
          {menuButton && (
            <div className='absolute right-2 top-2'>{menuButton}</div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default HeaderCard
