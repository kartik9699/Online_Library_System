import { createSlice } from '@reduxjs/toolkit';
import Category from './Category';
const initialState = {
  categoryList: Category
};

export const genreSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    
  },
});

//export const {  } = booksSlice.actions;
export default genreSlice.reducer;