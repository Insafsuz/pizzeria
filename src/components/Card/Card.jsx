import { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import './Card.scss'

const Card = ({ item }) => {
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const typeNames = ['тонкое', 'традиционное']

  return (
    <div className='card'>
      <img src={item.imageUrl} alt='' className='card__img' />
      <h3 className='card__title'>{item.name}</h3>
      <div className='card__filter filter-card'>
        <ul className='filter-card__list'>
          {item.types.map(i => (
            <li
              onClick={() => setActiveType(i)}
              key={i}
              className={`filter-card__item ${activeType === i ? 'active' : ''}`}
            >
              {typeNames[i]}
            </li>
          ))}
        </ul>
        <ul className='filter-card__list'>
          {item.sizes.map((size, i) => (
            <li
              onClick={() => setActiveSize(i)}
              key={i}
              className={`filter-card__item ${activeSize === i ? 'active' : ''}`}
            >
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div className='card__footer footer-card'>
        <span className='footer-card__price'>от {item.price} ₽</span>
        <button className='footer-card__btn'>
          <BiPlus size='20px' /> Добавить <span>3</span>
        </button>
      </div>
    </div>
  )
}

export default Card
