import { GET_PANIER, ADD_TOPANIER } from "../actions/types";

import panierJSON from "../data/panier.json";

import uuid from "uuid";

let panier = panierJSON.panier;

const initialState = {
  panier: panier
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PANIER:
      return state;
    case ADD_TOPANIER:
      return {
        panier: [...state.panier, {id: uuid.v4(), articleID: action.articleID, quantite: action.quantite}]
      };
    default:
      return state;
  }
}