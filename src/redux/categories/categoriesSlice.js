import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesArr: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categoriesArr = action.payload === 'Under construction' ? 'Under construction' : state.categoriesArr;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
