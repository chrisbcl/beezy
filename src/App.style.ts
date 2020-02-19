import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './style/colors.scss';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }

    &:hover {
        color: ${colors.primaryDark10};
    }
`;

export const StyledContent = styled.div`
    display: grid;
    overflow: hidden;
    padding: 8px;
`;

export const StyledApp = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
`;
