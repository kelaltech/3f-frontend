import { ReactNode } from 'react'

export type NewsMetaType = {
  id: string
  title: string
  description: string
  postedOn: Date
  content: ReactNode
}
