import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { fetchWeather, saveSearchHistory } from '../actions';
import moment from 'moment';
import DayWeatherComponent from './DayWeatherComponent';
import DailyItem from './DailyItem';

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

const StyledH2 = glamorous.h2({
    fontWeight: 100,
    borderBottom: '0.3pt solid lightgrey',
    padding: 5
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
class WeatherComponent extends Component{

    componentWillMount(){
        this.props.saveSearchHistory({
            placeId: this.props.weatherProps.placeId,
            address: this.props.weatherProps.address,
            lat: this.props.weatherProps.lat,
            lng: this.props.weatherProps.lng,
            time: moment().format('L')
        });
    }

    render() {
        const { lat, lng, address, currentWeather, daily } = this.props.weatherProps;
        return (
            <div>
                <WeatherWrapper>
                    <DayWeatherComponent currentWeather={currentWeather} />
                    <ContentWrapper>
                        <StyledH2>
                            {address}
                        </StyledH2>
                        { daily.data.map((data)=> { return (<DailyItem dailyData={data} key={data.day} />);})}
                    </ContentWrapper>
                </WeatherWrapper>
                <ButtonWrapper>
                    <StyledLink to={{pathname:'/timecapsule', search: '?lat='+lat+'&lng='+lng}}> Time Capsule</StyledLink>
                </ButtonWrapper>
            </div>
        );
    }
}

WeatherComponent.propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    weatherProps: PropTypes.object.isRequired,
    saveSearchHistory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        weatherProps: state.weatherProps.forecast
    };
};

export default connect(mapStateToProps, { fetchWeather, saveSearchHistory })(WeatherComponent);