import axios from 'axios';

export const REQUEST_SUGGESTIONS = 'REQUEST_SUGGESTIONS';
export const INVALIDATE_SUGGESTIONS = 'INVALIDATE_SUGGESTIONS';
export const SET_PLACE_ID = 'SET_PLACE_ID';
export const REQUEST_SEARCH_HISTORY = 'REQUEST_SEARCH_HISTORY';

const ROOT_URL = 'https://skycast-backend.herokuapp.com/places/';

export const setPlaceId = (placeId) => {
    return ({
        type: SET_PLACE_ID,
        placeId: placeId
    });
};

// Action creator that retrieves 5 suggestions at a time
// calls GoogleMaps' AutoComplete API in the backend 
export const fetchSuggestions = (value) => {
    const URL = ROOT_URL+'suggestions';
    const suggestionsRequest = axios.get(URL, {
        params: {
            suggestion: value
        }
    });
    return function(dispatch){
        suggestionsRequest.then((response)=>{
            dispatch({
                type: REQUEST_SUGGESTIONS,
                places: response.data.result
            });
        }).catch((error)=>{
            console.log(JSON.stringify(error));
        });
    };
};


// Fetches LatLng for the given placeId
export const fetchLatLng = (placeId) => {
    const URL = ROOT_URL+'latlng';
    const latLngRequest = axios.get(URL, {
        params: {placeId: placeId}
    });
    return () => {
        return latLngRequest.then((response) => {
            return (response.data.result);
        }).catch((error) => {
            throw new Error(error.message);
        });
    };
};

export const invalidateSuggestions = () => {
    return ({ type: INVALIDATE_SUGGESTIONS });
};