import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalCount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload)
    },
  },
})
