import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { fetchHistory, saveSearchHistory } from '../../../actions';
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
                {this.props.searchHistory.map((item)=> {
                    return (<HistoryItem key={item.time} routerProps={this.props.routerProps}
                        historyProps={item} saveSearchHistory={this.props.saveSearchHistory}/>);
                })}
            </HistoryComponentWrapper>
        );
    }
}

HistoryMainContainer.propTypes = {
    fetchHistory: PropTypes.func.isRequired,
    searchHistory: PropTypes.array.isRequired,
    routerProps: PropTypes.object.isRequired,
    saveSearchHistory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    console.log('refreshing');
    return ({ searchHistory: state.placesProps.searchHistory });
};

export const ConnectedHistoryContainer =  connect(mapStateToProps, { fetchHistory, saveSearchHistory })(HistoryMainContainer);