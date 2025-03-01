'use client'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { UpvoteButtonProps } from './types'

const UpvoteButton = ({
  userId,
  feedbackId,
  onUpvoteClick,
  upvoteAmount,
}: UpvoteButtonProps) => {
  const onUpvoteClickHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault()
    await onUpvoteClick({
      feedbackId: feedbackId,
      userId: userId,
    })
  }

  return (
    <Button variant='cotton' size='icon' onClick={onUpvoteClickHandler}>
      <div className='flex flex-col items-center justify-center px-4 py-6 [&>svg]:text-bluetiful'>
        <ChevronUp />
        <span className='font-bold'>{upvoteAmount}</span>
      </div>
    </Button>
  )
}

export default UpvoteButton
