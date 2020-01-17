import { GET_ARTICLES, ADD_ARTICLE } from "../actions/types";

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return state;
    case ADD_ARTICLE:
      
    default:
      return state;
  }
}