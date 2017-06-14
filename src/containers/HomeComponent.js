import  React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import SearchBar from './SearchBar';
import { fetchWeather } from '../actions';
/*
const Button = glamorous.button({
    borderRadius: 0,
    padding: 10,
    fontSize: 18,
    color: 'white',
    background: '#00BFFF',
    border: '1px solid lightgrey',
    outline: 'none',
    fontWeight: 100
});
*/

const Wrapper = glamorous.div({
    width: '90%',
    margin: 'auto',
    background: 'palevioletred'
});

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
class HomeComponent extends Component {
    componentDidMount(){
        this.props.fetchWeather();
    }

    render() {
        return (
            <Wrapper>
                <SearchBar />
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
            </Wrapper>
        );
    }
}

HomeComponent.propTypes = {
    fetchWeather: PropTypes.func.isRequired
};

const mapStateToProps = () => {
    return;
};

export default connect(null, { fetchWeather } )(HomeComponent);