'use server'
import { auth } from '@/auth'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import {
  CreateCommentType,
  CreateFeedbackType,
  EditFeedbackType,
  EditUpvoteType,
  RemoveFeedbackType,
  RemoveUpvoteType,
  TagType,
} from './types/globalTypes'

export async function addFeedback(values: CreateFeedbackType) {
  const session = await auth()
  const title = values.title
  const description = values.description
  const category = values.category

  await prisma.feedback.create({
    data: {
      title,
      description,
      category: {
        connect: { tagId: category },
      },
      author: {
        connect: { id: session?.user.id },
      },
    },
  })

  redirect('/')
}

export async function editFeedback(values: EditFeedbackType) {
  const session = await auth()
  const title = values.title
  const description = values.description
  const category = values.category
  const feefbackId = values.feedbackId

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
        connect: { id: session?.user.id },
      },
    },
  })

  redirect(`/feature/${feefbackId}`)
}

export async function deleteFeedback(values: RemoveFeedbackType) {
  const feefbackId = values.feedbackId

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

async function addUpvote(values: EditUpvoteType) {
  if (!values || !values.feedbackId || !values.userId) {
    throw new TypeError(
      'The "payload" argument must be of type object and contain feedbackId and userId.',
    )
  }
  const feedbackId = values.feedbackId
  const userId = values.userId

  await prisma.upvote.create({
    data: {
      feedback: {
        connect: { feedbackId: feedbackId },
      },
      user: {
        connect: { id: userId },
      },
    },
  })
}

async function removeUpvote(values: RemoveUpvoteType) {
  const upvoteId = values.upvoteId
  await prisma.upvote.delete({
    where: {
      id: upvoteId,
    },
  })
}

export async function updateUpvote(values: EditUpvoteType) {
  const feedbackId = values.feedbackId
  const userId = values.userId

  const upvote = await prisma.upvote.findFirst({
    where: {
      feedbackId: feedbackId,
      authorId: userId,
    },
  })

  console.log('values', values)

  if (upvote) {
    await removeUpvote({ upvoteId: upvote.id })
  } else {
    await addUpvote(values)
  }

  revalidatePath('/')
}

export async function getUpvoteAmount(values: EditUpvoteType) {
  const feedbackId = values.feedbackId
  const userId = values.userId

  const amount = await prisma.upvote.count({
    where: {
      feedbackId: feedbackId,
      authorId: userId,
    },
  })

  return amount
}

export async function addComment(values: CreateCommentType) {
  if (!values || !values.feedbackId || !values.userId) {
    throw new TypeError(
      'The "payload" argument must be of type object and contain feedbackId and userId.',
    )
  }
  const authorId = values.userId
  const content = values.content
  const feedbackId = values.feedbackId

  console.log('values', values)

  await prisma.comment.create({
    data: {
      content,
      feedback: {
        connect: { feedbackId: feedbackId },
      },
      author: {
        connect: { id: authorId },
      },
    },
  })

  revalidatePath(`/feature/${feedbackId}`)
}
