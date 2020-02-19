import styled from 'styled-components';
import colors from './style/colors.scss';

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.footer};
    height: 30px;
    padding: 7px;
    color: white;
`;

export default StyledFooter;
