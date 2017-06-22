import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const StyledH5 = glamorous.h5({
    fontWeight: 100,
    textAlign: 'left',
    color: 'grey',
    margin: 0
});
const StyledH4 = glamorous.h4({
    flexBasis: '60%',
    fontWeight: 100,
    textAlign: 'justify',
    margin: 0,
    padding: 0
});

const ListItem = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
});

const Button = glamorous.button({
    '@media(min-width: 840px)': {
       width: 150,
       padding: 15
    },
    textDecoration: 'none',
    marginLeft: 5,
    borderRadius: 3,
    padding: 3,
    fontSize: '1rem',
    color: 'white',
    background: '#00BFFF',
    border: '1px solid lightgrey',
    outline: 'none',
    fontWeight: 100
});

const StyledLink = Button.withComponent(Link);
const ReStyledLink = glamorous(StyledLink)({
    fontWeight: 100,
    width: 200,
    color: 'papayawhip',
    fontSize: '1rem'
});

const HistoryItemWrapper = glamorous.div({
    border: '0.3pt solid lightgrey',
    borderLeft: 'none',
    borderRight: 'none',
    padding: 10
});



const HistoryItem = (props) => {
    const {lat, lng, time, address} = props.historyProps;
    return (
        <HistoryItemWrapper>
            <ListItem>
                <StyledH4>
                    {address}
                </StyledH4>
                <div>
                    <Button onClick={()=>{
                        props.routerProps.history.push('/forecast?lat='+lat+'&lng='+lng);
                    }}>
                        Visit
                    </Button>
                    <Button onClick={()=> {
                        props.saveSearchHistory(props.historyProps, true);
                        props.routerProps.history.push('/');
                    }}>
                        Delete
                    </Button>
                </div>
            </ListItem>
            <StyledH5>
                {moment(time).format('LLL')}
            </StyledH5>
        </HistoryItemWrapper>
    );
};

HistoryItem.propTypes = {
    historyProps: PropTypes.object.isRequired,
    saveSearchHistory: PropTypes.func.isRequired,
    routerProps: PropTypes.object.isRequired
};

export default HistoryItem;