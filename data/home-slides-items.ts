import { HomeSlidesItemType } from '../src/types/home-slides-item-type'
import sofa1 from './product-pictures/sofa-1.jpg'
import all from './product-pictures/all.jpg'
import kitchen2 from './product-pictures/kitchen-2.jpg'
import bed1 from './product-pictures/bed-1.jpg'
import sofa2 from './product-pictures/sofa-2.jpg'
import dining1 from './product-pictures/dining-1.jpg'
import bed2 from './product-pictures/bed-2.jpeg'
import kitchen3 from './product-pictures/kitchen-3.jpg'
import kitchen1 from './product-pictures/kitchen-1.jpg'
export const homeSlideItems: HomeSlidesItemType[] = [
  {
    src: sofa1,
    links: [
      {
        href: '/product/2',
        children: 'More Sofa Set',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: all,
    links: [
      { href: '/products', children: 'See All Products' },
      { href: '/about', children: 'Learn More' },
    ],
  },
  {
    src: kitchen2,
    links: [
      {
        href: '/product/36',
        children: 'More kitchen cabinate',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: bed1,
    links: [
      {
        href: '/product/13',
        children: 'More Bedroom Furniture',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: sofa2,
    links: [
      {
        href: '/product/2',
        children: 'More Sofa sets',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: dining1,
    links: [
      {
        href: '/product/29',
        children: 'Dining Room Furniture',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: bed2,
    links: [
      {
        href: '/product/13',
        children: 'More Bedroom Furniture',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: kitchen3,
    links: [
      {
        href: '/product/36',
        children: 'More kitchen cabinate',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
  {
    src: kitchen1,
    links: [
      {
        href: '/product/36',
        children: 'More kitchen cabinate',
      },
      // { href: '/products', children: 'See All Products' },
    ],
  },
]
