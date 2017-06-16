import { TOGGLE_BACKGROUND } from '../actions';
import { LOADING_DATA, FINISHED_LOADING_DATA } from '../actions';

const DEFAULT_STATE = { isBackgroundBlue: false, isLoading: true };

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case TOGGLE_BACKGROUND:
            return { ...state, isBackgroundBlue: !state.isBackgroundBlue };
        case LOADING_DATA:
            return { ...state, isLoading: true };
        case FINISHED_LOADING_DATA:
            return { ...state, isLoading: false};
        default:
            return state;
    }
};
