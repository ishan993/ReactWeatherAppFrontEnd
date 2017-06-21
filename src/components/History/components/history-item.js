import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

const HistoryItemWrapper = glamorous.div({
    border: '0.3pt solid lightgrey',
    borderLeft: 'none',
    borderRight: 'none',
    padding: 10
});

const deleteItem = (latLngObj) => {
    console.log('Imagine that I am deleting this link'+JSON.stringify(latLngObj));
};

const HistoryItem = (props) => {
    const {lat, lng, time, address} = props.historyProps;
    return (
        <HistoryItemWrapper>
            <ListItem>
                <StyledH4>
                    {address}
                </StyledH4>
                <div>
                    <StyledLink to={'/forecast?lat='+lat+'&lng='+lng}>
                        Visit
                    </StyledLink>
                    <Button onClick={() => deleteItem({lat: lat, lng: lng})}>
                        Delete
                    </Button>
                </div>
            </ListItem>
            <StyledH5>
                {time}
            </StyledH5>
        </HistoryItemWrapper>
    );
};

HistoryItem.propTypes = {
    historyProps: PropTypes.object.isRequired
};

export default HistoryItem;