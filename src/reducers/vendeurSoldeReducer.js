import uuid from "uuid";

//  Types d'action.
import {
  GET_SOLDEVENDEUR,
  ADD_TOSOLDEVENDEUR 
} from "../actions/types";

const initialState = {
  soldeVendeur: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    //  Interaction avec le solde du vendeur.
    case GET_SOLDEVENDEUR:
      return {
        ...state,
        soldeVendeur: parseFloat(action.payload.gain)
      }

    case ADD_TOSOLDEVENDEUR:
      return {
        ...state,
        soldeVendeur: parseFloat(action.payload.gain)
      }

    default:
      return state;
  }
}