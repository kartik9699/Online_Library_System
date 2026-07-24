import { configureStore } from '@reduxjs/toolkit'
import booksSliceReducer from './Bookslice'
import genreSliceReducer from './GenreSlice'

export const store = configureStore({
  reducer: {
    books:booksSliceReducer,
    category:genreSliceReducer,
  },
})