import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
