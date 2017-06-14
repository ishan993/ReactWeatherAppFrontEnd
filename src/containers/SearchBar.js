import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { fetchSuggestions } from '../actions';

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
    fontWeight: 100,
    background: 'aliceblue'
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

function matchStateToTerm(state, value) {
  return (
    state.name.toLowerCase().replace(/[,]/g, '')
        .indexOf(value.toLowerCase().replace(/[,]/g, '')) !== -1
  );
}

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
// data for testing!
const tempItems= [
    { name: 'Empire State Building, 5th Avenue, New York, NY, United States' },
    { name: 'Empire Boulevard, Webster, NY, United States' },
    { name: 'Empire City Casino, Yonkers Avenue, Yonkers, NY, United States' },
    { name: 'Empire Boulevard, Brooklyn, NY, United States' },
    { name: 'Empire Road, Johannesburg, South Africa' }
  ];

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state={
            value: '',
            items: this.props.placesSuggestions
        };
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

                    onSelect={(val) => {
                        this.setState({value: val});
                    }}

                    shouldItemRender={matchStateToTerm}
                    sortItems={sortStates}
                />
        );
    }
}

SearchBar.propTypes = {
    fetchSuggestions: PropTypes.func.isRequired,
    placesSuggestions: PropTypes.array.isRequired
};

function mapStateToProps(state){
    return {placesSuggestions: state.placesProps.placesSuggestions};
}
export default connect (mapStateToProps, { fetchSuggestions })(SearchBar);