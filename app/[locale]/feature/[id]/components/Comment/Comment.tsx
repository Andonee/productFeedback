import { CommentProps } from './types'

const Comment = ({ content, firstname, lastname }: CommentProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <h5 className='font-semibold'>
        {firstname} {lastname}
      </h5>
      <div>{content}</div>
    </div>
  )
}

export default Comment
