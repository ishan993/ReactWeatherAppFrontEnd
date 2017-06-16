import React, {Component} from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types';


const StyledDatePicker = glamorous(DatePicker)({
    width: '80%',
    fontSize: 20,
    fontWeight: 100
});

const CapsWrapper = glamorous.div({
    width: '90%',
    margin: 'auto',
    background: 'white',
    padding: 20
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
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
];

class TimeCapsule extends Component {
    constructor(){
        super();
        this.state = {
            startDate: moment(),
            width: 200
        };
    }
    onChange(date){
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
                
            </CapsWrapper>
        );
    }
}

TimeCapsule.propTypes = {
    timeCapsuleObj: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return ({timeCapsuleObj: state.weatherProps.timeCapsuleObj});
};

export default connect(mapStateToProps)(TimeCapsule);