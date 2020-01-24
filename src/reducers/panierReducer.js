import {
  GET_ARTICLES,
  MODIFY_SOLDE,
  REMOVE_PANIER,
  ADD_PANIER,
  PAID_PANIER,
  GET_ARTICLESDISPO
} from "./types";
import uuid from "uuid";


const initialState = {
  articles_p: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return state;
    case MODIFY_SOLDE:
      return state;
    case REMOVE_PANIER:
      return state;
    case ADD_PANIER:
      const newArticlePanier = {
        id_p: uuid.v4(),
        title_p: action.title_p,
        price_p: action.price_p,
        quantite_p: action.quantite_p,
        status: false
      };
      return {
        articles_p: [...state.articles_p, newArticlePanier]
      };
    case PAID_PANIER:
      return state;
    default:
      return state;
  }
}
