import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import DayWeatherComponent from '../components/day-weather';
import DailyItem from '../components/daily-item';

const WeatherWrapper = glamorous.div({
    '@media(min-width: 840px)': {
        margin: '10px 0 0 0',
        display: 'flex',
        justifyContent: 'space-between'
    },
    borderBottom: '0.3pt solid lightgrey',
    margin: '10px 0 0 0',
    padding: 10,
    background: 'white'
});

const ContentWrapper = glamorous.div({
    '@media(min-width: 840px)': {
        flexBasis: '60%',
        borderLeft: '.3pt solid lightgrey'
    },
    padding: 5,
    background: 'white'
});

const StyledH3 = glamorous.h3({
    fontWeight: 100,
    borderBottom: '0.3pt solid lightgrey',
    padding: 15
});

const ButtonWrapper = glamorous.div({
    background: 'white',
    fontSize: '1.2rem',
    padding: 10,
    display: 'flex',
    justifyContent: 'center'
});

const StyledLink = glamorous(Link)({
    padding: 10,
    width: 200,
    color: 'white',
    background: '#65DEF1',
    textDecoration: 'none',
    borderRadius: 4
});

class WeatherContainer extends Component{

    render() {
        const { lat, lng, address, currentWeather, daily } = this.props.weatherProps;
        return (
            <div>
                <WeatherWrapper>
                    <DayWeatherComponent currentWeather={currentWeather} />
                    <ContentWrapper>
                        <StyledH3>
                            {address}
                        </StyledH3>
                        { daily.data.map((data)=> { return (<DailyItem dailyData={data} key={data.time} />);})}
                    </ContentWrapper>
                </WeatherWrapper>
                <ButtonWrapper>
                    <StyledLink to={{pathname:'/timecapsule', search: '?lat='+lat+'&lng='+lng}}> Time Capsule</StyledLink>
                </ButtonWrapper>
            </div>
        );
    }
}

WeatherContainer.propTypes = {
    weatherProps: PropTypes.object.isRequired
};



export default connect(null)(WeatherContainer);