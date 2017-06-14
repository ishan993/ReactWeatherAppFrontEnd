import axios from 'axios';
import config from '../config';

const ROOT_URL = 'https://api.darksky.net/forecast/'+config.WEATHER_API_KEY+'/';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';

export const fetchWeather = (latlngObject) => {
    latlngObject={
        lat: 42.3601,
        lng: -71.0589
    };
    const URL = ROOT_URL+latlngObject.lat+','+latlngObject.lng;
    const fetchRequest = axios.get(URL);

    return function(dispatch){
        fetchRequest.then((response) => {
            console.log('here is the weather report:'+JSON.stringify(response.data));
            dispatch({ type: REQUEST_WEATHER, forecast: response.data });
        }).catch((error) => {
            console.log('I got this error: '+error.message);
        });
    };
};