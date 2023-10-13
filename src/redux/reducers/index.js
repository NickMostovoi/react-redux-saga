import {combineReducers} from "redux";
import numbersReducer from './numbersReducer'
import dogsReducer from "./dogsReducer";
import loadersReducer from "./loadersReducer";
import postsReducer from "./postsReducer";
import countriesReducer from "./countriesReducer";

const rootReducer = combineReducers({
    loadersReducer,
    numbersReducer,
    dogsReducer,
    postsReducer,
    countriesReducer,
});

export default rootReducer;