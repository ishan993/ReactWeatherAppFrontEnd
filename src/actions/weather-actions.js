import axios from 'axios';

const ROOT_URL = 'https://skycast-backend.herokuapp.com/weather';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const REQUEST_TIME_CAPSULE = 'REQUEST_TIME_CAPSULE';
export const FINISHED_LOADING_DATA = 'FINISHED_LOADING_DATA';
export const LOADING_DATA = 'LOADING_DATA';
export const CLEAR_TIME_CAPSULE = 'CLEAR_TIME_CAPSULE';
export const SERVER_DISCONNECTED = 'SERVER_DISCONNECTED';
export const SERVER_CONNECTED = 'SERVER_CONNECTED';

export const showLoadingGraphic = () => {
    return ({ type: LOADING_DATA });
};

export const fetchWeather = (latLngObj) => {
    const URL = ROOT_URL;
    const fetchRequest = axios.get(URL, {
        params: {
            lat: latLngObj.lat,
            lng: latLngObj.lng
        }
    });
    return (dispatch) => {
        dispatch({ type: LOADING_DATA });
        dispatch({ type: SERVER_CONNECTED });
        fetchRequest.then((response) => {
            dispatch({ type: REQUEST_WEATHER, forecast: response.data.result });
            dispatch({ type: FINISHED_LOADING_DATA });
            console.log('FETCHING_WEATHER---->>>>>>>');
        }).catch((error) => {
            console.log(JSON.stringify(error));
            dispatch({ type: SERVER_DISCONNECTED });
        });
    };
};

export const fetchTimeCaps = (query) => {
    const URL = ROOT_URL+'/timecapsule/'+query;
    const fetchTimeCapsReq = axios.get(URL);
    return function(dispatch){
        dispatch({ type: SERVER_CONNECTED });
        dispatch({ type: LOADING_DATA });
        fetchTimeCapsReq.then((response)=>{
            dispatch({ type: FINISHED_LOADING_DATA });
            dispatch({
                type: REQUEST_TIME_CAPSULE,
                timeCapsuleObj: response.data.timeCapsuleData
            });
        }).catch((error)=>{
            dispatch({ type: SERVER_DISCONNECTED });
            console.log('I got an error: '+error.message);
        });
    };
};

// Clears stale timecampsule data to get fresh info
export const clearTimeCaps = () => {
    console.log('Trying to clear stale time caps data');
    return ({
        type: CLEAR_TIME_CAPSULE
    });
};

