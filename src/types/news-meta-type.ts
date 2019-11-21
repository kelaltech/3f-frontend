import { ReactNode } from 'react'

export type NewsMetaType = {
  id: string
  active: boolean
  title: string
  description: string
  postedOn: Date
  content: ReactNode
}
