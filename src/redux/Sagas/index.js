import {put, takeEvery, call} from 'redux-saga/effects'
import axios from "axios";
import {FETCHED_FACT} from "../actions/actions.types";
import {requestFactSuccess, requestFactError} from '../actions'

export default function* rootSaga() {
    yield takeEvery(FETCHED_FACT, fetchFactAsync);
}

function* fetchFactAsync() {
    try {
        const data = yield call(getData);
        yield put(requestFactSuccess(data));
    } catch (error) {
        yield put(requestFactError(error));
    }
}

async function getData() {
    return await axios.get('http://numbersapi.com/random')
        .then(response => response.data);
}