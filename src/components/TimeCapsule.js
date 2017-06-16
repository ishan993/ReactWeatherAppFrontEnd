import React, {Component} from 'react';
import glamorous from 'glamorous';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import 'react-datepicker/dist/react-datepicker.css';

const CapsWrapper = glamorous.div({
    width: '90%',
    margin: 'auto',
    background: 'white',
    padding: 20
});
const StyledDatePicker = glamorous(DatePicker)({
    width: '80%',
    fontSize: 20,
    fontWeight: 100
});
const InputWrapper = glamorous.div({
    display: 'flex',
    alignItems: 'center'
});

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
const ChartsWrapper = glamorous.div({
    margin: 'auto',
    background: 'papayawhip'
});
class TimeCapsule extends Component {
    constructor(){
        super();
        this.state = {
            startDate: moment(),
            width: 200
        };
        console.log('30 years'+moment().subtract(30, 'years').calendar());
    }
    onChange(date){
        console.log('hiting me: '+date);
        this.setState({ startDate: date});
    }
   

    render() {
        return (
            <CapsWrapper>
                <InputWrapper>
                    <h2>Select Date:</h2>
                    <StyledDatePicker
                        minDate={moment().subtract(40, 'years')}
                        maxDate={moment().subtract(1, 'hour')}
                        selected={this.state.startDate}
                        onChange={(date) => this.onChange(date)}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                    />
                </InputWrapper>
                <ResponsiveContainer width="100%" height={100}>
                    <LineChart  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </CapsWrapper>
        );
    }
}
export default TimeCapsule;