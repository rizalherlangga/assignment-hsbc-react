// articleActions.js

import { GET_ARTICLE } from "./types"; // Pastikan path-nya benar
import DataService from "../services/index";

export const getArticle = () => async (dispatch) => {
  try {
    const res = await DataService.getAll();

    dispatch({
      type: GET_ARTICLE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
