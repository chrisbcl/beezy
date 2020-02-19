import React from 'react';
import { StyledAbout, StyledRow } from './About.style';

const About = () => {
    return (
        <StyledAbout>
            <h3>React App made by:</h3>
            <StyledRow>Christopher Costa</StyledRow>
            <StyledRow>
                <a href='mailto: chrisbcl@hotmail.com'>chrisbcl@hotmail.com</a>
            </StyledRow>
        </StyledAbout>
    );
};

export default About;
