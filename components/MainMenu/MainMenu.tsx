'use client'

import HeaderCard from '@/app/components/HeaderCard/HeaderCard'
import { useMediaQuery } from '@/app/hooks/use-media-query'
import { MenuIcon, XIcon } from 'lucide-react'
import React, { useState } from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'

const MainMenu = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const onMenuCLickHandler = (isOpen: boolean) => setIsOpen(isOpen)

  return isDesktop ? (
    <></>
  ) : (
    <Drawer direction='right' onOpenChange={onMenuCLickHandler}>
      <DrawerHeader className='z-100 p-0'>
        <HeaderCard
          menuButton={
            <DrawerTrigger>
              {isOpen ? <XIcon color='white' /> : <MenuIcon color='white' />}
            </DrawerTrigger>
          }
        />
      </DrawerHeader>
      <DrawerContent
        className='bottom-0 top-auto h-[calc(100%-87px)] bg-ghostWhite'
        aria-describedby={undefined}
      >
        <DrawerTitle hidden aria-description='menu'></DrawerTitle>
        {children}
      </DrawerContent>
    </Drawer>
  )
}

export default MainMenu
