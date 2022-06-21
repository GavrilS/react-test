import {
    SEARCH_ITEMS
} from '../types';


export default (state, action) => {
    switch (action.type) {
        case SEARCH_ITEMS:
            return {
                ...state,
                itemList: action.payload
            };
        default:
            return state;
    }
};
