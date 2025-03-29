'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import InputSection from '../../../create/components/InputSection'
import { FeatureFormSchema } from '../../../create/validation'
import RemoveButton from '../RemoveButton'
import { FeedbackFormType } from './types'

const FeedbackForm = ({ tags, ...rest }: FeedbackFormType) => {
  const title = rest.type === 'edit' ? rest.title : ''
  const description = rest.type === 'edit' ? rest.description : ''
  const tag = rest.type === 'edit' ? rest.tag : ''

  const form = useForm<z.infer<typeof FeatureFormSchema>>({
    resolver: zodResolver(FeatureFormSchema),
    defaultValues: {
      title,
      description,
      category: tag,
    },
  })

  function onSubmitHandler(values: z.infer<typeof FeatureFormSchema>) {
    console.log('values', values)

    switch (rest.type) {
      case 'create':
        rest.onSubmit(values)
        break
      case 'edit':
        rest.onSubmit({ ...values, feedbackId: rest.feedbackId })
        break
    }
  }

  const categories = tags ? tags : []

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className='flex flex-col gap-8'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => {
            return (
              <InputSection
                label='Feedback Title'
                description='Add a short, descriptive headline'
              >
                <Input {...field} />
              </InputSection>
            )
          }}
        />
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => {
            return (
              <InputSection
                label='Category'
                description='Choose a category for your feedback'
              >
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a category' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((el, idx) => (
                      <SelectItem key={`${el.label}_${idx}`} value={el.tagId}>
                        {el.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </InputSection>
            )
          }}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => {
            return (
              <InputSection
                label='Feedback Detail'
                description='Include any specific comments on what should be improved, added, etc.'
              >
                <Textarea {...field} />
              </InputSection>
            )
          }}
        />
        <div className='flex justify-between'>
          {rest.type === 'edit' && (
            <div>
              <RemoveButton
                feedbackId={rest.feedbackId}
                onRemove={rest.onRemove}
              />
            </div>
          )}

          <div className='flex justify-end gap-4'>
            <Link href={'/'}>
              <Button type='button' variant='cancel'>
                Cancel
              </Button>
            </Link>
            <Button type='submit' variant='confirm'>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default FeedbackForm
