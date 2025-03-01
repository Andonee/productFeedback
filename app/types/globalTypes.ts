export type RoadmapStatusType = 'planned' | 'in-progress' | 'live'

export enum CategoryType {
  Feature = 1,
  UI = 2,
  UX = 3,
  Enhancement = 4,
  Bug = 5,
}

export type TagType = { tagId: string; label: string }

export type TagList = TagType[]

type GetObjectValue<T> = {
  [K in keyof T]: T[K]
}[keyof T]

export type CreateFeedbackType = {
  title: string
  description: string
  category: string
}

export type EditFeedbackType = {
  title: string
  description: string
  category: string
  feedbackId: string
}

export type RemoveFeedbackType = {
  feedbackId: string
}
