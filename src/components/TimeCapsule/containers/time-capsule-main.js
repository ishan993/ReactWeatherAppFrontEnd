import React, {Component} from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types';
import { fetchTimeCaps } from '../../../actions';
import ChartsComponent from '../components/charts-component';
// import DayWeatherComponent from './DayWeatherComponent';

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

const CurrentWeatherStatsWrapper = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'papayawhip'
});

export class TimeCapsuleMainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: moment()
        };
    }
    onChange(date){
        this.setState({ startDate: date});
        const tempDate = new Date(date).getTime()/1000;
        this.props.fetchTimeCaps(this.props.location.search+'&date='+tempDate);
    }

    render() {
        const { timeCapsuleObj } = this.props;
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
                <ChartsComponent data={timeCapsuleObj.hourly}/>
            </CapsWrapper>
        );
    }
}

/* <CurrentWeatherStatsWrapper>
                    { timeCapsuleObj.daily ? <DayWeatherComponent currentWeather={timeCapsuleObj.daily} /> : ''}
                </CurrentWeatherStatsWrapper>*/
TimeCapsuleMainContainer.propTypes = {
    timeCapsuleObj: PropTypes.object.isRequired,
    fetchTimeCaps: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return ({timeCapsuleObj: state.weatherProps.timeCapsuleObj});
};

export const ConnectedTimeCapsuleContainer = connect(mapStateToProps,
                                                { fetchTimeCaps })(TimeCapsuleMainContainer);