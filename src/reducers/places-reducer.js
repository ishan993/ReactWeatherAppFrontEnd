import { REQUEST_SUGGESTIONS } from '../actions';
import { INVALIDATE_SUGGESTIONS } from '../actions';

const DEFAULT_STATE = { placesSuggestions: [] };

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case REQUEST_SUGGESTIONS:
            return ({...state, placesSuggestions: action.places});
        case INVALIDATE_SUGGESTIONS:
            return ({...state, placesSuggestions: []});
        default:
            return state;
    }
};