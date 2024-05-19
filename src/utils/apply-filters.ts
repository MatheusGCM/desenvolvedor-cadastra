import { FilterProps, Product } from '@/@types/Product'

export function applyFilters(product: Product, filter: FilterProps) {
  const { color, size, priceRange } = filter
  let isMatch = true

  if (color && product.color !== color) {
    isMatch = false
  }
  if (size && !product.size.includes(size.toUpperCase())) {
    isMatch = false
  }
  if (priceRange) {
    switch (priceRange) {
      case '0-50':
        if (product.price < 0 || product.price > 50) isMatch = false
        break
      case '51-150':
        if (product.price < 51 || product.price > 150) isMatch = false
        break
      case '151-300':
        if (product.price < 151 || product.price > 300) isMatch = false
        break
      case '301-500':
        if (product.price < 301 || product.price > 500) isMatch = false
        break
      case '500':
        if (product.price <= 500) isMatch = false
        break
      default:
        break
    }
  }

  return isMatch
}
