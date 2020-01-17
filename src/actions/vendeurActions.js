import { GET_ARTICLES, ADD_ARTICLE, REMOVE_ARTICLE, MODIFY_ARTCILE } from "./types";

import articles from "../data/articles.json";

export const getArticles = () => ({
    type: GET_ARTICLES,
    articles: articles
});

export const addArticle = (id, title, prixUnitaire) => ({
    type: ADD_ARTICLE
});

export const removeArticle = () => ({
    type: REMOVE_ARTICLE
});

export const modifyARTICLE = () => ({
    type: MODIFY_ARTCILE
});