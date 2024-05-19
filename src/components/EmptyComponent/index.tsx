import { ShoppingBag } from 'lucide-react'

import './styles.scss'

export function EmptyComponent() {
  return (
    <div className="emptyComponentContainer">
      <ShoppingBag />
      <p>Sem produtos</p>
    </div>
  )
}
