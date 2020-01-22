//  Types d'action.
import { 
  GET_SOLDE,
  ADD_TOSOLDE,
  SUBTRACT_FROMSOLDE
} from "../actions/types";

import uuid from "uuid";

//  Lectures des fichiers JSON.
import soldesJSON from "../data/soldes.json";

let soldes = soldesJSON.soldes;

const initialState = {
  soldes: soldes
};
  
export default function(state = initialState, action) {
  switch (action.type) {
    //  Interaction avec le solde du client.
    case GET_SOLDE:
      return state;

    case ADD_TOSOLDE:
      return {
        ...state,
        soldes: state.soldes.map(solde => {
          if(solde.id == action.id) {
            solde.montant += parseFloat(action.montant)
          }
          return solde;
        })
      };

    case SUBTRACT_FROMSOLDE:
      return {
        ...state,
        soldes: state.soldes.map(solde => {
          if(solde.id == action.id) {
            solde.montant -= parseFloat(action.montant)
          }
          return solde;
        })
      };

    default:
      return state;
  }
}