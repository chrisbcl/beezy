import styled from 'styled-components';
import colors from '../../../style/colors.scss';

export const StyledCharacterURLType = styled.div`
    padding-right: 2px;
`;

export const StyledCharacterURLsTitle = styled.div`
    font-weight: bold;
`;

export const StyledCharacterURL = styled.a`
    display: inline-flex;
    text-decoration: none;
    color: black;
    border: 1px solid;
    border-radius: 0.25rem;
    border-color: ${colors.lightGrey};
    padding: 2px;
    margin-right: 5px;
    height: 100%;
    font-size: 0.85em;

    &:hover {
        background-color: ${colors.lightGreyLight5};
    }
`;

export const StyledCharacterURLs = styled.div`
    display: grid;
    grid-row-gap: 2px;
`;
