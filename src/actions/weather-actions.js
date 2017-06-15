import axios from 'axios';

const ROOT_URL = 'http://localhost:1337/weather';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';

export const fetchWeather = (placeId) => {
    const URL = ROOT_URL;
    const fetchRequest = axios.get(URL, {
         params: { placeId }
    });

    return function(dispatch){
        fetchRequest.then((response) => {
            dispatch({ type: REQUEST_WEATHER, forecast: response.data.result });
        }).catch((error) => {
            throw new Error(error.message);
        });
    };
};