import {REQUESTED_JOKE_SUCCEEDED, REQUESTED_JOKE_FAILED} from "../actions/actions.types";

const initialState = {
    joke: '',
    punchline: ''
};

const numbersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_JOKE_SUCCEEDED:
            return {
                joke: action.joke.setup,
                punchline: action.joke.punchline
            };

        case REQUESTED_JOKE_FAILED:
            return {
                error: `Error: ${action.error}`
            };

        default:
            return state;
    }
};

export default numbersReducer;