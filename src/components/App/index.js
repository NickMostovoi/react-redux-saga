import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import {BrowserRouter} from "react-router-dom";
import rootReducer from "../../redux/reducers";
import rootSaga from "../../redux/sagas";
import Navigation from "../Navigation";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        </Provider>
    );
}

export default App;