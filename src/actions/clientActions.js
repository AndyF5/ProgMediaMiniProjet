import { GET_PANIER, ADD_TOPANIER, DELETE_FROMPANIER, ADD_TOSOLDE, SUBTRACT_FROMSOLDE, CREATE_FACTURE } from "./types";

export const getPanier= () => ({
    type: GET_PANIER
});

export const addToPanier = (articleID, quantite) => ({
    type: ADD_TOPANIER,
    articleID,
    quantite
});

export const deleteFromPanier = (id) => ({
    type: DELETE_FROMPANIER,
    id
});

export const getSolde = (id) => ({
    type: GET_PANIER,
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

export const createFacture = (panier) => ({
    type: CREATE_FACTURE,
    panier
});