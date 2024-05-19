import { Product } from '@/@types/Product'

export function compareDates(a: Product, b: Product) {
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)

  return dateB.getTime() - dateA.getTime()
}
