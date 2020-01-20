import { GET_PANIER, ADD_TOPANIER, DELETE_FROMPANIER, GET_SOLDE, ADD_TOSOLDE, SUBTRACT_FROMSOLDE, CREATE_FACTURE } from "../actions/types";

import panierJSON from "../data/panier.json";
import soldesJSON from "../data/soldes.json";
import facturesJSON from "../data/factures.json";

import uuid from "uuid";

let panier = panierJSON.panier;
let soldes = soldesJSON.soldes;
let factures = facturesJSON.factures;

const initialState = {
  panier: panier,
  soldes: soldes,
  factures: factures
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PANIER:
      return state;
    case ADD_TOPANIER:
      return {
        panier: [...state.panier, {id: uuid.v4(), articleID: action.articleID, quantite: action.quantite}]
      };
    case DELETE_FROMPANIER:
      return {
        panier: [...state.panier.filter(item => item.id != action.id) ]
      };
    case GET_SOLDE:
      return state;
    case ADD_TOSOLDE:
      return {
        panier: panier,
        soldes: state.soldes.map(solde => {
          if(solde.id == action.id) {
            solde.montant += parseFloat(action.montant)
          }
          return solde;
        })
      };
    case SUBTRACT_FROMSOLDE:
      return {
        panier: panier,
        soldes: state.soldes.map(solde => {
          if(solde.id == action.id) {
            solde.montant -= parseFloat(action.montant)
          }
          return solde;
        })
      };
    case CREATE_FACTURE:
      return {
        factures: [...state.factures, {id: action.panier.id, panier: action.panier, date: undefined, confirmed: false}]
      };
    default:
      return state;
  }
}