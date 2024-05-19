import { InputHTMLAttributes } from 'react'
import './styles.scss'

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function RadioInput({ label, ...rest }: RadioInputProps) {
  return (
    <div className="inputContainer">
      <input type="radio" value={label} {...rest} />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}
