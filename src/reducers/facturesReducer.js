//  Types d'action.
import { 
  GET_PANIER,
  ADD_TOPANIER,
  DELETE_FROMPANIER,
  GET_SOLDE,
  ADD_TOSOLDE,
  SUBTRACT_FROMSOLDE,
  ARCHIVE_PANIER,
  GET_ARCHIVEPANIER 
} from "../actions/types";
  
import uuid from "uuid";

const initialState = {
  factures: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    //  Archive de paniers (commande déja passés).
    case ARCHIVE_PANIER:
      return {
        ...state,
        panierArchive: [...state.panierArchive, {id: uuid.v4(), panier: action.panierArch, date: new Date(), montant: action.montant}],
        panier: []
      };

    case GET_ARCHIVEPANIER:
      return state;

    default:
      return state;
  }
}

