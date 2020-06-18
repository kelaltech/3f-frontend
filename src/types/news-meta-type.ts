import { ReactNode } from 'react'

export interface NewsMetaType {
  Active: boolean
  id: number
  title: string
  subject: string
  content: string
  created_at: string
  updated_at: string
  headerImg: ImgElement
}

export interface NewsMetaType2Img {
  id: number
  title: string
  img: ImgElement[]
}

export interface ImgElement {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  created_at: string
  updated_at: string
}

export interface Formats {
  large: Large
  small: Large
  medium: Large
  thumbnail: Large
}

export interface Large {
  ext: string
  url: string
  hash: string
  mime: string
  path: null
  size: number
  width: number
  height: number
}
