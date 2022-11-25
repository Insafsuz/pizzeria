import { useState } from 'react'
import './Sort.scss'

const Sort = ({ value, onChangeSort }) => {
  const [activeSort, setActiveSort] = useState(false)

  const sortList = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавиту', sortProperty: 'title' },
  ]

  const onClickSort = obj => {
    onChangeSort(obj)
    setActiveSort(false)
  }

  return (
    <div className='sort'>
      <p onClick={() => setActiveSort(!activeSort)} className='sort__text'>
        Сортировка по: <span>{value.name}</span>
      </p>
      {activeSort && (
        <ul className='sort__list list-sort'>
          {sortList.map((obj, i) => (
            <li
              onClick={() => onClickSort(obj)}
              key={i}
              className={`list-sort__item ${obj.name === value.name ? 'active' : ''}`}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Sort
