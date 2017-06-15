import React, {Component} from 'react';
import glamorous from 'glamorous';

const HistoryWrapper = glamorous.div({
    width: '100%',
    background: 'white'
});

class HistoricWeather extends Component {
    render() {
        return (
            <HistoryWrapper>
                Hello World!
            </HistoryWrapper>
        );
    }
}
export default HistoricWeather;