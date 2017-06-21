import axios from 'axios';

export const REQUEST_SUGGESTIONS = 'REQUEST_SUGGESTIONS';
export const INVALIDATE_SUGGESTIONS = 'INVALIDATE_SUGGESTIONS';
export const SET_PLACE_ID = 'SET_PLACE_ID';
export const REQUEST_SEARCH_HISTORY = 'REQUEST_SEARCH_HISTORY';

const ROOT_URL = 'http://localhost:1337/';

export const setPlaceId = (placeId) => {
    return ({
        type: SET_PLACE_ID,
        placeId: placeId
    });
};

export const fetchSuggestions = (value) => {
    const URL = ROOT_URL+'places';
    const fetchRequest = axios.get(URL, {
        params: {
            suggestion: value
        }
    });
    return function(dispatch){
        fetchRequest.then((response)=>{
            dispatch({
                type: REQUEST_SUGGESTIONS,
                places: response.data.result
            });
        }).catch((error)=>{
            throw new Error(error.message.predictions);
        });
    };
};

export const invalidateSuggestions = () => {
    return ({ type: INVALIDATE_SUGGESTIONS });
};