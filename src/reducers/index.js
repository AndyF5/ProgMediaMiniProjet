import { combineReducers } from "redux";
import vendeurReducer from "./vendeurReducer";
import clientReducer from "./clientReducer";

import panierReducer from "./panierReducer";

export default combineReducers({
    vendeurReducer: vendeurReducer,
    clientReducer: clientReducer
});