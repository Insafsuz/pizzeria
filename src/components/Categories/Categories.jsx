import { useState } from 'react'
import './Categories.scss'

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const list = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <ul className='categories'>
      {list.map((item, i) => (
        <li
          onClick={() => setActiveIndex(i)}
          key={i}
          className={`categories__item ${activeIndex === i ? 'active' : ''}`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Categories
