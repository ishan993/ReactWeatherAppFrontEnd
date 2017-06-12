import React from 'react';
import glamorous from 'glamorous';

const StyledLi = glamorous.li({
    padding: 7,
    borderBottom: '1px solid #eee'
});

const AutocompleteResult = () => {
    return (
        <StyledLi>
            Hello
        </StyledLi>
    );
};

export default AutocompleteResult;