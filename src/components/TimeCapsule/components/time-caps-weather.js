import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const WeatherWrapper = glamorous.div({
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
});

const StyledImage = glamorous.img({
    '@media(min-width: 840px)': {
        maxWidth: 300,
        maxHeight: 300
    },
    flexBasis: '30%',
    width: '100%',
    height: 'auto',
    maxWidth: 130,
    maxHeight: 130,
    padding: 10
});

const ContentWrapper = glamorous.div({
    flexBasis: '70%'
});

const TitleWrapper = glamorous.div({
    textAlign: 'justify'
});

const TemperatureDiv = glamorous.div({
    width: '100%',
    padding: 5,
    fontSize: '3rem',
    borderBottom: '0.3pt solid lightgrey'
});

const TimeCapsuleWeatherComponent =(props) => {
    return (
        <div>
            <TitleWrapper>
                <h3>{ props.address }</h3>
                <h3>{ props.data.time }</h3>
            </TitleWrapper>
            <WeatherWrapper>
                <StyledImage src={ props.data.icon } />
                <ContentWrapper>
                    <TemperatureDiv>
                        {props.data.temperature+' '}
                        <span>
                           &#8457;
                        </span>
                    </TemperatureDiv>
                    <h3>
                        {props.data.summary}
                    </h3>
                </ContentWrapper>
            </WeatherWrapper>
        </div>
    );
};

TimeCapsuleWeatherComponent.propTypes = {
    data: PropTypes.object.isRequired,
    address: PropTypes.string.isRequired
};

export default TimeCapsuleWeatherComponent;