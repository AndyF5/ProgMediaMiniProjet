import uuid from "uuid";

//  Types d'action.
import { 
  GET_ARTICLES,
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  MODIFY_ARTICLE
} from "../actions/types";

//  Lecture des fichiers JSON.
import articlesJSON from "../data/articles.json";

let articles = articlesJSON.articles;

const initialState = {
  articles: articles,
};

export default function(state = initialState, action) {
  switch (action.type) {
    //  Interactions avec les articles.
    case GET_ARTICLES:
      return state;

    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, {id: uuid.v4(), title: action.title, prixUnitaire: action.prixUnitaire, imageURL: action.imageURL}]
      };

    case REMOVE_ARTICLE:
      return {
        ...state,
        articles: [...state.articles.filter(article => article.id != action.id) ]
      };

    case MODIFY_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(article => {
          if(article.id == action.id) {
            article.title = action.title,
            article.prixUnitaire = action.prixUnitaire
          }
          return article;
        })
      };

    default:
      return state;
  }
}