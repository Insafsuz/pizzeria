import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import { BsCart2 } from 'react-icons/bs'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.logo} to='/'>
        <img src={logo} alt='' />
        <span>Pizzeria</span>
      </Link>
      <Link className={styles.button} to='/cart'>
        <div>520 ₽</div>
        <div>
          <BsCart2 />
          <span>3</span>
        </div>
      </Link>
    </div>
  )
}

export default Header
