import {
  GET_PRODUITS,
  MODIFY_PRODUIT,
  REMOVE_PRODUIT,
  ADD_PRODUIT
} from "./types";

export const getProduits = () => ({
  type: GET_PRODUITS
});

export const modifyProduit = (title, prix) => ({
  type: MODIFY_PRODUIT,
  title,
  prix
});

export const removeProduit = id => ({
  type: REMOVE_PRODUIT,
  id
});

export const addProduit = (title, prix) => ({
  type: ADD_PRODUIT,
  title,
  prix
});
