import uuid from "uuid";

//  Types d'action.
import {
  GET_SOLDEVENDEUR,
  ADD_TOSOLDEVENDEUR 
} from "../actions/types";

//  Lecture des fichiers JSON.
import soldeVendeurJSON from "../data/soldeVendeur.json";

let soldeVendeur = soldeVendeurJSON.soldeVendeur;

const initialState = {
  soldeVendeur: soldeVendeur,
};

export default function(state = initialState, action) {
  switch (action.type) {
    //  Interaction avec le solde du vendeur.
    case GET_SOLDEVENDEUR:
      return state;

    case ADD_TOSOLDEVENDEUR:
      soldeVendeur.montant += action.montant
      return state;

    default:
      return state;
  }
}