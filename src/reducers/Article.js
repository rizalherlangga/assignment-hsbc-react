// article.js

import { GET_ARTICLE } from "../actions/types"; // Pastikan path-nya benar

const initialState = [];

function articleReducer(article = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTICLE:
      return payload;
    default:
      return article;
  }
}

export default articleReducer;
