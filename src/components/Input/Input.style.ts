import styled from 'styled-components';
import colors from '../../style/colors.scss';

const StyledInput = styled.input`
    width: 100%;
    padding: 5px;
    border-radius: 0.25rem;
    border-color: ${colors.lightGrey};
    box-shadow: none;
    border-style: solid;
    border-width: 1px;
    height: 30px;
    box-sizing: border-box;
`;

export default StyledInput;
