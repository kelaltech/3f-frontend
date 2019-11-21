import { LocationType } from './location-type'
import { ReactNode } from 'react'

export type LocationsWithCategoryType = {
  categoryTitle: string | ReactNode
  categoryDescription?: string | ReactNode
  locations: LocationType[]
  maxPerCol?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}
