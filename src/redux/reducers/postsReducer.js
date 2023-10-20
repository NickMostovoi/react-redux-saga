import {REQUESTED_POSTS_SUCCEEDED, REQUESTED_POSTS_FAILED, CHANGE_SORT_ORDER} from "../actions/actions.types";

const initialState = {
    posts: [],
    sort: 'a-b'
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SORT_ORDER:
            return {
                ...state,
                sort: state.sort === 'a-b' ? 'b-a' : 'a-b'
            };

        case REQUESTED_POSTS_SUCCEEDED:
            return {
                ...state,
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