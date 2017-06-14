import React from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

const NavBarWrapper = glamorous.div({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderBottom: '.3pt solid lightgrey',
    background: 'white',
    zIndex: 9000,
    height: 60,
    display: 'flex',
    alignItems: 'center'
});

const StyledLink = glamorous(Link)({
    flexBasis: '20%',
    textDecoration: 'none',
    fontWeight: 100,
    color: 'grey',
    fontSize: 24
});

const NavBar = () => {
    return (
        <NavBarWrapper>
            <StyledLink to='/'>
                SkyCast
            </StyledLink>
            Header Body
        </NavBarWrapper>
    );
};

export default NavBar;