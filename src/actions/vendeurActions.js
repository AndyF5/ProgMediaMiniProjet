import { GET_ARTICLES, ADD_ARTICLE, REMOVE_ARTICLE, MODIFY_ARTICLE, SELECT_ARTICLE } from "./types";


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