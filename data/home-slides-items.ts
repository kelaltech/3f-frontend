import { HomeSlidesItemType } from '../src/types/home-slides-item-type'

export const homeSlideItems: HomeSlidesItemType[] = [
  {
    src: require('./product-pictures/sample-14.jpeg'),
    links: [
      {
        href: '/products#sofa_set',
        children: 'More Sofa',
      },
      { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/sample-2.jpeg'),
    links: [
      { href: '/products', children: 'See All Products' },
      { href: '/about', children: 'Learn More' },
    ],
  },
  {
    src: require('./product-pictures/sample-1.jpeg'),
    links: [
      {
        href: '/products#kitchen_cabinate',
        children: 'kitchen cabinate',
      },
      { href: '/products', children: 'See All Products' },
    ],
  },

  {
    src: require('./product-pictures/sample-3.jpeg'),
    links: [
      {
        href: '/products#sofa_set',
        children: 'More Sofa sets',
      },
      { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/sample-10.jpeg'),
    links: [
      {
        href: '/products#dining_table',
        children: 'Dining Room Furniture',
      },
      { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/sample-6.jpeg'),
    links: [
      {
        href: '/products#bed',
        children: 'More Bedroom Furniture',
      },
      { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/sample-13.jpeg'),
    links: [
      {
        href: '/products#BEDROOM_FURNITURE',
        children: 'More Bedroom Furniture',
      },
      { href: '/products', children: 'See All Products' },
    ],
  },
]
