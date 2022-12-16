import { useState, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import debounce from 'lodash.debounce'
import './Search.scss'
import { setSearchValue } from '../../redux/slices/filterSlice'

const Search = () => {
  const dispatch = useDispatch()
  const inputRef = useRef()
  const [value, setValue] = useState('')

  const onClickClear = () => {
    setValue('')
    dispatch(setSearchValue(''))
    inputRef.current.focus()
  }

  const updateSearchValue = useCallback(
    debounce(str => dispatch(setSearchValue(str)), 300),
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
