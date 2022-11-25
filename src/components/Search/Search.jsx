import { BiSearch } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './Search.scss'
import { useContext } from 'react'
import { SearchContext } from '../../App'

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <div className='search'>
      <input
        className='search__input'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        type='text'
        placeholder='Поиск'
      />
      <BiSearch className='search__icon' />
      {searchValue && (
        <AiOutlineCloseCircle onClick={() => setSearchValue('')} className='search__close' />
      )}
    </div>
  )
}

export default Search
