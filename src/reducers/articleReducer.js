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
      return {
        ...state,
        articles: action.payload
      }

    case ADD_ARTICLE:
      return {
        ...state,
        articles: action.payload
      };

    case REMOVE_ARTICLE:
      return {
        ...state,
        articles: action.payload
      };

    case MODIFY_ARTICLE:
      return {
        ...state,
        articles: action.payload
      };

    default:
      return state;
  }
}