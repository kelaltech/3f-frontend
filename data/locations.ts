import { LocationsWithCategoryType } from '../src/types/locations-with-category-type'
import { homeLocationsShowrooms } from './home-locations-showrooms'

export const locations: LocationsWithCategoryType[] = [
  {
    categoryTitle: 'Our Showrooms',
    categoryDescription: '',
    locations: homeLocationsShowrooms
  },
  {
    categoryTitle: 'Our HQ',
    categoryDescription: '',
    locations: [
      {
        name: '(3F) Finfinne Furniture Factory HQ',
        address: 'Saris Adey Abeba Area, 4\nAddis Ababa, Ethiopia',
        mapUrl: 'https://goo.gl/maps/xkuAzDZNMevSugLi8'
      }
    ],
    maxPerCol: 1
  }
]
