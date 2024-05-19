import { X } from 'lucide-react'
import { ReactNode } from 'react'

import './styles.scss'

interface Props {
  children: ReactNode
  onClose(): void
  title: string
}

export function SortModal({ onClose, children, title }: Props) {
  return (
    <div className="mobileSortComponent">
      <div className="headerContent">
        <h1>{title}</h1>
        <X color="#666" size={25} onClick={onClose} />
      </div>
      <hr />
      <section className="mainContent">{children}</section>
    </div>
  )
}
