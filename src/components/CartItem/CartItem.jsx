import './CartItem.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(addItem({ id: item.id }))
  }
  const onClickMinus = () => {
    dispatch(minusItem(item.id))
  }
  const onClickRemove = () => {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      dispatch(removeItem(item.id))
    }
  }

  return (
    <div className='item'>
      <div className='item__column'>
        <div className='item__img'>
          <img src={item.imageUrl} alt='' />
          <div className='item__text'>
            {item.name} {item.type} {item.size}см.
          </div>
        </div>
      </div>
      <div className='item__column'>
        <button onClick={onClickMinus}>minus</button>
        <span>{item.count}</span>
        <button onClick={onClickPlus}>plus</button>
      </div>
      <div className='item__column'>
        <div>{item.price * item.count}р</div>
        <button onClick={onClickRemove}>удалить</button>
      </div>
    </div>
  )
}

export default CartItem
