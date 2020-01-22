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

//  Lectures des fichiers JSON.
import panierJSON from "../data/panier.json";
import soldesJSON from "../data/soldes.json";

let panier = panierJSON.panier;
let soldes = soldesJSON.soldes;

const initialState = {
  panier: panier,
  soldes: soldes,
  panierArchive: []
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

    //  Archive de paniers (commande déja passés).
    case ARCHIVE_PANIER:
      return {
        ...state,
        panierArchive: [...state.panierArchive, {id: uuid.v4(), panier: action.panierArch, date: new Date(), montant: action.montant}],
        panier: []
      };

    case GET_ARCHIVEPANIER:
      return state;

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