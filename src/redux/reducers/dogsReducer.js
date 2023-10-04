import {REQUESTED_DOG_SUCCEEDED, REQUESTED_DOG_FAILED} from "../actions/actions.types";

const initialState = {
    url: ''
};

const dogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_DOG_SUCCEEDED:
            return {
                url: action.url
            };

        case REQUESTED_DOG_FAILED:
            return {
                error: `Error: ${action.error}`
            };

        default:
            return state;
    }
};

export default dogsReducer;