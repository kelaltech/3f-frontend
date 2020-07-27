import { ProductCategoryType } from '../types/product-type'

export function nameProductCategory(category: ProductCategoryType): string {
  switch (category) {
    case 'sofa_set':
      return 'Sofa'
    case 'bed':
      return 'Bedroom Furniture'
    case 'chest_of_drawer':
      return 'Chest of Drawer'
    case 'cupboards':
      return 'Cupboard'
    case 'tv_stand':
      return 'TV Stand'
    case 'dressing':
      return 'Dressing'
    case 'coffee_table':
      return 'Coffee Table'
    case 'kitchen_cabinate':
      return 'Kitchen Cabinets'
    case 'office':
      return 'Office Furniture'
    case 'shelves':
      return 'Shelves'
    case 'dining_table':
      return 'Dining Room Furniture'
    case 'spring_mattress':
      return 'Spring mattress'
    case 'doors':
      return 'Doors'
  }
}

// export const ProductCategory: ProductCategoryType[] = [
//   'sofa_set',
//   'bed',
//   'chest_of_drawer',
//   'cupboards',
//   'tv_stand',
//   'dressing',
//   'coffee_table',
//   'kitchen_cabinate',
//   'office',
//   'shelves',
//   'dining_table',
//   'spring_mattress',
//   'doors',
// ]
