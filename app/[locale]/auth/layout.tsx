import React from 'react'

const AuthLayour = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      {children}
    </div>
  )
}

export default AuthLayour
