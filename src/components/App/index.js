import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../../redux/reducers";
import rootSaga from "../../redux/Sagas";
import Numbers from "../Numbers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
    return (
        <Provider store={store}>
            <Numbers />
        </Provider>
    );
}

export default App;