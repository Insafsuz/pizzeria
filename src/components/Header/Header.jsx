import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <Link className='header__logo'>
        <img src={logo} alt='logo pizza' />
        <span>Pizzeria</span>
      </Link>
      <Link to='/cart' className='header__btn btn-header'>
        <p className='btn-header__text'>520 ₽</p>
        <div className='btn-header__icon'>
          <FaShoppingCart />
          <span>3</span>
        </div>
      </Link>
    </header>
  )
}

export default Header
