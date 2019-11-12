import { HomeSlidesItemType } from '../src/types/home-slides-item-type'

export const homeSlideItems: HomeSlidesItemType[] = [
  {
    src: require('../src/assets/images/sofa-sample.jpg'),
    links: [
      { href: '/products', children: 'See All Sofa' },
      { href: '/about', children: 'Learn More' }
    ]
  },
  {
    src: require('../src/assets/images/brand/logo-red.png'),
    links: [{ href: '/products', children: 'See All Products' }]
  },
  {
    src: require('../src/assets/images/sofa-sample.jpg'),
    links: [
      { href: '/products', children: 'See All Sofa' },
      { href: '/products', children: 'See All Products' }
    ]
  }
]
