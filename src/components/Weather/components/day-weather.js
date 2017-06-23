import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';


const ImageWrapper = glamorous.div({
    '@media(min-width: 840px)': {
        flexBasis: '35%'
    },
    padding: 10
});

const StyledImage = glamorous.img({
    width: '100%',
    height: 'auto',
    maxWidth: 300,
    maxHeight: 300,
    padding: 10
});

const Bolder = glamorous.span({
    fontSize: '1.01rem'
});

const ListItem = glamorous.div({
    borderBottom: '0.3pt solid lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    margin: 'auto',
    fontSize: '.8rem',
    padding: 5,
    textAlign: 'justify'
});

const StyledH3 = glamorous.h3({
    fontWeight: 100,
    borderBottom: '0.3pt solid lightgrey',
    padding: 5
});

// Shows Current weather
const DayWeatherComponent = (props) => {
    const { currentWeather } = props;
    return (
        <ImageWrapper>
                <StyledH3>
                    {currentWeather.time}
                </StyledH3>
                <StyledImage src={currentWeather.icon} />
                <StyledH3>
                    {currentWeather.temperature+' '}
                    &#8457;
                    {'  '+currentWeather.summary}
                </StyledH3>
            <ListItem>
                <span>
                    <Bolder>Wind</Bolder> {currentWeather.windSpeed}mph
                </span>
                <span>
                    <Bolder>humidity</Bolder> {currentWeather.humidity}%
                </span>
                <span>
                    <Bolder>Visibility</Bolder> {currentWeather.visibility}
                </span>
                <span>
                    <Bolder>Dewpoint</Bolder> {currentWeather.dewPoint}
                </span>
            </ListItem>
        </ImageWrapper>
    );
};

DayWeatherComponent.propTypes = {
    currentWeather: PropTypes.object.isRequired
};

export default DayWeatherComponent;