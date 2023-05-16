import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesArr: [],
  completed: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.completed = state.categoriesArr.length > 0;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
