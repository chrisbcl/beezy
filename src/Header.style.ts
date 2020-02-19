import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from './style/colors.scss';

export const StyledHeaderLink = styled(Link)`
    display: flex;
    justify-content: center;
    padding: 10px;
    color: white;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        background-color: ${colors.headerDark10};
    }
`;

export const StyledHeader = styled.div`
    display: flex;
    font-weight: 800;
    width: 100%;
    justify-content: center;
    background-color: ${colors.header};
`;
