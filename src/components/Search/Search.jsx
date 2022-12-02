import { useContext, useState, useRef, useCallback } from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import debounce from 'lodash.debounce'
import './Search.scss'
import { SearchContext } from '../../App'

const Search = () => {
  const inputRef = useRef()
  const [value, setValue] = useState('')
  const { setSearchValue } = useContext(SearchContext)

  const onClickClear = () => {
    setValue('')
    setSearchValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = useCallback(
    debounce(str => setSearchValue(str), 300),
    []
  )

  const onChangeInput = e => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className='search'>
      <input
        className='search__input'
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        type='text'
        placeholder='Поиск'
      />
      <BiSearch className='search__icon' />
      {value && <AiOutlineCloseCircle onClick={onClickClear} className='search__close' />}
    </div>
  )
}

export default Search
