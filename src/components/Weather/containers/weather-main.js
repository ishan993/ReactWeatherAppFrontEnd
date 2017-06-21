import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    lat: 40.7128,
    lng: 74.0059
};

class WeatherMainContainer extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        if (!this.props.routerProps.location.search){
            this.props.routerProps.history.push('/forecast?lat='+initLatLng.lat+'&lng='+initLatLng.lng);
        }
        const queryParams = new URLSearchParams(this.props.routerProps.location.search);
        this.props.fetchWeather({
            lat: queryParams.get('lat'),
            lng: queryParams.get('lng')
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