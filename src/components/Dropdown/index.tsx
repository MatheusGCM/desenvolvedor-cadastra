import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

import './styles.scss'

export const options = ['Mais recentes', 'Menor preço', 'Maior preço']

interface DropdownProps {
  handleSelectedOption(op: string): void
}

export function Dropdown({ handleSelectedOption }: DropdownProps) {
  const [visible, setVisible] = useState(false)
  const [selectedOption, setSelectionOption] = useState('Ordenar por:')

  function handleVisibility() {
    setVisible((prevState) => !prevState)
  }

  function handleDropdownSelectedOption(op: string) {
    setSelectionOption(op)
    handleVisibility()
    handleSelectedOption(op)
  }

  return (
    <div className="dropdownContainer">
      <div className="dropdown" onClick={handleVisibility}>
        <span>{selectedOption}</span>
        {visible ? (
          <ChevronUp className="chevronUp" />
        ) : (
          <ChevronDown className="chevronDown" />
        )}
      </div>

      {visible && (
        <div className="optionsContainer">
          {options.map((item, index) => (
            <p
              key={`${index}`}
              onClick={() => handleDropdownSelectedOption(item)}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
