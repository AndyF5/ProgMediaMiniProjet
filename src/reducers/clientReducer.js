import { GET_PANIER, ADD_TOPANIER, DELETE_FROMPANIER, GET_SOLDE, ADD_TOSOLDE, SUBTRACT_FROMSOLDE, CREATE_FACTURE, ARCHIVE_PANIER, GET_ARCHIVEPANIER } from "../actions/types";

import panierJSON from "../data/panier.json";
import soldesJSON from "../data/soldes.json";
import panierArchiveJSON from "../data/panierArchive.json";

import uuid from "uuid";

let panier = panierJSON.panier;
let soldes = soldesJSON.soldes;
let panierArchive = panierArchiveJSON.panierArchive;

const initialState = {
  panier: panier,
  soldes: soldes,
  panierArchive: panierArchive
};

export default function(state = initialState, action) {
  switch (action.type) {
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
    case ARCHIVE_PANIER:
      return {
        ...state,
        panierArchive: [...state.panierArchive, {id: uuid.v4(), panier: action.panierArch, date: new Date(), montant: action.montant}],
        panier: []
      }
    case GET_ARCHIVEPANIER:
      return state;
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