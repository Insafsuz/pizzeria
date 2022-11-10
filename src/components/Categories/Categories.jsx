import styles from './Categories.module.scss'

const Categories = () => {
  const list = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <ul className={styles.list}>
      {list.map((item, i) => (
        <li className={styles.item} key={i}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Categories
