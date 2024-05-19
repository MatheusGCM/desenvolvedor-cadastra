import { Button } from '../Button'

import { Product as ProductType } from '@/@types/Product'

import './styles.scss'

interface ProductProps extends ProductType {
  addCart(): void
}

export function Product({
  image,
  name,
  price,
  parcelamento,
  addCart,
}: ProductProps) {
  return (
    <div className="componentContainer">
      <img src={image} alt="" />
      <h1>{name}</h1>
      <p>R$ {price.toFixed(2).toString().replace('.', ',')}</p>
      <span>{`até ${parcelamento[0]}x de R$${parcelamento[1].toFixed(2).toString().replace('.', ',')}`}</span>
      <Button label="comprar" onClick={addCart} />
    </div>
  )
}
