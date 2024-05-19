import cart from '@/assets/cart.png'
import logo from '@/assets/logo_cadastra.png'
import './styles.scss'

interface HeaderProps {
  cartAmount: number
}

export function Header({ cartAmount = 0 }: HeaderProps) {
  return (
    <header className="headerContainer">
      <img src={logo} alt="" />
      <div>
        <img src={cart} alt="" width={17} height={20} />
        <div className="counter">
          <p>{cartAmount}</p>
        </div>
      </div>
    </header>
  )
}
