import {put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {FETCH_FACT, FETCH_DOG, FETCH_POSTS, FETCH_NEWS} from "../actions/actions.types";
import {
    requestNewsSuccess,
    requestNewsError,
    requestPostsSuccess,
    requestPostsError,
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
    yield takeEvery(FETCH_POSTS, fetchPostsAsync);
    yield takeEvery(FETCH_NEWS, fetchNewsAsync);
}

function* fetchFactAsync() {
    try {
        yield put(showLoader());
        const data = yield getData('https://numbersapi.com/random');
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

function* fetchPostsAsync() {
    try {
        yield put(showLoader());
        const data = yield getData('https://jsonplaceholder.typicode.com/posts');
        const updatedData = data.slice(0, 20);
        yield put(requestPostsSuccess(updatedData));
        yield put(hideLoader());
    } catch (error) {
        yield put(requestPostsError(error));
        yield put(hideLoader());
    }
}

function* fetchNewsAsync({searchValue}) {
    try {
        yield put(showLoader());
        const data = yield getData(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=4cae876b3c5649b587a703559ee0743a`);
        yield put(requestNewsSuccess(data));
        yield put(hideLoader());
    } catch (error) {
        yield put(requestNewsError(error));
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