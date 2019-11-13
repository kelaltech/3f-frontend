import { ProductCategoryType } from '../types/product-type'

export function nameProductCategory(category: ProductCategoryType): string {
  switch (category) {
    case 'DINING_ROOM_FURNITURE':
      return 'Dining Room Furniture'
    case 'LIVING_ROOM_FURNITURE':
      return 'Living Room Furniture'
    case 'BEDROOM_FURNITURE':
      return 'Bedroom Furniture'
    case 'SPRING_MATTRESS':
      return 'Spring Mattress'
    case 'SOFA':
      return 'Sofa'
    case 'OFFICE_FURNITURE':
      return 'Office Furniture'
    case 'DOORS':
      return 'Doors'
    case 'CUPBOARDS':
      return 'Cupboards'
    case 'KITCHEN_CABINETS':
      return 'Kitchen Cabinets'
  }
}
