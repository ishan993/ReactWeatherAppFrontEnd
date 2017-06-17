import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const StyledIcon = glamorous.img({
    flexBasis: '20%',
    width: '100%',
    height: 'auto',
    maxWidth: 45,
    maxHeight: 45
});

const flexSpan = glamorous({
    width: '25%',
    textAlign: 'left'
});

// Duplicated.. Don't forget to remove it later
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

const DailyItem = (props) => {
    const { dailyData } = props;
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

DailyItem.propTypes = {
    dailyData: PropTypes.object.isRequired
};

export default DailyItem;