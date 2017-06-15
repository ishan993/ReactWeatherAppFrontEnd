import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { fetchWeather } from '../actions';

const WeatherWrapper = glamorous.div({
    '@media(min-width: 800px)': {
        margin: '10px 0 10px 0',
        display: 'flex',
        justifyContent: 'space-around'
    },
    margin: '10px 0 10px 0',
    padding: 20,
    background: 'white'

});

const ImageWrapper = glamorous.div({
    '@media(min-width: 800px)': {
        flexBasis: '35%'
    },
    background: 'papayawhip',
    padding: 10
});

const ContentWrapper = glamorous.div({
    '@media(min-width: 800px)': {
        flexBasis: '60%',
        padding: 20
    },
    padding: 10,
    background: 'lightseagreen'
});

const StyledImage = glamorous.img({
    width: '100%',
    height: 'auto',
    maxWidth: 300,
    maxHeight: 300,
    padding: 10,
    borderBottom: '.3pt solid lightgrey'
});

const StyledH1 = glamorous.h1({
    fontWeight: 100
});

class WeatherComponent extends Component{

    constructor(props){
        super(props);
        console.log('I got these weather props: '+JSON.stringify(props));
    }

    render() {
        {console.log('I got updated props: '+JSON.stringify(this.props));}
        return (
            <WeatherWrapper>
                <ImageWrapper>
                    <StyledImage src="http://res.cloudinary.com/ishanvadwala/image/upload/v1497382245/cloud-1_oaz7gl.png" />
                        <StyledH1>
                            100 degrees!
                        </StyledH1>
                </ImageWrapper>
                <ContentWrapper>
                    <StyledH1>
                    New York City
                    </StyledH1>
                </ContentWrapper>
            </WeatherWrapper>
        );
    }
}

WeatherComponent.propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    weatherProps: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        weatherProps: state.weatherProps.forecast
      };
};

export default connect(mapStateToProps, { fetchWeather })(WeatherComponent);