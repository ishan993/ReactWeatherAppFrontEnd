import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import glamorous from 'glamorous';
import SearchBar from './search-bar';
import WeatherContainer from './weather-container';
import { showLoadingGraphic, fetchWeather } from '../../../actions';

const Wrapper = glamorous.div({
    '@media(min-width: 840px)': {
        width: '90%'
    },
    width: '100%',
    margin: 'auto'
});

const initLatLng = {
    lat: 37.3362,
    lng: -121.8906
};

class WeatherMainContainer extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if (!this.props.routerProps.location.search){
            this.props.routerProps.history.push('/forecast?lat='+initLatLng.lat+'&lng='+initLatLng.lng);
        }
        const queryParams = queryString.parse(this.props.routerProps.location.search);
        this.props.fetchWeather({
            lat: queryParams.lat,
            lng: queryParams.lng
        });
    }
    render() {
        return (
            <Wrapper>
                <SearchBar fetchWeather={this.props.fetchWeather} history={this.props.routerProps.history} />
                {this.props.weatherProps ? <WeatherContainer weatherProps={this.props.weatherProps}/> : ''}
            </Wrapper>
        );
    }
}

WeatherMainContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    showLoadingGraphic: PropTypes.func.isRequired,
    placeId: PropTypes.string.isRequired,
    fetchWeather: PropTypes.func.isRequired,
    weatherProps: PropTypes.object,
    routerProps: PropTypes.object
};

const mapStateToProps = (state) => {
    return ({
        isLoading: state.displayProps.isLoading,
        placeId: state.placesProps.placeId,
        weatherProps: state.weatherProps.forecast
     });
};

export const ConnectedWeatherContainer = connect (mapStateToProps, { showLoadingGraphic, fetchWeather })(WeatherMainContainer);