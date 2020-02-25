import React from 'react';
import StyledError from './Error.style';

/**
 * Error page to be displayed when the data fetching fails.
 */
const Error = () => {
    return (
        <StyledError>
            <h2>Error</h2>
            <div>An error occured while fetching the data</div>
        </StyledError>
    );
};

export default Error;
