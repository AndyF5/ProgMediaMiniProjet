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
        soldes: soldes,
        panierArchive: panierArchive,
        panier: [...state.panier, {id: uuid.v4(), articleID: action.articleID, quantite: parseFloat(action.quantite)}]
      };
    case DELETE_FROMPANIER:
      return {
        soldes: soldes,
        panierArchive: panierArchive,
        panier: [...state.panier.filter(item => item.id != action.id) ]
      };
    case GET_SOLDE:
      return state;
    case ADD_TOSOLDE:
      return {
        panier: panier,
        panierArchive: panierArchive,
        soldes: state.soldes.map(solde => {
          if(solde.id == action.id) {
            solde.montant += parseFloat(action.montant)
          }
          return solde;
        })
      };
    case ARCHIVE_PANIER:
      return {
        panierArchive: [...state.panierArchive, {id: uuid.v4(), panier: state.panier, date: new Date(), montant: action.montant}],
        panier: [],
        soldes: soldes
      }
    case GET_ARCHIVEPANIER:
      return state;
    case SUBTRACT_FROMSOLDE:
      return {
        panier: panier,
        panierArchive: panierArchive,
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