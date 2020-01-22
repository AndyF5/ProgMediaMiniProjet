import { GET_ARTICLES, ADD_ARTICLE, REMOVE_ARTICLE, MODIFY_ARTICLE, CREATE_FACTURE, GET_SOLDEVENDEUR, ADD_TOSOLDEVENDEUR } from "./types";


export const getArticles = () => ({
    type: GET_ARTICLES
});

export const addArticle = (title, prixUnitaire) => ({
    type: ADD_ARTICLE,
    title,
    prixUnitaire
});

export const removeArticle = (id) => ({
    type: REMOVE_ARTICLE,
    id
});

export const modifyArticle = (id, title, prixUnitaire) => ({
    type: MODIFY_ARTICLE,
    id,
    title,
    prixUnitaire
});

export const createFacture = (panier) => ({
    type: CREATE_FACTURE,
    panier
});

export const getSoldeVendeur = () => ({
    type: GET_SOLDEVENDEUR
});

export const addToSoldeVendeur = (montant) => ({
    type: ADD_TOSOLDEVENDEUR,
    montant
});