import {put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {FETCH_JOKE, FETCH_DOG, FETCH_POSTS, FETCH_COUNTRIES} from "../actions/actions.types";
import {
    requestCountriesSuccess,
    requestCountriesError,
    requestPostsSuccess,
    requestPostsError,
    requestJokeSuccess,
    requestJokeError,
    requestDogSuccess,
    requestDogError,
    showLoader,
    hideLoader
} from '../actions'

export default function* rootSaga() {
    yield takeEvery(FETCH_JOKE, fetchJokeAsync);
    yield takeEvery(FETCH_DOG, fetchDogAsync);
    yield takeEvery(FETCH_POSTS, fetchPostsAsync);
    yield takeEvery(FETCH_COUNTRIES, fetchCountriesAsync);
}

function* fetchJokeAsync() {
    try {
        yield put(showLoader());
        const data = yield getData('https://official-joke-api.appspot.com/random_joke');
        yield put(requestJokeSuccess(data));
        yield put(hideLoader());
    } catch (error) {
        yield put(requestJokeError(error));
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

function* fetchCountriesAsync() {
    try {
        yield put(showLoader());
        const data = yield getData(`https://restcountries.com/v3.1/all`);
        yield put(requestCountriesSuccess(data));
        yield put(hideLoader());
    } catch (error) {
        yield put(requestCountriesError(error));
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