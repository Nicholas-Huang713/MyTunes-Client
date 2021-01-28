import {SEARCH_MUSIC} from '../actions/types';

const initialState = {
    searchList: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_MUSIC:
            return {
                ...state,
                searchList: action.payload
            }
        default:
            return state;
    }
}