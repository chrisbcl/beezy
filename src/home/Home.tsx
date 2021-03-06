import React from 'react';
import Image from '../components/Image/Image';
import { StyledHome, StyledHomeImage } from './Home.style';

/**
 * Home content
 */
const Home = () => {
    return (
        <StyledHome>
            <StyledHomeImage>
                <Image src='/images/marvel.png' alt='marvel.png' />
            </StyledHomeImage>
            <div>
                This React App displays a limited 100 characters from the Marvel Universe with the possibility of seeing
                it&apos;s details
            </div>
        </StyledHome>
    );
};

export default Home;
