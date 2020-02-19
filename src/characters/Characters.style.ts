import styled from 'styled-components';
import colors from '../style/colors.scss';

export const CharactersBigScreenStyled = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 5px;

    & > *:only-child {
        grid-column: 1 / 3;
    }

    & > *:nth-child(2) {
        border-left: 1px solid ${colors.lightGreyLight5};
    }
    overflow: hidden;
`;

export default CharactersBigScreenStyled;
