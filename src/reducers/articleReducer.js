import uuid from "uuid";

//  Types d'action.
import { 
  GET_ARTICLES,
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  MODIFY_ARTICLE
} from "../actions/types";

const initialState = {
  articles: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    //  Interactions avec les articles.
    case GET_ARTICLES:
      return state;

    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, {id: uuid.v4(), title: action.title, prixUnitaire: action.prixUnitaire}]
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
          return articles;
        })
      };

    default:
      return state;
  }
}