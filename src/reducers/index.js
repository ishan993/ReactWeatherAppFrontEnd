import { combineReducers } from 'redux';
import DisplayReducer from './display-reducer';
import PlacesReducer from './places-reducer';
import WeatherReducer from './weather-reducer';

const rootReducer = combineReducers({
   displayProps: DisplayReducer,
   placesProps: PlacesReducer,
   weatherProps: WeatherReducer
});

export default rootReducer;
