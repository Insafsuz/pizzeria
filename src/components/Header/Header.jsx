import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import './Header.scss'
import { Search } from '../Search'
import { useSelector } from 'react-redux'

const Header = () => {
  const { items, totalPrice } = useSelector(state => state.cart)

  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='logo pizza' />
        <span>Pizzeria</span>
      </Link>
      <Search />
      <Link to='/cart' className='header__btn btn-header'>
        <p className='btn-header__text'>{totalPrice} ₽</p>
        <div className='btn-header__icon'>
          <FaShoppingCart />
          <span>{totalCount}</span>
        </div>
      </Link>
    </header>
  )
}

export default Header
