import {combineReducers} from "redux";
import numbersReducer from './numbersReducer'
import dogsReducer from "./dogsReducer";
import loadersReducer from "./loadersReducer";

const rootReducer = combineReducers({
    loadersReducer,
    numbersReducer,
    dogsReducer,
});

export default rootReducer;