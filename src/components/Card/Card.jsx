import { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import './Card.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'

const Card = ({ item }) => {
  const dispatch = useDispatch()
  const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === item.id))
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const typeNames = ['тонкое', 'традиционное']

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const cartItem = {
      id: item.id,
      price: item.price,
      imageUrl: item.imageUrl,
      name: item.name,
      type: typeNames[activeType],
      size: item.sizes[activeSize],
    }
    dispatch(addItem(cartItem))
  }

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
        <button onClick={onClickAdd} className='footer-card__btn'>
          <BiPlus size='20px' /> Добавить
          {addedCount > 0 && <span>{addedCount}</span>}
        </button>
      </div>
    </div>
  )
}

export default Card
