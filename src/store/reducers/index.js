import { combineReducers } from "redux";
import { skincReducer } from "./skinc.js";

const rootReducers = combineReducers({
    skinc: skincReducer
})

export default rootReducers;