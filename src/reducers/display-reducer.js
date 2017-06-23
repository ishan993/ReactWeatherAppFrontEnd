import { LOADING_DATA, FINISHED_LOADING_DATA } from '../actions';
import { SERVER_CONNECTED, SERVER_DISCONNECTED } from '../actions';

const DEFAULT_STATE = { isServerConnected: true, isLoading: true };

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case LOADING_DATA:
            console.log('trying----->>>');
            return { ...state, isLoading: true };
        case FINISHED_LOADING_DATA:
            return { ...state, isLoading: false};
        case SERVER_CONNECTED:
            return { ...state, isServerConnected: true };
        case SERVER_DISCONNECTED:
            return { ...state, isServerConnected: false };
        default:
            return state;
    }
};
