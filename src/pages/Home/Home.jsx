import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage, setSortType } from '../../redux/slices/filterSlice'
import './Home.scss'
import { Card, Categories, Pagination, Sort } from '../../components'
import { CardSkeleton } from '../../components/Card/CardSkeleton'
import { fetchPizzas } from '../../redux/slices/pizzaSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { categoryId, currentPage, sortType } = useSelector(state => state.filter)
  const { items, status } = useSelector(state => state.pizza)
  const { searchValue } = useSelector(state => state.filter)

  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const search = searchValue ? `&search=${searchValue}` : ''

  const getPizzas = () => {
    dispatch(fetchPizzas({ category, search, currentPage, sortType: sortType.sortProperty }))
  }

  useEffect(() => {
    getPizzas()
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
        <div className='home__cards'>
          {status === 'loading' ? <CardSkeleton cards={4} /> : pizzas}
        </div>
        <Pagination onChangePage={number => dispatch(setCurrentPage(number))} />
      </div>
    </div>
  )
}

export default Home
