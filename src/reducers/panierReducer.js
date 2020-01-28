//  Types d'action.
import { 
  GET_PANIER,
  ADD_TOPANIER,
  DELETE_FROMPANIER
} from "../actions/types";

import uuid from "uuid";

const initialState = {
  panier: []
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
  default:
    return state;
  }
}