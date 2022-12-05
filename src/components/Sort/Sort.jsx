import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './Sort.scss'

export const sortList = [
  { name: 'популярности', sortProperty: 'rating' },
  { name: 'цене', sortProperty: 'price' },
  { name: 'алфавиту', sortProperty: 'title' },
]

const Sort = ({ value, onChangeSort }) => {
  const [activeSort, setActiveSort] = useState(false)
  const sortRef = useRef()

  const onClickSort = obj => {
    onChangeSort(obj)
    setActiveSort(false)
  }

  useEffect(() => {
    const handleOutsideClick = e => {
      if (!e.path.includes(sortRef.current)) {
        setActiveSort(false)
      }
    }
    document.body.addEventListener('click', handleOutsideClick)
    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div ref={sortRef} className='sort'>
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
