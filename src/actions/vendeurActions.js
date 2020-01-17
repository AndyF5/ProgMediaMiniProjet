import { GET_ARTICLES, ADD_ARTICLE, REMOVE_ARTICLE, MODIFY_ARTICLE } from "./types";


export const getArticles = () => ({
    type: GET_ARTICLES,
    articles: articles
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

export const modifyARTICLE = (id, title, prixUnitaire) => ({
    type: MODIFY_ARTICLE,
    id,
    title,
    prixUnitaire
});