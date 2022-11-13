import { useState } from 'react'
import './Sort.scss'

const Sort = () => {
  const [activeSort, setActiveSort] = useState(false)
  const [sortValue, setSortValue] = useState('популярности')

  const sortList = ['популярности', 'цене', 'алфавиту']

  const onChangeSort = value => {
    setSortValue(value)
    setActiveSort(false)
  }

  return (
    <div className='sort'>
      <p onClick={() => setActiveSort(!activeSort)} className='sort__text'>
        Сортировка по: <span>{sortValue}</span>
      </p>
      {activeSort && (
        <ul className='sort__list list-sort'>
          {sortList.map((item, i) => (
            <li onClick={() => onChangeSort(item)} key={i} className='list-sort__item'>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Sort
