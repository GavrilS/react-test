import {
    SEARCH_ITEMS,
    CLEAR_ITEMS
} from '../types';


export default (state, action) => {
    switch (action.type) {
        case SEARCH_ITEMS:
            return {
                ...state,
                itemList: action.payload
            };
        case CLEAR_ITEMS:
            return {
                ...state,
                itemList: action.payload
            };
        default:
            return state;
    }
};
