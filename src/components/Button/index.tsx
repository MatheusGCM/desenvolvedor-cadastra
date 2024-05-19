import { ButtonHTMLAttributes } from 'react'
import './styles.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: 'default' | 'primary' | 'secondary'
}

export function Button({
  label,
  variant = 'default',

  ...rest
}: ButtonProps) {
  return (
    <button data-variant={variant} {...rest}>
      {label}
    </button>
  )
}
