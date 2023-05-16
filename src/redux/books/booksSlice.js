import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [
    {
      itemId: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemId: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemId: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      console.log(state, action);
    },
    removeBook: (state, action) => {
      const id = action.payload;
      state.booksArr = state.booksArr.filter((each) => each.itemId !== id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
