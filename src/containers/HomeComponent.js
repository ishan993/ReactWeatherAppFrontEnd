import  React from 'react';
import glamorous from 'glamorous';
import SearchBar from './SearchBar';

/*
const Button = glamorous.button({
    borderRadius: 0,
    padding: 10,
    fontSize: 18,
    color: 'white',
    background: '#00BFFF',
    border: '1px solid lightgrey',
    outline: 'none',
    fontWeight: 100
});
*/

const Wrapper = glamorous.div({
    width: '90%',
    margin: 'auto',
    background: 'white'
});


const HomeComponent = () => {
    return (
        <Wrapper>
            <SearchBar />
        </Wrapper>
    );
};

export default HomeComponent;