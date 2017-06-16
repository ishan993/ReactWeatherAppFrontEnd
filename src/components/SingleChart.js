import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


const SingleChart = (props) => {
    return (
        <ResponsiveContainer width="100%" height={100}>
            <LineChart  data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="amt" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
};

SingleChart.propTypes = {
    data: PropTypes.object.isRequired
};

export default SingleChart;