import { GET_ARTICLES, ADD_ARTICLE, REMOVE_ARTICLE, MODIFY_ARTICLE } from "../actions/types";

import articlesJSON from "../data/articles.json";

import uuid from "uuid";

let articles = articlesJSON.articles;

const initialState = {
  articles: articles
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return state;
    case ADD_ARTICLE:
      return {
        articles: [...state.articles, {id: uuid.v4(), title: action.title, prixUnitaire: action.prixUnitaire}]
      };
    case REMOVE_ARTICLE:
      return {
        articles: [...state.articles.filter(article => article.id != action.id) ]
      };
    case MODIFY_ARTICLE:
      return {
        articles: state.articles.map(article => {
          if(article.id == action.id) {
            article.title = action.title,
            article.prixUnitaire = action.prixUnitaire
          }
          return articles;
        })
      }
    default:
      return state;
  }
}