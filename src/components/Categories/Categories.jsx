import './Categories.scss'

const Categories = ({ value, onChangeCategory }) => {
  const list = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <ul className='categories'>
      {list.map((name, i) => (
        <li
          onClick={() => onChangeCategory(i)}
          key={i}
          className={`categories__item ${value === i ? 'active' : ''}`}
        >
          {name}
        </li>
      ))}
    </ul>
  )
}

export default Categories
