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
    axios.post("http://yyacine.pythonanywhere.com/shop/clpm34/item/" + title + "/" + price.toFixed(2)).then(res =>
        axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/items/").then(res => 
            dispatch({
                type: ADD_ARTICLE,
                payload: res.data
            })
        )
    )
};

export const removeArticle = (id) => dispatch => {
    axios.delete("http://yyacine.pythonanywhere.com/shop/clpm34/item/" + id).then(res =>
        axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/items/").then(res => 
            dispatch({
                type: REMOVE_ARTICLE,
                payload: res.data
            })
        )
    );
};

export const modifyArticle = (id, title, price) =>  dispatch => {
    axios.put("http://yyacine.pythonanywhere.com/shop/clpm34/item/" + id + "/" + title + "/" + price.toFixed(2)).then(res =>
        axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/items/").then(res => 
            dispatch({
                type: MODIFY_ARTICLE,
                payload: res.data
            })
        )
    );
};

export const createFacture = (panier) => ({
    type: CREATE_FACTURE,
    panier
});

export const getSoldeVendeur = () => dispatch => {
    axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/seller").then(res =>
        dispatch({
            type: GET_SOLDEVENDEUR,
            payload: res.data
        })
    );
};

export const addToSoldeVendeur = (montant) => dispatch => {
    axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/seller").then(res =>
        axios.put("http://yyacine.pythonanywhere.com/shop/clpm34/seller/" + (parseFloat(res.data.gain) + parseFloat(montant)).toFixed(2)).then(res =>
            axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/seller").then(res =>
                dispatch({
                    type: ADD_TOSOLDEVENDEUR,
                    payload: res.data
                })
            )
        )
    )
};