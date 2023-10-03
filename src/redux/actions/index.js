import {FETCHED_FACT, REQUESTED_FACT_SUCCEEDED, REQUESTED_FACT_FAILED} from "./actions.types";

export const fetchFact = () => {
    return { type: FETCHED_FACT }
};

export const requestFactSuccess = (data) => {
    return {
        type: REQUESTED_FACT_SUCCEEDED,
        fact: data
    }
};

export const requestFactError = (data) => {
    return {
        type: REQUESTED_FACT_FAILED,
        error: data.message
    }
};