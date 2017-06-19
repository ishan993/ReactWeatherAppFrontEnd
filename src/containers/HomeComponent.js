import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import SearchBar from './SearchBar';
import WeatherComponent from '../components/WeatherComponent';

const Wrapper = glamorous.div({
    width: '90%',
    margin: 'auto'
});

class HomeComponent extends Component {
    render() {
        return (
            <Wrapper>
                <SearchBar />
                {this.props.isLoading ?  '' : <WeatherComponent />}
            </Wrapper>
        );
    }
}

HomeComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return ({ isLoading: state.displayProps.isLoading });
};

export default connect (mapStateToProps)(HomeComponent);