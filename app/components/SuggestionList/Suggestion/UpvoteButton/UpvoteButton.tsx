'use client'

import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { MouseEvent } from 'react'
import { UpvoteButtonProps } from './types'

const UpvoteButton = ({ userId, feedbackId }: UpvoteButtonProps) => {
  const onUpvoteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Upvoting', userId, feedbackId)
  }
  return (
    <Button variant='cotton' size='icon' onClick={onUpvoteClick}>
      <div className='flex flex-col items-center justify-center px-4 py-6 [&>svg]:text-bluetiful'>
        <ChevronUp />
        <span className='font-bold'>6</span>
      </div>
    </Button>
  )
}

export default UpvoteButton
