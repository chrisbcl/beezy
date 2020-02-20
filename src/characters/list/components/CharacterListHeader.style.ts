import styled from 'styled-components';

export const StyledSearch = styled.div`
    display: flex;
    grid-column: 3 / 4;
    align-items: center;
    margin-bottom: 5px;

    @media (max-width: 599px) {
        grid-column: 1 / 2;
    }
`;

export const StyledSort = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

export const StyledCharacterListHeader = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding-bottom: 3px;

    @media (max-width: 599px) {
        grid-template-columns: 1fr;
    }
`;
