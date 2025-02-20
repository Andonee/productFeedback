'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
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
import { ArrowLeft, Plus } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import InputSection from './components/InputSection'
import { FeatureFormSchema } from './validation'

const categories = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
] as const

const CreatePage = () => {
  const form = useForm<z.infer<typeof FeatureFormSchema>>({
    resolver: zodResolver(FeatureFormSchema),
  })

  function onSubmit(values: z.infer<typeof FeatureFormSchema>) {
    console.log(values)
  }
  return (
    <div className='flex flex-col gap-16'>
      <Link href={'/'}>
        <Button variant={'link'}>
          <ArrowLeft />
          Go Back
        </Button>
      </Link>
      <Card className='relative flex flex-col gap-10'>
        <div className='absolute top-[-50%] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-bl from-[#E84D70] via-[#A337F6] to-[#28A7ED]'>
          <Plus color='#fff' size={26} />
        </div>
        <CardTitle>Create New Feedback</CardTitle>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
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
                            <SelectItem
                              key={`${el.value}_${idx}`}
                              value={el.value}
                            >
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
                name='details'
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
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreatePage
