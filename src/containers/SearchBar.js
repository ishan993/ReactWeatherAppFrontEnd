import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import moment from 'moment';
import { fetchSuggestions, fetchWeather, saveSearchHistory } from '../actions';

const wrapperStyle = {
    width: '100%',
    background: 'blue',
    position: 'relative'
};

const inputStyle = {
    width: '100%',
    margin: 'auto',
    fontSize: '24px',
    boxSizing: 'border-box',
    padding: '10px',
    fontWeight: 100
};

const menuStyle = {
  borderRadius: '1px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '2px 0',
  fontSize: '20px',
  overflow: 'auto',
  top: 0,
  left: 0,
  position: 'absolute',
  maxHeight: '50%',
  zIndex: 10001
};

/* function matchStateToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== 0
  );
}*/

const sortStates = (a, b, value) => {
    const aLower = a.name.toLowerCase().replace(/[,]/g, '');
    const bLower = b.name.toLowerCase().replace(/[,]/g, '');
    const valueLower = value.toLowerCase();
    const queryPosA = aLower.indexOf(valueLower);
    const queryPosB = bLower.indexOf(valueLower);

    if (queryPosA !== queryPosB) {
        return queryPosA - queryPosB;
  }
  return aLower < bLower ? -1 : 1;
};
const renderMenuFunction = (items, value, style) => {
  return <div style={{ ...style, ...this.menuStyle }} children={items}/>
};

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state={
            value: '',
            items: this.props.placesSuggestions
        };
        this.props.fetchWeather(this.props.placeId);
    }

    componentWillReceiveProps(){
        this.setState({ items: this.props.placesSuggestions });
    }

    render(){
        return (
                <Autocomplete
                  inputProps={{
                        id: 'placeAutocomplete',
                        placeholder: 'Enter a location to search',
                        style: inputStyle
                    }}

                    wrapperProps={{style: wrapperStyle}}
                    menuStyle={{style: menuStyle}}
                    renderItem={(item, isHighlighted) =>
                        <div style={{
                            fontSize: '20px',
                            fontWeight: 'normal',
                            padding: 5,
                            borderBottom: '.3pt solid lightgrey',
                            background: isHighlighted ? 'lightgray' : 'white'
                        }}>
                            {item.name}
                        </div>
                    }

                    getItemValue={(item) => item.name}

                    items={this.state.items}
                    value={this.state.value}
                    onChange={(e) => {
                        this.setState({value: e.target.value});
                        e.target.value.length >= 2 ? this.props.fetchSuggestions(e.target.value) : '';
                    }}
                    renderMenu={renderMenuFunction}

                    onSelect={(val, item) => {
                        this.setState({value: val});
                        this.props.fetchWeather(item.place_id);
                        this.props.saveSearchHistory({name: val, id: item.place_id, time: moment().format('lll')});
                    }}

                    sortItems={sortStates}
                />
        );
    }
}

SearchBar.propTypes = {
    fetchSuggestions: PropTypes.func.isRequired,
    fetchWeather: PropTypes.func.isRequired,
    placesSuggestions: PropTypes.array.isRequired,
    saveSearchHistory: PropTypes.func.isRequired,
    placeId: PropTypes.string.isRequired
};

function mapStateToProps(state){
    return {
            placesSuggestions: state.placesProps.placesSuggestions,
            placeId: state.placesProps.placeId
        };
}
export default connect (mapStateToProps, { fetchSuggestions, fetchWeather, saveSearchHistory })(SearchBar);