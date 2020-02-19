import styled from 'styled-components';

interface IStyledImageProps {
    loaded: boolean;
}

export const StyledCharacterDetails = styled.div`
    height: 100%;
    overflow-y: auto;
`;

export const StyledCharacterDetailsActions = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    padding: 5px;
`;

export const StyledCharacterDetailsContent = styled.div`
    display: grid;
    padding: 5px;
    grid-gap: 5px;
`;

export const StyledImage = styled.div<IStyledImageProps>`
    visibility: ${props => (props.loaded ? 'visible' : 'hidden')};
`;

export const StyledCharacterDetailsHeaderMain = styled.div`
    display: grid;
    grid-row-gap: 5px;
`;

export const StyledCharacterDetailsHeader = styled.div`
    display: grid;
    grid-column-gap: 5px;
    grid-template-columns: 1fr auto;
`;
