import { HomeSlidesItemType } from '../src/types/home-slides-item-type'

export const homeSlideItems: HomeSlidesItemType[] = [
  {
    src: require('./product-pictures/sample-6.jpg'),
    links: [
      {
        href: '/products#DINING_ROOM_FURNITURE',
        children: 'More Dinning Room Furniture'
      },
      { href: '/products', children: 'See All Products' }
    ]
  },
  {
    src: require('./product-pictures/sample-1.jpg'),
    links: [
      {
        href: '/products#BEDROOM_FURNITURE',
        children: 'More Bedroom Furniture'
      },
      { href: '/products', children: 'See All Products' }
    ]
  },
  {
    src: require('./product-pictures/sofa-sample.jpg'),
    links: [
      { href: '/products', children: 'See All Products' },
      { href: '/about', children: 'Learn More' }
    ]
  }
]
