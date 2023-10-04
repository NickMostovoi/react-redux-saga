import {SHOW_LOADER, HIDE_LOADER} from "../actions/actions.types";

const initialState = {
    showLoader: false
};

const loadersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                showLoader: true
            };

        case HIDE_LOADER:
            return {
                showLoader: false
            };

        default:
            return state;
    }
};

export default loadersReducer;