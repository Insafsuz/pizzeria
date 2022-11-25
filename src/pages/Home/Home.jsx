import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../App'
import { Card, Categories, Pagination, Sort } from '../../components'
import { CardSkeleton } from '../../components/Card/CardSkeleton'
import './Home.scss'

const Home = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' })
  const { searchValue } = useContext(SearchContext)

  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const search = searchValue ? `&search=${searchValue}` : ''

  useEffect(() => {
    fetch(
      `https://62e51da8c6b56b45118f4462.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sortProperty}${search}`
    )
      .then(res => res.json())
      .then(json => {
        setItems(json)
        setIsLoading(false)
      })
  }, [categoryId, sortType, searchValue, currentPage])

  const pizzas = items.map(item => <Card key={item.id} item={item} />)

  return (
    <div className='home'>
      <div className='container'>
        <div className='home__filters'>
          <Categories value={categoryId} onChangeCategory={i => setCategoryId(i)} />
          <Sort value={sortType} onChangeSort={obj => setSortType(obj)} />
        </div>
        <h2 className='home__title'>Все пиццы</h2>
        <div className='home__cards'>{isLoading ? <CardSkeleton cards={10} /> : pizzas}</div>
        <Pagination onChangePage={number => setCurrentPage(number)} />
      </div>
    </div>
  )
}

export default Home
