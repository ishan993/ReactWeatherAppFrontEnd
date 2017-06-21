import axios from 'axios';
import moment from 'moment';

const REQUEST_SEARCH_HISTORY = 'REQUEST_SEARCH_HISTORY';

const ROOT_URL = 'http://localhost:1337/weather';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const REQUEST_TIME_CAPSULE = 'REQUEST_TIME_CAPSULE';
export const FINISHED_LOADING_DATA = 'FINISHED_LOADING_DATA';
export const LOADING_DATA = 'LOADING_DATA';

export const showLoadingGraphic = () => {
    return ({ type: LOADING_DATA });
};

export const fetchWeather = (placeId) => {
    const URL = ROOT_URL;
    const fetchRequest = axios.get(URL, { params: {placeId} });

    return (dispatch) => {
        dispatch({ type: LOADING_DATA });
        return fetchRequest.then((response) => {
            dispatch({ type: REQUEST_WEATHER, forecast: response.data.result });
            dispatch({ type: FINISHED_LOADING_DATA });
            saveSearchHistory({
                placeId: placeId,
                address: response.data.result.address,
                lat: response.data.result.lat,
                lng: response.data.result.lng,
                time: moment().format('lll')
            });
            return ({lat: response.data.result.lat, lng: response.data.result.lng});
            console.log('FETCHING_WEATHER---->>>>>>>');
        }).catch((error) => {
            throw new Error(error.message);
        });
    };
};

export const fetchTimeCaps = (query) => {
    console.log('lol'+query);
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

export const fetchHistory = () => {
    const history = JSON.parse(localStorage.getItem('searchHistory', ''));
    return ({ type: REQUEST_SEARCH_HISTORY, searchHistory: history });
};

const saveSearchHistory = (searchObj) => {
    let searchHistory = localStorage.getItem('searchHistory');

    if (!searchHistory)
        searchHistory = {};
    else
        searchHistory = JSON.parse(searchHistory);

    const { placeId } = searchObj;
    delete searchObj.placeId;

    if (!searchHistory[placeId]){
        searchHistory[placeId] = searchObj;
    } else
        searchHistory[placeId].time = searchObj.time;

    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    return ({ type: REQUEST_SEARCH_HISTORY, searchHistory: searchHistory});

};