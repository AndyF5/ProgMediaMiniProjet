import { combineReducers } from "redux";
import vendeurReducer from "./vendeurReducer";
import clientReducer from "./clientReducer";

export default combineReducers({
    vendeurReducer: vendeurReducer,
    clientReducer: clientReducer
});