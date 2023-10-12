import {REQUESTED_NEWS_SUCCEEDED, REQUESTED_NEWS_FAILED} from "../actions/actions.types";

const initialState = {
    news: []
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_NEWS_SUCCEEDED:
            return {
                news: action.news
            };

        case REQUESTED_NEWS_FAILED:
            return {
                error: `Error: ${action.error}`
            };

        default:
            return state;
    }
};

export default newsReducer;