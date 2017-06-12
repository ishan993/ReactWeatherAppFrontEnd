import React from 'react';
import glamorous from 'glamorous';
import AutocompleteResult from './AutocompleteResult';

const StyledUL = glamorous.ul({
    width: '99%',
    margin: 'auto',
    boxSizing: 'border-box',
    fontSize: 24,
    listStyle: 'none inside',
    boxShadow: '2px 2px 2px rgba(0,0,0,0.5)',
    padding: 2,
    textAlign: 'left',
    color: '#777',
    background: '#fff',
    border: '1px solid #ddd',
    fontWeight: 400
});

const AutocompleteResults = () => {

    return (
        <StyledUL>
            <AutocompleteResult />
        </StyledUL>
    );
};

export default AutocompleteResults;