import { ReactNode } from 'react'

import { LocationType } from './location-type'

export type LocationsWithCategoryType = {
  categoryTitle: string | ReactNode
  locations: LocationType[]
  maxPerCol?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}
