import {
  GET_ARTICLES,
  MODIFY_ARTICLE,
  REMOVE_ARTICLE,
  ADD_ARTICLE
} from "../actions/types";
import uuid from "uuid";

const initialState = {
  articles: [
    {
      id: uuid.v4(),
      title: "Ananas",
      price: "0.50",
      status: false
    },
    {
      id: uuid.v4(),
      title: "Bananas",
      price: "0.45",
      status: false
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return state;
    case MODIFY_ARTICLE:
      return {
        articles: state.articles.map(article => {
          if (article.id == action.id) {
            (article.title = action.title), (article.price = action.price);
          }
          return article;
        })
      };
    case REMOVE_ARTICLE:
      return {
        articles: [...state.articles.filter(article => article.id != action.id)]
      };
    case ADD_ARTICLE:
      const newArticle = {
        id: uuid.v4(),
        title: action.title,
        price: action.price,
        status: false
      };
      return {
        articles: [...state.articles, newArticle]
      };
    default:
      return state;
  }
}
