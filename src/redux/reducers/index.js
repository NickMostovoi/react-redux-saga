import {combineReducers} from "redux";
import numbersReducer from './numbersReducer'
import dogsReducer from "./dogsReducer";
import loadersReducer from "./loadersReducer";
import postsReducer from "./postsReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    loadersReducer,
    numbersReducer,
    dogsReducer,
    postsReducer,
    newsReducer,
});

export default rootReducer;