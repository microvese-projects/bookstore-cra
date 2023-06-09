import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7eYGb1rtI2H338Czh3wT/books';

const initialState = {
  booksArr: [],
  posted: false,
  loading: false,
  success: false,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const resp = await axios(URL);
    return resp.data;
  } catch (err) {
    return err.message;
  }
});

export const postBooks = createAsyncThunk('books/postBookApi', async (book) => {
  try {
    const resp = await axios.post(URL, book);
    return resp.data;
  } catch (err) {
    return err.message;
  }
});

export const removeBookApi = createAsyncThunk('books/removeBookApi', async (id) => {
  const removeURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7eYGb1rtI2H338Czh3wT/books/${id}`;
  try {
    const resp = await axios.delete(removeURL);
    return resp.data;
  } catch (err) {
    return err.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;

        const dataKeys = Object.keys(action.payload);

        state.booksArr = dataKeys.map((key) => ({
          item_id: key,
          ...action.payload[key][0],
        }));
        state.posted = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(postBooks.fulfilled, (state, action) => {
        state.posted = true;
        state.success = true;
        state.booksArr.push(action.meta.arg);
      })
      .addCase(removeBookApi.fulfilled, (state, action) => {
        state.booksArr = state.booksArr.filter((each) => each.item_id !== action.meta.arg);
      })
      .addCase(removeBookApi.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
