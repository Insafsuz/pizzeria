import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setCategoryId, setCurrentPage, setSortType } from '../../redux/slices/filterSlice'
import './Home.scss'
import { SearchContext } from '../../App'
import { Card, Categories, Pagination, Sort } from '../../components'
import { CardSkeleton } from '../../components/Card/CardSkeleton'

const Home = () => {
  const dispatch = useDispatch()
  const { categoryId, currentPage, sortType } = useSelector(state => state.filter)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { searchValue } = useContext(SearchContext)

  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const search = searchValue ? `&search=${searchValue}` : ''

  useEffect(() => {
    axios
      .get(
        `https://62e51da8c6b56b45118f4462.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sortProperty}${search}`
      )
      .then(res => {
        setItems(res.data)
        setIsLoading(false)
      })
  }, [categoryId, sortType.sortProperty, searchValue, currentPage])

  const pizzas = items.map(item => <Card key={item.id} item={item} />)
  return (
    <div className='home'>
      <div className='container'>
        <div className='home__filters'>
          <Categories value={categoryId} onChangeCategory={i => dispatch(setCategoryId(i))} />
          <Sort value={sortType} onChangeSort={obj => dispatch(setSortType(obj))} />
        </div>
        <h2 className='home__title'>Все пиццы</h2>
        <div className='home__cards'>{isLoading ? <CardSkeleton cards={4} /> : pizzas}</div>
        <Pagination onChangePage={number => dispatch(setCurrentPage(number))} />
      </div>
    </div>
  )
}

export default Home
