import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import Cart from './pages/Cart'
import Home from './pages/Home/Home'

export const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='App'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  )
}

export default App
