import {put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {FETCH_FACT, FETCH_DOG} from "../actions/actions.types";
import {
    requestFactSuccess,
    requestFactError,
    requestDogSuccess,
    requestDogError,
    showLoader,
    hideLoader
} from '../actions'

export default function* rootSaga() {
    yield takeEvery(FETCH_FACT, fetchFactAsync);
    yield takeEvery(FETCH_DOG, fetchDogAsync);
}

function* fetchFactAsync() {
    try {
        yield put(showLoader());
        const data = yield getData('http://numbersapi.com/random');
        yield put(requestFactSuccess(data));
        yield put(hideLoader());
    } catch (error) {
        yield put(requestFactError(error));
        yield put(hideLoader());
    }
}

function* fetchDogAsync() {
    try {
        yield put(showLoader());
        const data = yield getData('https://dog.ceo/api/breeds/image/random');
        yield put(requestDogSuccess(data));
        yield put(hideLoader());
    } catch (error) {
        yield put(requestDogError(error));
        yield put(hideLoader());
    }
}

async function getData(request) {
    return await axios.get(request)
        .then(response => {
            console.log(response);
            return response.data;
        });
}