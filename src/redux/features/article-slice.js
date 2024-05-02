import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getArticle: [], // Ubah dari 'value' menjadi 'getArticle'
};

export const article = createSlice({
  name: "article",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.getArticle = action.payload; // Menyimpan data dari API ke dalam state
    },
  },
});

export const { getData } = article.actions;
export default article.reducer;