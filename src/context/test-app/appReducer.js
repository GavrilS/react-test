import {
    GET_ITEMS
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                itemCollection: action.payload
            };
        default:
            return state;
    }
};
