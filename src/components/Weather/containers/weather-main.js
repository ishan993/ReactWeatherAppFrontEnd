import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import glamorous from 'glamorous';
import SearchBar from './search-bar';
import WeatherContainer from './weather-container';
import { LoadingComponent } from '../../App/loading-component';
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

// The Homepage that renders all the sub-components
class WeatherMainContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            lat: 37.3362,
            lng: -121.8906
        };
    }
    componentDidMount(){
        // Automatically redirect to San Jose onLoad
        if (!this.props.routerProps.location.search){
            this.props.routerProps.history.push('/forecast?lat='+initLatLng.lat+'&lng='+initLatLng.lng);
        } else {
        // Loads the lat lng in the URL
            const queryParams = queryString.parse(this.props.routerProps.location.search);
            this.props.fetchWeather({
                lat: queryParams.lat,
                lng: queryParams.lng
            });
            this.setState({lat: queryParams.lat, lng: queryParams.lng});
        }
    }

    render() {
        return (
            <Wrapper>
                <SearchBar fetchWeather={this.props.fetchWeather} history={this.props.routerProps.history} />
                {!this.props.isLoading && this.props.weatherProps ?
                    <WeatherContainer weatherProps={this.props.weatherProps}/> :
                    <LoadingComponent isServerConnected={this.props.isServerConnected}
                        retryFunction={this.props.fetchWeather} retryProps={{lat: this.state.lat,
                            lng: this.state.lng}}/>}
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
    routerProps: PropTypes.object,
    isServerConnected: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return ({
        isLoading: state.displayProps.isLoading,
        placeId: state.placesProps.placeId,
        weatherProps: state.weatherProps.forecast,
        isServerConnected: state.displayProps.isServerConnected
     });
};

export const ConnectedWeatherContainer = connect (mapStateToProps, { showLoadingGraphic, fetchWeather })(WeatherMainContainer);