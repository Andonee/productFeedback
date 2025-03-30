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
import { useTranslations } from 'next-intl'
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
  const t = useTranslations('FeedbackBoard')
  const utils = useTranslations('utils')

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
                label={t('feedbackTitle')}
                description={t('feedbackTitleInfo')}
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
                label={t('feedbackCategory')}
                description={t('feedbackCategoryInfo')}
              >
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('feedbackSelectCategory')} />
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
                label={t('feedbackDescription')}
                description={t('feedbackDescriptionInfo')}
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
                {utils('cancel')}
              </Button>
            </Link>
            <Button type='submit' variant='confirm'>
              {utils('submit')}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default FeedbackForm
