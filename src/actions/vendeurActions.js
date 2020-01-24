import {
  GET_ARTICLES,
  MODIFY_ARTICLE,
  REMOVE_ARTICLE,
  ADD_ARTICLE
} from "./types";

export const getArticles = () => ({
  type: GET_ARTICLES
});

export const modifyArticle = (id, title, price) => ({
  type: MODIFY_ARTICLE,
  id,
  title,
  price
});

export const removeArticle = id => ({
  type: REMOVE_ARTICLE,
  id
});

export const addArticle = (title, price) => ({
  type: ADD_ARTICLE,
  title,
  price
});
