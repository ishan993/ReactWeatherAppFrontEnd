import React, { Component } from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { fetchHistory } from '../actions';

const HistoryComponentWrapper  = glamorous.div({
    width: '90%',
    background: 'white'
});

class HistoryComponent extends Component {

    componentWillMount(){
        this.props.fetchHistory();
    }

    render(){
        return (
            <HistoryComponentWrapper>
                HelloWorld
            </HistoryComponentWrapper>
        );
    }
}
const mapStateToProps = (state) => {
    return ({ searchHistory: state.placesProps.searchHistory });
};
export default connect(mapStateToProps, { fetchHistory })(HistoryComponent);