import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { toggleBackground } from '../actions';

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

const Wrapper = glamorous.div({
    width: '60%',
    margin: 'auto'
});


class HomeComponent extends Component {

    render(){
        return (
            <Wrapper>
                Hello World!
            </Wrapper>
        );
    }
}



HomeComponent.propTypes = {
    toggleBackground: PropTypes.func.isRequired
};

export default connect( null, { toggleBackground })(HomeComponent);