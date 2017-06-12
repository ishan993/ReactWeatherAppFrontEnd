import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { fetchSuggestions } from '../actions';

const wrapperStyle = {
    width: '100%',
    background: 'papayawhip'
};

const inputStyle = {
    width: '100%',
    fontSize: '24px',
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
  position: 'fixed',
  overflow: 'auto',
  maxHeight: '50%'
};

const states = [
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'MA', name: 'Massachusetts' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NM', name: 'New Mexico' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'RI', name: 'Rhode Island' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'VT', name: 'Vermont' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WV', name: 'West Virginia' },
    { abbr: 'WI', name: 'Wisconsin' },
    { abbr: 'WY', name: 'Wyoming' }
  ];


function matchStateToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

function sortStates(a, b, value) {
  const aLower = a.name.toLowerCase();
  const bLower = b.name.toLowerCase();
  const valueLower = value.toLowerCase();
  const queryPosA = aLower.indexOf(valueLower);
  const queryPosB = bLower.indexOf(valueLower);
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB;
  }
  return aLower < bLower ? -1 : 1;
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor got these props: '+JSON.stringify(this.props));
        this.state={
            value: '',
            items: []
        };
    }
    componentDidMount(){
        console.log('I got these props!'+JSON.stringify(this.props));
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
                    onChange={(e) => this.setState({value: e.target.value})}

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
    fetchSuggestions: PropTypes.func.isRequired
};

function mapStateToProps(state){
    console.log("Here's the state: "+JSON.stringify(state.placesProps));
    return {placesSuggestions: state.placesProps.placeSuggestions};
}
export default connect (mapStateToProps, { fetchSuggestions })(SearchBar);