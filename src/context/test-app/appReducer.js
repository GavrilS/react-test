import {
    GET_ITEMS,
    GET_ITEM
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                itemCollection: action.payload
            };
        case GET_ITEM:
            return {
                ...state,
                searchItem: action.payload
            };
        default:
            return state;
    }
};
