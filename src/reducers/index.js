import { combineReducers } from 'redux';
import DisplayReducer from './display-reducer';
import PlacesReducer from './places-reducer';

const rootReducer = combineReducers({
   displayProps: DisplayReducer,
   placesProps: PlacesReducer
});

export default rootReducer;
