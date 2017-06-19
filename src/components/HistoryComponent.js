import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { fetchHistory } from '../actions';

const HistoryComponentWrapper  = glamorous.div({
    width: '90%',
    background: 'white',
    padding: 10,
    margin: 'auto'
});

const StyledH2 = glamorous.h2({
    fontWeight: 100,
    borderBottom: '0.3pt solid lightgrey',
    textAlign: 'justify',
    padding: 3
});

const HistoryItem = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5
});

const Button = glamorous.button({
    borderRadius: 3,
    padding: 5,
    fontSize: '1rem',
    color: 'white',
    background: '#00BFFF',
    border: '1px solid lightgrey',
    outline: 'none',
    fontWeight: 100
});

const { H4 } = glamorous;

const renderHistoryItem = (searchHistory) => {
    const arr = [];

    for (let entry in searchHistory){
        arr.push(
            <HistoryItem>
                <H4 fontWeight={100}>
                    {searchHistory[entry].address}
                </H4>
                <H4 fontWeight={100}>
                    {searchHistory[entry].time}
                </H4>
                <Button>
                    Visit
                </Button>
                <Button>
                    Delete
                </Button>
            </HistoryItem>
        );
    }
    return arr;
};


class HistoryComponent extends Component {

    componentWillMount(){
        this.props.fetchHistory();
    }

    render(){
        return (    
            <HistoryComponentWrapper>
                <StyledH2>
                    History
                </StyledH2>
                {renderHistoryItem(this.props.searchHistory).map((item)=>{
                    return item;
                })}
            </HistoryComponentWrapper>
        );
    }
}

HistoryComponent.propTypes = {
    fetchHistory: PropTypes.func.isRequired,
    searchHistory: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return ({ searchHistory: state.placesProps.searchHistory });
};
export default connect(mapStateToProps, { fetchHistory })(HistoryComponent);