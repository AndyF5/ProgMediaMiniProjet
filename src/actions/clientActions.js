import { 
    GET_PANIER,
    ADD_TOPANIER,
    DELETE_FROMPANIER,
    ADD_TOSOLDE, 
    SUBTRACT_FROMSOLDE,
    ARCHIVE_PANIER,
    GET_SOLDE,
    GET_ARCHIVEPANIER 
} from "./types";

import axios from "axios";

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

export const getSolde = (id) => dispatch => {
    axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/client").then(res =>
        dispatch({
            type: GET_SOLDE,
            payload: res.data
        })
    );
};

export const addToSolde = (id, montant) => dispatch => {
    axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/client").then(res =>
        axios.put("http://yyacine.pythonanywhere.com/shop/clpm34/client/" + (parseFloat(res.data.balance) + parseFloat(montant)).toFixed(2)).then(res =>
            axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/client").then(res =>
                dispatch({
                    type: ADD_TOSOLDE,
                    payload: res.data
                })
            )
        )
    )
};

export const subtractFromSolde = (id, montant) => dispatch => {
    axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/client").then(res =>
        axios.put("http://yyacine.pythonanywhere.com/shop/clpm34/client/" + (parseFloat(res.data.balance) - parseFloat(montant)).toFixed(2)).then(res =>
            axios.get("http://yyacine.pythonanywhere.com/shop/clpm34/client").then(res =>
                dispatch({
                    type: SUBTRACT_FROMSOLDE,
                    payload: res.data
                })
            )
        )
    )
}

export const archivePanier = (panierArch, montant) => ({
    type: ARCHIVE_PANIER,
    panierArch,
    montant
});

export const getArchiveCommandes = () => ({
    type: GET_ARCHIVEPANIER
});