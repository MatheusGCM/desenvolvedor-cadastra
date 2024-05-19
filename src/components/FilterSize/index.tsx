import { ChangeEvent, useState } from 'react'

import { sizes } from '@/utils/filter-items'
import './styles.scss'

interface FilterSizeProps {
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

export function FilterSize({ handleChange }: FilterSizeProps) {
  const [sizeSelected, setSizeSelected] = useState('')
  return (
    <div className="filterSizeContainer">
      <h1>tamanhos</h1>
      <div className="inputsContainer">
        {sizes.map((item) => (
          <label
            key={item}
            className={
              sizeSelected === item
                ? 'selectedLabelContainer'
                : 'labelContainer'
            }
            onClick={() => setSizeSelected(item)}
          >
            <input
              type="radio"
              name="size"
              value={item}
              onChange={handleChange}
            />
            <div>{item}</div>
          </label>
        ))}
      </div>
    </div>
  )
}
