import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      console.log(state, action);
    },
    removeBook: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
