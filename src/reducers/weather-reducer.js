import { REQUEST_WEATHER } from '../actions';

const DEFAULT_STATE = { weather: {} };

export default (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case REQUEST_WEATHER:
            console.log('Reducer weather: '+JSON.stringify(action.weather));
            break;
        default:
            return state;
    }
};