import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7eYGb1rtI2H338Czh3wT/books';

const initialState = {
  booksArr: [],
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const resp = await axios(URL);
  return [...resp.data];
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        itemId: `item${Math.floor(Math.random() * 100)}`,
        ...action.payload,
      };
      state.booksArr = [...state.booksArr, newBook];
    },
    removeBook: (state, action) => {
      const id = action.payload;
      state.booksArr = state.booksArr.filter((each) => each.itemId !== id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.booksArr = action.payload;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
