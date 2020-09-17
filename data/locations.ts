import { LocationsWithCategoryType } from '../src/types/locations-with-category-type'
import { homeLocationsShowrooms } from './home-locations-showrooms'

export const locations: LocationsWithCategoryType[] = [
  {
    categoryTitle: 'Our HQ',
    locations: [
      {
        name: '(3F) Finfinne Furniture Factory HQ',
        address: '3F Building Piassa,\nAddis Ababa, Ethiopia',
        mapUrl: 'https://goo.gl/maps/qwBwBLneYniaZBKm9',
      },
    ],
    maxPerCol: 1,
  },
  {
    categoryTitle: 'Our Showrooms',
    locations: homeLocationsShowrooms,
  },
]
