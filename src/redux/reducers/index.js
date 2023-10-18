import {combineReducers} from "redux";
import jokesReducer from './jokesReducer'
import dogsReducer from "./dogsReducer";
import loadersReducer from "./loadersReducer";
import postsReducer from "./postsReducer";
import countriesReducer from "./countriesReducer";

const rootReducer = combineReducers({
    loadersReducer,
    jokesReducer,
    dogsReducer,
    postsReducer,
    countriesReducer,
});

export default rootReducer;