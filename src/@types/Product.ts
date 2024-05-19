export interface Product {
  id: string
  name: string
  price: number
  parcelamento: Array<number>
  color: string
  image: string
  size: Array<string>
  date: string
}

export interface FilterProps {
  color: string
  size: string
  priceRange: string
}
