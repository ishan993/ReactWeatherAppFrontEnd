import { TOGGLE_BACKGROUND } from '../actions';

const DEFAULT_STATE = { isBackgroundBlue: false };

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case TOGGLE_BACKGROUND:
            return {...state, isBackgroundBlue: !state.isBackgroundBlue};
        default:
            return state;
    }
};