import { LOADING_DATA, FINISHED_LOADING_DATA } from '../actions';

const DEFAULT_STATE = { isBackgroundBlue: false, isLoading: true };

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case LOADING_DATA:
            console.log('trying----->>>');
            return { ...state, isLoading: true };
        case FINISHED_LOADING_DATA:
            return { ...state, isLoading: false};
        default:
            return state;
    }
};
