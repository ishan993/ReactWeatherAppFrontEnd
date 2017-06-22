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
    padding: '0 10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '1px 1px 1px rgba(0,0,0,0.1)'
});

const StyledLink = glamorous(Link)({
    flexBasis: '10%',
    textDecoration: 'none',
    fontWeight: 100,
    color: 'grey',
    cursor: 'pointer',
    fontSize: '1.5rem'
});

const HistoryIcon = glamorous.img({
    height: 45,
    width: 45
});

const NavBar = () => {
    return (
        <NavBarWrapper>
            <StyledLink to='/'>
                SkyCast
            </StyledLink>
            <StyledLink to='/history'>
                <HistoryIcon src='http://res.cloudinary.com/ishanvadwala/image/upload/v1498128370/time_hvhjd6.png' title='history'/>
            </StyledLink>
        </NavBarWrapper>
    );
};

export default NavBar;