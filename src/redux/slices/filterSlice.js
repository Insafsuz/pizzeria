import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sortType: { name: 'популярности', sortProperty: 'rating' },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSortType(state, action) {
      state.sortType = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
  },
})

export const { setCategoryId, setSortType, setCurrentPage, setSearchValue } = filterSlice.actions
export default filterSlice.reducer
