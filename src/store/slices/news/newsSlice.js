import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  newsByCategorySelected: [],
  isLoading: false,
  error: null,
};

const sliceName = "news";

export const newsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    fetchNewsStart: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    fetchNewsSuccess: (state, action) => {
      state.news = action.payload;
      state.isLoading = false;
    },
    fetchNewsError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setNewsCategorySelected: (state, action) =>
      void (state.newsByCategorySelected = action.payload),
  },
});

export const fetchNews = createAction(`${sliceName}/fetchNews`);

export const {
  fetchNewsStart,
  fetchNewsSuccess,
  fetchNewsError,
  setNewsCategorySelected,
} = newsSlice.actions;

export default newsSlice.reducer;
