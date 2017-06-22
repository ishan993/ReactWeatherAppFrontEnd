import axios from 'axios';

const ROOT_URL = 'http://localhost:1337/weather';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const REQUEST_TIME_CAPSULE = 'REQUEST_TIME_CAPSULE';
export const FINISHED_LOADING_DATA = 'FINISHED_LOADING_DATA';
export const LOADING_DATA = 'LOADING_DATA';
export const CLEAR_TIME_CAPSULE = 'CLEAR_TIME_CAPSULE';

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
        fetchRequest.then((response) => {
            dispatch({ type: REQUEST_WEATHER, forecast: response.data.result });
            dispatch({ type: FINISHED_LOADING_DATA });
            console.log('FETCHING_WEATHER---->>>>>>>');
        }).catch((error) => {
            throw new Error(error.message);
        });
    };
};

export const fetchTimeCaps = (query) => {
    const URL = ROOT_URL+'/timecapsule/'+query;
    const fetchTimeCapsReq = axios.get(URL);
    return function(dispatch){
        dispatch({ type: LOADING_DATA });
        fetchTimeCapsReq.then((response)=>{
            dispatch({ type: FINISHED_LOADING_DATA });
            dispatch({
                type: REQUEST_TIME_CAPSULE,
                timeCapsuleObj: response.data.timeCapsuleData
            });
        }).catch((error)=>{
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

