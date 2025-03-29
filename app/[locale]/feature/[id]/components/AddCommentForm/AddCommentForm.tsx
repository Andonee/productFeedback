'use client'
import { CommentFormSchema } from '@/app/[locale]/feature/components/shared/FeedbackForm/validation'
import { CreateCommentType } from '@/app/types/globalTypes'
import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AddCommentFormProps } from './types'

const commentsLength = 250

const AddCommentForm = ({
  onSubmit,
  feedbackId,
  userId,
}: AddCommentFormProps) => {
  const form = useForm<z.infer<typeof CommentFormSchema>>({
    resolver: zodResolver(CommentFormSchema),
  })

  function onSubmitHandler(values: z.infer<typeof CommentFormSchema>) {
    const payload: CreateCommentType = {
      content: values.content,
      feedbackId: feedbackId,
      userId: userId,
    }

    console.log('payload', payload)

    onSubmit(payload)

    form.setValue('content', '')
  }

  const commentContentLengthLeft = useMemo(() => {
    return commentsLength - form.watch('content')?.length || commentsLength
  }, [form.watch('content')])

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-4'
        onSubmit={form.handleSubmit(onSubmitHandler)}
      >
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => {
            return (
              <FormItem>
                <Textarea maxLength={commentsLength} {...field} />
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormMessage />
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <span>{commentContentLengthLeft} characters left</span>
          <Button type='submit' variant='confirm'>
            Post Comment
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default AddCommentForm
