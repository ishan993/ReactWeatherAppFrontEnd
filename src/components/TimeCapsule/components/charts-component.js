import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import SingleChart from './single-charts';

const ChartsWrapper = glamorous.div({
    margin: 'auto',
    width: '100%',
    textAlign: 'left',
    fontWeight: 100
});

const ChartsComponent = (props) => {

    return (
        <ChartsWrapper>
            { props.data ? renderChart(props.data).map((element)=>{ return element;}) : ''}
        </ChartsWrapper>
    );
};

ChartsComponent.propTypes = {
    data: PropTypes.array
};

export default ChartsComponent;

const getChartData = (data) => {

    const chartData = {
        temperature: [],
        humidity: [],
        windSpeed: [],
        visibility: [],
        pressure: []
    };
    for (let i = 0; i<data.length; i++) {
        for (let entry in data[i]){
            if (chartData[entry]) {
                const itemData = data[i];
                chartData[entry].push({ hour: itemData.hour, value: itemData[entry]});
            }
        }
    }
    return chartData;
};


const renderChart = (data) => {
    const arr = [];
    if (data){
        const chartData = getChartData(data);
        for (let entry in chartData){
            if (chartData[entry])
                arr.push(<SingleChart data={chartData[entry]} name={entry}/>);
        }
        return arr;
    }
};
