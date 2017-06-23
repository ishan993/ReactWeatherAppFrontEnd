import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const LoadingGIF = glamorous.img({
    height: 60,
    width: 60,
    marginTop: 100
});

const Button = glamorous.button({
    '@media(min-width: 840px)': {
       width: 150,
       padding: 15
    },
    textDecoration: 'none',
    marginTop: 15,
    borderRadius: 3,
    padding: 10,
    fontSize: '1rem',
    color: 'white',
    background: '#00BFFF',
    border: '1px solid lightgrey',
    outline: 'none',
    fontWeight: 100
});

export const LoadingComponent = (props) => {
    if (props.isServerConnected){
        return (<LoadingGIF src='https://res.cloudinary.com/ishanvadwala/image/upload/v1498107123/default_1_spnevs.gif'/>);
    } else {
        return (
            <div>
                <h5>
                    There's something wrong with the server
                </h5>
                <Button onClick={()=> props.retryFunction(props.retryProps)}>
                    Try Again?
                </Button>
            </div>
        );
    }
};

LoadingComponent.propTypes = {
    isServerConnected: PropTypes.bool.isRequired,
    retryFunction: PropTypes.func,
    retryProps: PropTypes.object
};