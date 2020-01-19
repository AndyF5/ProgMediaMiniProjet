import { GET_PANIER, ADD_TOPANIER } from "./types";

export const getPanier= () => ({
    type: GET_PANIER
});

export const addToPanier = () => ({
    type: ADD_TOPANIER,
    articleID,
    quantite
});