import * as TYPES from "./actions.types";

export const showLoader = () => {
    return { type: TYPES.SHOW_LOADER }
};

export const hideLoader = () => {
    return { type: TYPES.HIDE_LOADER }
};

export const fetchFact = () => {
    return { type: TYPES.FETCH_FACT }
};

export const requestFactSuccess = (data) => {
    return {
        type: TYPES.REQUESTED_FACT_SUCCEEDED,
        fact: data
    }
};

export const requestFactError = (data) => {
    return {
        type: TYPES.REQUESTED_FACT_FAILED,
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

export const fetchNews = (searchValue) => {
    return {
        type: TYPES.FETCH_NEWS,
        searchValue: searchValue
    }
};

export const requestNewsSuccess = (data) => {
    return {
        type: TYPES.REQUESTED_NEWS_SUCCEEDED,
        news: data.articles
    }
};

export const requestNewsError = (data) => {
    return {
        type: TYPES.REQUESTED_NEWS_FAILED,
        error: data.message
    }
};