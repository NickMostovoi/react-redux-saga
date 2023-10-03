import { combineReducers } from "redux";
import numbersReducer from './numbersReducer'

const rootReducer = combineReducers({
    numbersReducer,
});

export default rootReducer;