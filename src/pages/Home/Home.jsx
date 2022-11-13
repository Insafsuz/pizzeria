import { Card, Categories, Header, Sort } from '../../components'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className='container'>
        <div className='home__filters'>
          <Categories />
          <Sort />
        </div>
        <h2 className='home__title'>Все пиццы</h2>
        <div className='home__cards'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Home
