import {REQUESTED_COUNTRIES_SUCCEEDED, FILTER_COUNTRIES, REQUESTED_COUNTRIES_FAILED} from "../actions/actions.types";

const initialState = {
    countries: []
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_COUNTRIES:
            return {
                ...state,
                filteredCountries: action.filteredCountries
            };

        case REQUESTED_COUNTRIES_SUCCEEDED:
            return {
                countries: action.countries
            };

        case REQUESTED_COUNTRIES_FAILED:
            return {
                error: `Error: ${action.error}`
            };

        default:
            return state;
    }
};

export default countriesReducer;