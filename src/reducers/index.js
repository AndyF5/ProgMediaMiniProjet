import { combineReducers } from "redux";
import vendeurReducer from "./vendeurReducer";

import panierReducer from "./panierReducer";
import facturesReducer from "./facturesReducer";
import clientSoldeReducer from "./clientSoldeReducer";

export default combineReducers({
    vendeurReducer: vendeurReducer,
    panierReducer: panierReducer,
    facturesReducer: facturesReducer,
    clientSoldeReducer: clientSoldeReducer
});