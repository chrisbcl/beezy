import React from 'react';
import { StyledHeader, StyledHeaderLink } from './Header.style';

/**
 * Displays the header fixed on top with links to the available pages
 * (Home, Characters and About)
 */
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
