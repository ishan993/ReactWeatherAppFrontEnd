import { REQUEST_SUGGESTIONS } from '../actions';
import { INVALIDATE_SUGGESTIONS } from '../actions';
import { SET_PLACE_ID } from '../actions';

const DEFAULT_STATE = { placesSuggestions: [], placeId: 'ChIJOwg_06VPwokRYv534QaPC8g' };

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case REQUEST_SUGGESTIONS:
            return ({ ...state, placesSuggestions: action.places });
        case INVALIDATE_SUGGESTIONS:
            return ({ ...state, placesSuggestions: [] });
        case SET_PLACE_ID:
            return ({ ...state, placeId: action.placeId });
        default:
            return state;
    }
};