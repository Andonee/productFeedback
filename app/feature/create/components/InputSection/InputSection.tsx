import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import React from 'react'

const InputSection = ({
  children,
  label,
  description,
}: {
  children: React.ReactNode
  label: string
  description: string
}) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormDescription>{description}</FormDescription>
      <FormControl>{children}</FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default InputSection
