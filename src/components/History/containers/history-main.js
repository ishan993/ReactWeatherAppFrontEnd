import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { fetchHistory } from '../../../actions';
import HistoryItem from '../components/history-item';

const HistoryComponentWrapper  = glamorous.div({
    '@media(min-width: 840px)': {
       width: '90%',
       padding: 10
    },
    width: '100%',
    background: 'white',
    margin: 'auto'
});

const StyledH2 = glamorous.h2({
    fontWeight: 100,
    borderBottom: '0.3pt solid lightgrey',
    textAlign: 'justify',
    padding: 3
});

const renderHistoryItem = (searchHistory) => {
    const arr = [];
    
    for (let entry in searchHistory){
        if (searchHistory[entry])
            arr.push(<HistoryItem key={entry} historyProps={searchHistory[entry]} />);
    }
    return arr;
};


class HistoryMainContainer extends Component {

    componentWillMount(){
        this.props.fetchHistory();
    }

    render(){
        return (
            <HistoryComponentWrapper>
                <StyledH2>
                    History
                </StyledH2>
                {renderHistoryItem(this.props.searchHistory).map((item)=>{return item;})}
            </HistoryComponentWrapper>
        );
    }
}

HistoryMainContainer.propTypes = {
    fetchHistory: PropTypes.func.isRequired,
    searchHistory: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return ({ searchHistory: state.placesProps.searchHistory });
};

export const ConnectedHistoryContainer =  connect(mapStateToProps, { fetchHistory })(HistoryMainContainer);