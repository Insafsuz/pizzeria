import { BiPlus } from 'react-icons/bi'
import './Card.scss'

const Card = () => {
  return (
    <div className='card'>
      <img src='' alt='' className='card__img' />
      <h3 className='card__title'>Чизбургер-пицца</h3>
      <div className='card__filter filter-card'>
        <ul className='filter-card__list'>
          <li className='filter-card__item'>тонкое</li>
          <li className='filter-card__item'>традиционное</li>
        </ul>
        <ul className='filter-card__list'>
          <li className='filter-card__item'>26см</li>
          <li className='filter-card__item'>30см</li>
          <li className='filter-card__item'>40см</li>
        </ul>
      </div>
      <div className='card__footer footer-card'>
        <span className='footer-card__price'>от 395 ₽</span>
        <button className='footer-card__btn'>
          <BiPlus size='20px' /> Добавить <span>3</span>
        </button>
      </div>
    </div>
  )
}

export default Card
