import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { fetchWeather } from '../actions';

const WeatherWrapper = glamorous.div({
    '@media(min-width: 800px)': {
        margin: '10px 0 10px 0',
        display: 'flex',
        justifyContent: 'space-between'
    },
    margin: '10px 0 10px 0',
    padding: 20,
    background: 'white'
});

const ImageWrapper = glamorous.div({
    '@media(min-width: 800px)': {
        flexBasis: '40%'
    },
    padding: 10
});

const ContentWrapper = glamorous.div({
    '@media(min-width: 800px)': {
        flexBasis: '50%',
        padding: 20
    },
    padding: 10,
    background: 'white',
    borderLeft: '.3pt solid lightgrey'
});

const StyledImage = glamorous.img({
    width: '100%',
    height: 'auto',
    maxWidth: 300,
    maxHeight: 300,
    padding: 10
});

const StyledIcon = glamorous.img({
    flexBasis: '20%',
    width: '100%',
    height: 'auto',
    maxWidth: 45,
    maxHeight: 45
});

const StyledH1 = glamorous.h1({
    fontWeight: 100,
    borderBottom: '0.3pt solid lightgrey',
    padding: 5
});

const Bolder = glamorous.span({
    fontSize: 18
});

const ListItem = glamorous.div({
    borderBottom: '0.3pt solid lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    margin: 'auto',
    fontSize: 20,
    padding: 5,
    textAlign: 'justify'
});

const flexSpan = glamorous({
    width: '25%',
    textAlign: 'left'
});
const ButtonWrapper = glamorous.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
});

const DailyItem = (dailyData) => {
    return (
        <ListItem>
            <StyledIcon src={dailyData.icon} />
            <flexSpan>
                {dailyData.day}
            </flexSpan>
            <flexSpan>
                Min:{' '+dailyData.temperatureMin+' '}
                &#176;
            </flexSpan>
            <flexSpan>
                Max: {' '+dailyData.temperatureMax+' '}
                &#176;
            </flexSpan>
        </ListItem>
        );
};

const renderTime = (timeStamp) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';
    const date =  new Date(timeStamp*1000);

    return date.toLocaleDateString('en-US', options).toString();
};

class WeatherComponent extends Component{

    constructor(props){
        super(props);
        console.log('I got these weather props: '+JSON.stringify(props));
    }

    render() {
        const { address, currentWeather, daily } = this.props.weatherProps;
        {console.log('I got updated props: '+JSON.stringify(this.props));}
        return (
            <div>
                <WeatherWrapper>
                    <ImageWrapper>
                        <StyledH1>
                            {renderTime(currentWeather.time)}
                        </StyledH1>
                        <StyledImage src={currentWeather.icon} />
                            <StyledH1>
                                {currentWeather.temperature+' '}
                                &#8457;
                                {'  '+currentWeather.summary}
                            </StyledH1>
                            <ListItem>
                                <span>
                                    <Bolder>Wind</Bolder> {currentWeather.windSpeed}mph
                                </span>
                                <span>
                                    <Bolder>humidity</Bolder> {currentWeather.humidity}%
                                </span>
                                <span>
                                    <Bolder>Visibility</Bolder> {currentWeather.visibility}
                                </span>
                                <span>
                                    <Bolder>Dewpoint</Bolder> {currentWeather.dewPoint}
                                </span>
                            </ListItem>
                    </ImageWrapper>
                    <ContentWrapper>
                        <StyledH1>
                            {address}
                        </StyledH1>
                        { daily.data.map((data)=> {return DailyItem(data);})}
                    </ContentWrapper>
                </WeatherWrapper>
                <ButtonWrapper>
                    <Link to='/history'> What?</Link>
                </ButtonWrapper>
            </div>
        );
    }
}

WeatherComponent.propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    weatherProps: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        weatherProps: state.weatherProps.forecast
      };
};

export default connect(mapStateToProps, { fetchWeather })(WeatherComponent);