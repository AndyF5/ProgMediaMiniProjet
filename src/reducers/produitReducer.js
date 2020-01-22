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
      return {
        produits: state.produits.map(produit=>{
          if(produit.id==action.id){
            produit.title=action.title,
            produit.prix=action.prix
          }
          return produit;
        })
      };
    case REMOVE_PRODUIT:
      return {
        produits: [...state.produits.filter(produit => produit.id != action.id)]
      };
    case ADD_PRODUIT:
      const newProduit = {
        id: uuid.v4(),
        title: action.title,
        prix: action.prix,
        status: false
      };

      return {
        produits: [...state.produits, newProduit]
      };
    default:
      return state;
  }
}
