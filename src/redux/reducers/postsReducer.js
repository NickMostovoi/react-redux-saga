import {REQUESTED_POSTS_SUCCEEDED, REQUESTED_POSTS_FAILED} from "../actions/actions.types";

const initialState = {
    posts: []
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_POSTS_SUCCEEDED:
            return {
                posts: action.posts
            };

        case REQUESTED_POSTS_FAILED:
            return {
                error: `Error: ${action.error}`
            };

        default:
            return state;
    }
};

export default postsReducer;