export const TOGGLE_BACKGROUND = 'TOGGLE_BACKGROUND';
export * from './places-actions';
export * from './weather-actions';

export const toggleBackground = () => {
    return ({
         type: TOGGLE_BACKGROUND
    });
};