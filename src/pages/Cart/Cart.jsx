import { CartItem } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.scss'
import { clearItems } from '../../redux/slices/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector(state => state.cart)

  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems())
    }
  }

  return (
    <div className='cart'>
      <div className='cart__info'>
        <div className='cart__title'>Корзина</div>
        <button onClick={onClickClear} className='cart__btn'>
          Очистить корзину
        </button>
      </div>
      <div className='cart__items'>
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className='cart__footer'>
        <div className='cart__all'>Всего пицц: {totalCount} шт.</div>
        <div className='cart__price'>Сумма заказа: {totalPrice}</div>
      </div>
    </div>
  )
}

export default Cart
