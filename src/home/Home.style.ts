import styled from 'styled-components';

export const StyledHomeImage = styled.div`
    display: flex;
    max-width: 40%;
    margin-bottom: 10px;
`;

export const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    overflow-y: auto;

    @media (max-width: 599px) {
        font-size: 20px;
    }
`;
