'use client'
import { useMediaQuery } from '@/app/hooks/use-media-query'
import Image from 'next/image'
import { useMemo } from 'react'

const NoSuggestionsIcons = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const size = useMemo(() => {
    return isDesktop
      ? {
          width: 130,
          height: 137,
        }
      : {
          width: 102,
          height: 108,
        }
  }, [isDesktop])

  return (
    <Image
      src='/icons/no-suggestions-icon.svg'
      alt='No suggestions'
      width={size.width}
      height={size.height}
      priority
    />
  )
}
export default NoSuggestionsIcons
