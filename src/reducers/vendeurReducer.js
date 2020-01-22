import { GET_ARTICLES, ADD_ARTICLE, REMOVE_ARTICLE, MODIFY_ARTICLE, CREATE_FACTURE, GET_SOLDEVENDEUR, ADD_TOSOLDEVENDEUR } from "../actions/types";

import articlesJSON from "../data/articles.json";
import soldeVendeurJSON from "../data/soldeVendeur.json";
import facturesJSON from "../data/factures.json";

import uuid from "uuid";

let articles = articlesJSON.articles;
let soldeVendeur = soldeVendeurJSON.soldeVendeur;
let factures = facturesJSON.factures;

const initialState = {
  articles: articles,
  soldeVendeur: soldeVendeur,
  factures: factures
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return state;
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, {id: uuid.v4(), title: action.title, prixUnitaire: action.prixUnitaire}]
      };
    case REMOVE_ARTICLE:
      return {
        ...state,
        articles: [...state.articles.filter(article => article.id != action.id) ]
      };
    case MODIFY_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(article => {
          if(article.id == action.id) {
            article.title = action.title,
            article.prixUnitaire = action.prixUnitaire
          }
          return articles;
        })
      };
    case CREATE_FACTURE:
      return {
        ...state,
        articles: articles,
        factures: [...state.factures, {id: uuid.v4(), panier: action.panier, date: new Date()}]
      };
    case GET_SOLDEVENDEUR:
      return state;
    case ADD_TOSOLDEVENDEUR:
      state,
      soldeVendeur.montant += action.montant
    default:
      return state;
  }
}