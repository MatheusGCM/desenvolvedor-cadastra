import { ChevronDown, ChevronUp } from 'lucide-react'
import { ChangeEvent, useState } from 'react'

import { RadioInput } from '../RadioInput'

import { colors } from '@/utils/filter-items'

import './styles.scss'

interface FilterColorProps {
  limited?: boolean
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

export function FilterColor({
  limited = false,
  handleChange,
}: FilterColorProps) {
  const [isShowAll, setIsShowAll] = useState(false)
  const limitedColors = !isShowAll && limited ? colors.slice(0, 5) : colors
  const icon = isShowAll ? (
    <ChevronUp className="chevron" />
  ) : (
    <ChevronDown className="chevron" />
  )

  return (
    <div className="filterContainer">
      <h1>cores</h1>

      {limitedColors.map((item) => (
        <RadioInput
          key={item}
          label={item}
          name="color"
          onChange={handleChange}
        />
      ))}
      {limited && (
        <div className="seeAllButton" onClick={() => setIsShowAll(!isShowAll)}>
          <p>{isShowAll ? 'Recolher cores' : 'Ver todas as cores'}</p>
          {icon}
        </div>
      )}
    </div>
  )
}
