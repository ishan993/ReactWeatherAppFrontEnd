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
    fontSize: 18
});

// Duplicted. Don't forget to remove it!
const ListItem = glamorous.div({
    borderBottom: '0.3pt solid lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    margin: 'auto',
    fontSize: 20,
    padding: 5,
    textAlign: 'justify'
});

// Duplicated. Don't forget to remove it!
const StyledH1 = glamorous.h1({
    fontWeight: 100,
    borderBottom: '0.3pt solid lightgrey',
    padding: 5
});

const DayWeatherComponent = (props) => {
    const { currentWeather } = props;
    return (
        <ImageWrapper>
                <StyledH1>
                    {currentWeather.time}
                </StyledH1>
                <StyledImage src={currentWeather.icon} />
                <StyledH1>
                    {currentWeather.temperature+' '}
                    &#8457;
                    {'  '+currentWeather.summary}
                </StyledH1>
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