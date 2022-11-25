import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import './Header.scss'
import { Search } from '../Search'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='logo pizza' />
        <span>Pizzeria</span>
      </Link>
      <Search />
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
