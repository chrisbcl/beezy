import styled from 'styled-components';
import colors from '../../style/colors.scss';

interface IStyledCharacterListProps {
    columnNumber: number;
}

export const StyledHeader = styled.th`
    display: contents;

    & > td {
        border-bottom: 1px solid ${colors.lightGreyLight5};
    }

    @media only screen and (max-width: 599px) {
        display: none;
    }
`;

export const StyledRow = styled.tr`
    display: contents;

    & > td {
        border-bottom: 1px solid ${colors.lightGreyLight5};
    }

    &:hover > td {
        background-color: ${colors.lightGreyLight5};
    }

    @media (max-width: 599px) {
        td:not(:last-child) {
            border-bottom: none;
        }

        td:last-child {
            border-bottom: 1px solid ${colors.lightGreyLight5};
        }
    }
`;

export const StyledHeaderColumn = styled.div`
    display: flex;
    font-weight: 800;
    padding: 5px;
    justify-content: flex-start;
`;

export const StyledRowCell = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    font-weight: 300;
    padding: ${props => (props.children ? 5 : 0)}px;
`;

export const StyledCellContainer = styled.td`
    min-width: 0;
    padding: 0;
`;

export const StyledBody = styled.tbody`
    display: contents;
`;

export const StyledCharacterTable = styled.table<IStyledCharacterListProps>`
    display: grid;
    position: relative;
    grid-template-columns: ${props => `repeat(${props.columnNumber}, auto)`};
    overflow-y: auto;
    height: auto;
    max-height: 100%;
    @media (max-width: 799px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledTablePaginator = styled.div`
    grid-row: 4 / 5;
`;

export const StyledCharacterList = styled.div`
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    overflow: hidden;
`;
