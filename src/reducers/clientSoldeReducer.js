//  Types d'action.
import { 
  GET_SOLDE,
  ADD_TOSOLDE,
  SUBTRACT_FROMSOLDE
} from "../actions/types";

import uuid from "uuid";

const initialState = {
  balance: 0
};
  
export default function(state = initialState, action) {
  switch (action.type) {
    //  Interaction avec le solde du client.
    case GET_SOLDE:
      return {
        ...state,
        balance: parseFloat(action.payload.balance)
      }

    case ADD_TOSOLDE:
      return {
        ...state,
        balance: parseFloat(action.payload.balance)
      };

    case SUBTRACT_FROMSOLDE:
      return {
        ...state,
        balance: parseFloat(action.payload.balance)
      };

    default:
      return state;
  }
}