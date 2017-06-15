import React from 'react';
import glamorous from 'glamorous';

const FutureForecastWrapper = glamorous.div({
    width: '100%',
    background: 'white'
});
const FutureForecast = (props) => {
    return (
        <FutureForecastWrapper>
            Hello World
        </FutureForecastWrapper>
    );
};

export default FutureForecast;