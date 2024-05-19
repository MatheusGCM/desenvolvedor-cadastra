import { ChangeEvent, useState } from 'react'

import { FilterSize, FilterColor, FilterPriceRange } from '@/components'
import './styles.scss'

export function FilterForm() {
  return (
    <form className="formContainer">
      <FilterColor handleChange={(event) => handleChange('color', event)} />
      <FilterSize handleChange={(event) => handleChange('size', event)} />
      <FilterPriceRange
        handleChange={(event) => handleChange('price', event)}
      />
    </form>
  )
}
