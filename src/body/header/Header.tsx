import React from 'react';
import { StyledHeader, StyledHeaderLink } from './Header.style';

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderLink to='/'>Home</StyledHeaderLink>
            <StyledHeaderLink to='/characters'>Characters</StyledHeaderLink>
            <StyledHeaderLink to='/about'>About</StyledHeaderLink>
        </StyledHeader>
    );
};

export default Header;
