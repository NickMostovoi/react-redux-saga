import * as TYPES from "./actions.types";

export const showLoader = () => {
    return { type: TYPES.SHOW_LOADER }
};

export const hideLoader = () => {
    return { type: TYPES.HIDE_LOADER }
};

export const fetchJoke = () => {
    return { type: TYPES.FETCH_JOKE }
};

export const requestJokeSuccess = (data) => {
    return {
        type: TYPES.REQUESTED_JOKE_SUCCEEDED,
        joke: data
    }
};

export const requestJokeError = (data) => {
    return {
        type: TYPES.REQUESTED_JOKE_FAILED,
        error: data.message
    }
};

export const fetchDog = () => {
    return { type: TYPES.FETCH_DOG }
};

export const requestDogSuccess = (data) => {
    return {
        type: TYPES.REQUESTED_DOG_SUCCEEDED,
        url: data.message
    }
};

export const requestDogError = (data) => {
    return {
        type: TYPES.REQUESTED_DOG_FAILED,
        error: data.message
    }
};

export const fetchPosts = () => {
    return { type: TYPES.FETCH_POSTS }
};

export const requestPostsSuccess = (data) => {
    return {
        type: TYPES.REQUESTED_POSTS_SUCCEEDED,
        posts: data
    }
};

export const requestPostsError = (data) => {
    return {
        type: TYPES.REQUESTED_POSTS_FAILED,
        error: data.message
    }
};

export const fetchCountries = () => {
    return { type: TYPES.FETCH_COUNTRIES }
};

export const filterCountries = (filteredCountries) => {
    return {
        type: TYPES.FILTER_COUNTRIES,
        filteredCountries: filteredCountries
    }
};

export const requestCountriesSuccess = (data) => {
    return {
        type: TYPES.REQUESTED_COUNTRIES_SUCCEEDED,
        countries: data
    }
};

export const requestCountriesError = (data) => {
    return {
        type: TYPES.REQUESTED_COUNTRIES_FAILED,
        error: data.message
    }
};