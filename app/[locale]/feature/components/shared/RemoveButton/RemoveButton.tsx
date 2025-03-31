'use client'
import { Button } from '@/components/ui/button'
import { RemoveButtonProps } from './types'

const RemoveButton = ({ feedbackId, onRemove }: RemoveButtonProps) => {
  const onRemoveHandler = () => {
    onRemove({ feedbackId })
  }
  return (
    <Button type='button' variant='confirm' onClick={onRemoveHandler}>
      Delete
    </Button>
  )
}

export default RemoveButton
