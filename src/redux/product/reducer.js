import { createSlice } from '@reduxjs/toolkit'

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    currentItems: [],
  },
  reducers: {
    setCurrentItem: (state, action) => {
      state.currentItems = action.payload;
    },
  }
});

export const { setCurrentItem } = itemSlice.actions;
export default itemSlice.reducer;