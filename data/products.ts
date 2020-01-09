import { ProductType } from '../src/types/product-type'

export const products: ProductType[] = [
  {
    _id: '1',
    category: 'OFFICE_FURNITURE',
    name: 'Office Chair',
    description: {
      composition: [],
      material: [],
      dimension: [],
      color: []
    },
    prices: [2500, 1400, 6000],
    fabrics: [],
    imgSrc: require('./product-pictures/sample-0.jpg')
  },
  {
    _id: '2',
    category: 'OFFICE_FURNITURE',
    name: 'Office Table',
    description: {
      composition: [],
      material: [],
      dimension: [],
      color: []
    },
    prices: [2500, 1400, 6000],
    fabrics: [],
    imgSrc: require('./product-pictures/sample-1.jpg')
  },
  {
    _id: '3',
    category: 'BEDROOM_FURNITURE',
    name: 'King-Size Bed',
    description: {
      composition: [],
      material: [],
      dimension: [],
      color: []
    },
    prices: [2500, 1400, 6000],
    fabrics: [],
    imgSrc: require('./product-pictures/sample-2.jpg')
  },
  {
    _id: '4',
    category: 'BEDROOM_FURNITURE',
    name: 'Bed-side Lamp',
    description: {
      composition: [],
      material: [],
      dimension: [],
      color: []
    },
    prices: [2500, 1400, 6000],
    fabrics: [],
    imgSrc: require('./product-pictures/sample-3.jpg')
  },
  {
    _id: '5',
    category: 'DOORS',
    name: 'Wooden 80cm Door',
    description: {
      composition: [],
      material: ['Wood'],
      dimension: [{ width: 80, height: 220, length: 10 }],
      color: []
    },
    prices: [2500, 1400, 6000],
    fabrics: [],
    imgSrc: require('./product-pictures/sample-4.jpg')
  },
  {
    _id: '6',
    category: 'OFFICE_FURNITURE',
    name: 'Office Guest Chair',
    description: {
      composition: [],
      material: [],
      dimension: [],
      color: []
    },
    prices: [2500, 1400, 6000],
    fabrics: [],
    imgSrc: require('./product-pictures/sample-5.jpg')
  },
  {
    _id: '7',
    category: 'DOORS',
    name: 'Wooden French Door',
    description: {
      composition: [],
      material: [],
      dimension: [],
      color: []
    },
    prices: [2500, 1400, 6000],
    fabrics: [],
    imgSrc: require('./product-pictures/sample-6.jpg')
  },
  {
    _id: '8',
    category: 'DINING_ROOM_FURNITURE',
    name: 'Dining Table',
    description: {
      composition: [],
      material: [],
      dimension: [],
      color: []
    },
    prices: [2500, 1400, 6000],
    fabrics: [],
    imgSrc: require('./product-pictures/sample-7.jpg')
  }
]
