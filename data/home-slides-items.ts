import { HomeSlidesItemType } from '../src/types/home-slides-item-type'

export const homeSlideItems: HomeSlidesItemType[] = [
  {
    src: require('./product-pictures/sofa-1.JPG'),
    links: [
      {
        href: '/product/2',
        children: 'More Sofa Set',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/all.jpg'),
    links: [
      { href: '/products', children: 'See All Products' },
      { href: '/about', children: 'Learn More' },
    ],
  },
  {
    src: require('./product-pictures/kitchen-2.jpg'),
    links: [
      {
        href: '/product/36',
        children: 'More kitchen cabinate',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/bed-1.JPG'),
    links: [
      {
        href: '/product/13',
        children: 'More Bedroom Furniture',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/sofa-2.jpg'),
    links: [
      {
        href: '/product/2',
        children: 'More Sofa sets',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/dining-1.jpg'),
    links: [
      {
        href: '/product/29',
        children: 'Dining Room Furniture',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/bed-2.jpeg'),
    links: [
      {
        href: '/product/13',
        children: 'More Bedroom Furniture',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/kitchen-3.jpg'),
    links: [
      {
        href: '/product/36',
        children: 'More kitchen cabinate',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/kitchen-1.jpg'),
    links: [
      {
        href: '/product/36',
        children: 'More kitchen cabinate',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
]
