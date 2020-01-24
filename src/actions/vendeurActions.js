import { GET_ARTICLES, ADD_ARTICLE, REMOVE_ARTICLE, MODIFY_ARTICLE, CREATE_FACTURE, GET_SOLDEVENDEUR, ADD_TOSOLDEVENDEUR } from "./types";
import axios from "axios";

export const getArticles = () => dispatch => {
    axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/items/").then(res =>
        dispatch({
            type: GET_ARTICLES,
            payload: res.data
        })
    );
};

export const addArticle = (title, price) => dispatch => {
    axios.post("http://yyacine.pythonanywhere.com/shop/clpm34/item/" + title + "/" + price).then(res =>
        dispatch({
            type: ADD_ARTICLE,
            payload: {
                title: title,
                price: price
            }
        })
    );
};
/*
export const addArticle = (title, price) => ({
    type: ADD_ARTICLE,
    title,
    price
});
*/
export const removeArticle = (id) => ({
    type: REMOVE_ARTICLE,
    id
});

export const modifyArticle = (id, title, price) => ({
    type: MODIFY_ARTICLE,
    id,
    title,
    price
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