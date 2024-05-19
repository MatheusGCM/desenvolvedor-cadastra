import { RadioInput } from '../RadioInput'

import { priceRange } from '@/utils/filter-items'
import './styles.scss'

interface FilterPriceRangProps {
  handleChange(value: string): void
}

export function FilterPriceRange({ handleChange }: FilterPriceRangProps) {
  return (
    <div className="filterContainer">
      <h1>faixa de preço</h1>
      {priceRange.map((item, index) => {
        const label =
          index < priceRange.length - 1
            ? `de R$${item.split('-')[0]} até R$${item.split('-')[1]}`
            : `a partir de R$${item}`
        return (
          <RadioInput
            key={item}
            label={label}
            name="price"
            onChange={() => handleChange(item)}
          />
        )
      })}
    </div>
  )
}
