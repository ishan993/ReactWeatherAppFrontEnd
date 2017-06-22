import React, {Component} from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types';
import { fetchTimeCaps, clearTimeCaps } from '../../../actions';
import ChartsComponent from '../components/charts-component';
import TimeCapsuleWeatherComponent from '../components/time-caps-weather';

const StyledDatePicker = glamorous(DatePicker)({
    width: '80%',
    fontSize: 20,
    fontWeight: 100
});

const TimeCapsuleWrapper = glamorous.div({
    '@media(min-width: 840px)': {
        width: '90%',
        margin: 'auto'
    },
    padding: 10,
    boxSizing: 'border-box',
    background: 'white',
    width: '100%'
});

const InputWrapper = glamorous.div({
    padding: 10,
    display: 'flex',
    alignItems: 'center'
});

export class TimeCapsuleMainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: moment()
        };
    }
    componentWillMount(){
        //this.props.hideloadingGraphic();
    }
    onChange(date){
        this.setState({ startDate: date});
        const tempDate = new Date(date).getTime()/1000;
        this.props.fetchTimeCaps(this.props.location.search+'&date='+tempDate);
    }
    componentWillUnmount(){
        console.log('unmounting====>>>');
        this.props.clearTimeCaps();
    }

    render() {
        const { timeCapsuleObj } = this.props;
        return (
            <TimeCapsuleWrapper>
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
                {this.props.timeCapsuleObj.daily ?
                    <TimeCapsuleWeatherComponent address={this.props.timeCapsuleObj.address}
                        data={timeCapsuleObj.daily}/>
                : '' }
                <ChartsComponent data={timeCapsuleObj.hourly}/>
            </TimeCapsuleWrapper>
        );
    }
}

TimeCapsuleMainContainer.propTypes = {
    timeCapsuleObj: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchTimeCaps: PropTypes.func.isRequired,
    clearTimeCaps: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return ({
            timeCapsuleObj: state.weatherProps.timeCapsuleObj,
            isLoading: state.displayProps.isLoading
    });
};

export const ConnectedTimeCapsuleContainer = connect(mapStateToProps,
                                                { fetchTimeCaps, clearTimeCaps })(TimeCapsuleMainContainer);