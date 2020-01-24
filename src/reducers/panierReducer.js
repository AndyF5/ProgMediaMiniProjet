//  Types d'action.
import { 
  GET_PANIER,
  ADD_TOPANIER,
  DELETE_FROMPANIER,
  EMPTY_PANIER
} from "../actions/types";

import uuid from "uuid";

//  Lectures des fichiers JSON.
import panierJSON from "../data/panier.json";

let panier = panierJSON.panier;

const initialState = {
  panier: panier
};

export default function(state = initialState, action) {
  switch (action.type) {
    //  Méthodes d'interaction avec le panier.
  case GET_PANIER:
    return state;

  case ADD_TOPANIER:
    return {
      ...state,
      panier: [...state.panier, {id: uuid.v4(), articleID: action.articleID, quantite: parseFloat(action.quantite)}]
    };

  case DELETE_FROMPANIER:
    return {
      ...state,
      panier: [...state.panier.filter(item => item.id != action.id) ]
    };
  case EMPTY_PANIER:
    return {
      panier: []
    }
  default:
    return state;
  }
}