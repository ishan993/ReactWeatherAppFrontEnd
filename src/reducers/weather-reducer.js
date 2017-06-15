import { REQUEST_WEATHER } from '../actions';

const DEFAULT_STATE = { forecast: {} };

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case REQUEST_WEATHER:
            return ({ ...state, forecast: action.forecast });
        default:
            return state;
    }
};