import {
  GET_PRODUITS,
  MODIFY_PRODUIT,
  REMOVE_PRODUIT,
  ADD_PRODUIT
} from "../actions/types";
import uuid from "uuid";

const initialState = {
  produits: [
    {
      id: uuid.v4(),
      title: "Ananas",
      prix: "50",
      status: false
    },
    {
      id: uuid.v4(),
      title: "Bananas",
      prix: "45",
      status: false
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUITS:
      return state;
    case MODIFY_PRODUIT:
      /*return {
        produits: [...state.produits.update(produit => produit.id = action.id)]
      };*/
      const modProduit = {
        id: produit.id,
        title: action.title,
        prix: action.prix,
        status: !produit.status
      };

      return {
        produits: [...state.produits, modProduit]
      };
    /*case types.ARTICLE_EDIT:
        return {
            ...state,
            articlesById: {
                ...state.articlesById,
                [action.article.id]: {
                    ...state.articlesById[action.article.id],
                    ...action.article
                }
            }
        };*/

    case REMOVE_PRODUIT:
      return {
        produits: [...state.produits.filter(produit => produit.id != action.id)]
      };
    case ADD_PRODUIT:
      const newProduit = {
        id: uuid.v4(),
        title: action.title,
        prix:action.prix,
        status: false
      };

      return {
        produits: [...state.produits, newProduit]
      };
    default:
      return state;
  }
}
