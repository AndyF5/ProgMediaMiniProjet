import { combineReducers } from "redux";

import produitReducer from "./produitReducer";

export default combineReducers({
  produitReducer: produitReducer
});