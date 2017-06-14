import axios from 'axios';

export const REQUEST_SUGGESTIONS = 'REQUEST_SUGGESTIONS';
export const INVALIDATE_SUGGESTIONS = 'INVALIDATE_SUGGESTIONS';
const ROOT_URL = 'http://localhost:1337/';


export const fetchSuggestions = (value) => {
    const URL = ROOT_URL+'places';
    const fetchRequest = axios.get(URL, {
        params: {
            suggestion: value
        }
    });
    return function(dispatch){
        fetchRequest.then((response)=>{
            console.log('I got these suggestions:'+
                JSON.stringify(response.data.places));
            dispatch({
                type: REQUEST_SUGGESTIONS,
                places: response.data.places
            });
        }).catch((error)=>{
            throw new Error(error.message.predictions);
        });
    };
};

export const invalidateSuggestions = () => {
    return ({ type: INVALIDATE_SUGGESTIONS });
};