import {combineReducers} from "redux";
import numbersReducer from './numbersReducer'
import dogsReducer from "./dogsReducer";
import loadersReducer from "./loadersReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    loadersReducer,
    numbersReducer,
    dogsReducer,
    postsReducer,
});

export default rootReducer;