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

class WeatherMainContainer extends Component {
    constructor(props){
        super(props);
        console.log('Router Props here: '+JSON.stringify(props));
        if (!this.props.routerProps.location.search)
            this.props.routerProps.history.push('/404');

        this.props.showLoadingGraphic();
    }
    componentWillMount(){
        this.props.fetchWeather(this.props.placeId);
        console.log('Loading=====>>>>>'+this.props.placeId);
    }
    render() {
        return (
            <Wrapper>
                <SearchBar fetchWeather={this.props.fetchWeather}/>
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