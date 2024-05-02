import { configureStore } from "@reduxjs/toolkit";
import { article } from "./features/article-slice"; // Ubah path sesuai dengan struktur proyek Anda

export const store = configureStore({
  reducer: {
    article: article.reducer,
  },
});