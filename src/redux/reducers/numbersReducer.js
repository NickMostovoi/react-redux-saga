import {REQUESTED_FACT_SUCCEEDED, REQUESTED_FACT_FAILED} from "../actions/actions.types";

const initialState = {
    fact: ''
};

const numbersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_FACT_SUCCEEDED:
            return {
                fact: action.fact
            };

        case REQUESTED_FACT_FAILED:
            return {
                error: `Error: ${action.error}`
            };

        default:
            return state;
    }
};

export default numbersReducer;