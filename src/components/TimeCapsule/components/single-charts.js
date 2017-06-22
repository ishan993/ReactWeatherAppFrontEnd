import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


const SingleChart = (props) => {
    const {name} = props;
    return (
        <div>
            <h3>{name.toUpperCase()}</h3>
            <ResponsiveContainer width="100%" height={150}>
                <LineChart  data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="title" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

SingleChart.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
};

export default SingleChart;