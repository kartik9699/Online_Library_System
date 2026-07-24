import { createSlice } from '@reduxjs/toolkit';
import Books from './BooksData';
const initialState = {
  booksList: Books
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksList.unshift(action.payload);
    },

  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;