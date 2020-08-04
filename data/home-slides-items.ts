import { HomeSlidesItemType } from '../src/types/home-slides-item-type'

export const homeSlideItems: HomeSlidesItemType[] = [
  {
    src: require('./product-pictures/sample-14.jpg'),
    links: [
      {
        href: '/product/2',
        children: 'More Sofa Set',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/sample-2.jpg'),
    links: [
      { href: '/products', children: 'See All Products' },
      { href: '/about', children: 'Learn More' },
    ],
  },
  {
    src: require('./product-pictures/sample-1.jpg'),
    links: [
      {
        href: '/product/36',
        children: 'More kitchen cabinate',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/sample-13.JPG'),
    links: [
      {
        href: '/product/13',
        children: 'More Bedroom Furniture',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/sample-3.JPG'),
    links: [
      {
        href: '/product/2',
        children: 'More Sofa sets',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/sample-10.jpg'),
    links: [
      {
        href: '/product/29',
        children: 'Dining Room Furniture',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: require('./product-pictures/sample-6.jpeg'),
    links: [
      {
        href: '/product/13',
        children: 'More Bedroom Furniture',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },

]
