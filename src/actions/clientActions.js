import {
  GET_PANIER,
  ADD_TOPANIER,
  DELETE_FROMPANIER,
  ADD_TOSOLDE,
  SUBTRACT_FROMSOLDE,
  ARCHIVE_PANIER,
  GET_SOLDE,
  GET_ARCHIVEPANIER,
  EMPTY_PANIER
} from "./types";

export const getPanier = () => ({
  type: GET_PANIER
});

export const addToPanier = (articleID, quantite) => ({
  type: ADD_TOPANIER,
  articleID,
  quantite
});

export const emptyPanier = () => ({
  type: EMPTY_PANIER
});

export const deleteFromPanier = id => ({
  type: DELETE_FROMPANIER,
  id
});

export const getSolde = id => ({
  type: GET_SOLDE,
  id
});

export const addToSolde = (id, montant) => ({
  type: ADD_TOSOLDE,
  id,
  montant
});

export const subtractFromSolde = (id, montant) => ({
  type: SUBTRACT_FROMSOLDE,
  id,
  montant
});

export const archivePanier = (panierArch, montant) => ({
  type: ARCHIVE_PANIER,
  panierArch,
  montant
});

export const getArchiveCommandes = () => ({
  type: GET_ARCHIVEPANIER
});
