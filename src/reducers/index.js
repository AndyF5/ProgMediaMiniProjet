import { combineReducers } from "redux";

import panierReducer from "./panierReducer";
import facturesReducer from "./facturesReducer";
import clientSoldeReducer from "./clientSoldeReducer";
import articleReducer from "./articleReducer";
import vendeurSoldeReducer from "./vendeurSoldeReducer";

export default combineReducers({
    panierReducer: panierReducer,
    facturesReducer: facturesReducer,
    clientSoldeReducer: clientSoldeReducer,
    articleReducer: articleReducer,
    vendeurSoldeReducer: vendeurSoldeReducer
});