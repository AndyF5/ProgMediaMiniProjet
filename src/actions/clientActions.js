import {
    GET_ARTICLES,
    MODIFY_SOLDE,
    REMOVE_PANIER,
    ADD_PANIER,
    PAID_PANIER,
    GET_ARTICLESDISPO
  } from "./types";
  
  export const getArticles = () => ({
    type: GET_ARTICLES
  });
  
  export const addSolde = (solde_p) => ({
    type: MODIFY_SOLDE,
    solde_p
  });
  
  export const removePanier = id_p => ({
    type: REMOVE_PANIER,
    id_p
  });
  
  export const addPanier = (id_p,title_p, price_p,quantite_p) => ({
    type: ADD_PANIER,
    id_p,
    title_p,
    price_p,
    quantite_p
  });
  export const paidPanier = (title_p, price_p) => ({
    type: PAID_PANIER,
    title_p,
    price_p
  });
  export const getArticlesDispo = (id_p) => ({
    type: GET_ARTICLESDISPO,
    id_p
  });
  