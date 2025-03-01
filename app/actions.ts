'use server'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import {
  CreateFeedbackType,
  EditFeedbackType,
  RemoveFeedbackType,
  TagType,
} from './types/globalTypes'

export async function addFeedback(values: CreateFeedbackType) {
  const title = values.title
  const description = values.description
  const category = parseInt(values.category)

  console.log('CREATE server values', values)

  await prisma.feedback.create({
    data: {
      title,
      description,
      category: {
        connect: { tagId: category },
      },
      author: {
        connect: { userId: 1 },
      },
    },
  })

  redirect('/')
}

export async function editFeedback(values: EditFeedbackType) {
  const title = values.title
  const description = values.description
  const category = parseInt(values.category)
  const feefbackId = parseInt(values.feedbackId)

  console.log('EDIT server values', values)

  await prisma.feedback.update({
    where: {
      feedbackId: feefbackId,
    },
    data: {
      title,
      description,
      category: {
        connect: { tagId: category },
      },
      author: {
        connect: { userId: 1 },
      },
    },
  })

  redirect(`/feature/${feefbackId}`)
}

export async function deleteFeedback(values: RemoveFeedbackType) {
  const feefbackId = parseInt(values.feedbackId)

  console.log('feefbackId', feefbackId)

  await prisma.feedback.delete({
    where: {
      feedbackId: feefbackId,
    },
  })

  redirect('/')
}

export async function getTags() {
  const tags = await prisma.tag.findMany()

  const convertedTags: TagType[] = tags.map(tag => {
    return {
      tagId: tag.tagId.toString(),
      label: tag.name,
    }
  })

  return convertedTags
}
