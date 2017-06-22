import { REQUEST_WEATHER } from '../actions';
import { REQUEST_TIME_CAPSULE, CLEAR_TIME_CAPSULE } from '../actions';

const DEFAULT_STATE = { forecast: null, timeCapsuleObj: {} };

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case REQUEST_WEATHER:
            return ({ ...state, forecast: action.forecast });
        case REQUEST_TIME_CAPSULE:
            return ({ ...state.timeCapsuleObj, timeCapsuleObj: action.timeCapsuleObj });
            case  CLEAR_TIME_CAPSULE:
                return ({ ...state.timeCapsuleObj, timeCapsuleObj: {} });
        default:
            return state;
    }
};