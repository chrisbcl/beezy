import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Paginator from 'react-hooks-paginator';
import { FaSearchPlus } from 'react-icons/fa';
import { StyledLink } from '../../App.style';
import Constants from '../../utils/Constants';
import { ICharacter, ListCharacter } from '../Characters';
import { CharactersContext } from '../Characters.context';
import { renderCellValue } from '../CharactersUtils';
import {
    StyledBody,
    StyledCellContainer,
    StyledCharacterList,
    StyledCharacterTable,
    StyledHeader,
    StyledHeaderColumn,
    StyledHeaderRow,
    StyledRow,
    StyledRowCell,
    StyledTablePaginator
} from './CharacterList.style';
import CharacterListHeader from './components/CharacterListHeader';

/**
 * Displays the characters list in form of a paginated table with link to see the character's details.
 * Supports filtering and sorting by the various fields.
 */
const CharacterList = () => {
    const characters = useContext(CharactersContext);
    const columnNumber = Object.keys(characters.columns).length;
    const [filteredList, setFilteredList] = useState(Object.values(characters.state.charactersList));
    const [sortedList, setSortedList] = useState<ICharacter[]>([]);

    const totalRecords = useMemo(() => Object.values(characters.state.charactersList).length, [
        characters.state.charactersList
    ]);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState<ICharacter[]>([]);

    useEffect(() => {
        setCurrentData(filteredList.slice(offset, offset + Constants.CHARACTER_LIST.PAGE_LIMIT));
    }, [offset, filteredList]);

    const onSearchChange = useCallback((list: ICharacter[]) => {
        setFilteredList(list);
    }, []);

    const onSortChange = useCallback((list: ICharacter[]) => {
        setSortedList(list);
    }, []);

    return (
        <StyledCharacterList>
            <CharacterListHeader onSearchChange={onSearchChange} onSortChange={onSortChange} sortedList={sortedList} />
            <StyledCharacterTable columnNumber={columnNumber + 1}>
                <StyledHeader>
                    {Object.values(characters.columns).map(column => (
                        <StyledHeaderRow key={column} data-testid='header-row'>
                            <StyledCellContainer>
                                <StyledHeaderColumn>{column}</StyledHeaderColumn>
                            </StyledCellContainer>
                        </StyledHeaderRow>
                    ))}
                    <StyledHeaderRow>
                        <StyledCellContainer />
                    </StyledHeaderRow>
                </StyledHeader>
                <StyledBody data-testid='body'>
                    {currentData.map(character => (
                        <StyledRow key={`row-${character.id}`} data-testid='row'>
                            {Object.keys(characters.columns).map(column => (
                                <StyledCellContainer key={`${column}-${character.id}`} data-testid='cell'>
                                    <StyledRowCell title={character[column as ListCharacter]?.toString()}>
                                        {renderCellValue(
                                            character[column as ListCharacter],
                                            column as ListCharacter,
                                            characters.columnTypes
                                        )}
                                    </StyledRowCell>
                                </StyledCellContainer>
                            ))}
                            <StyledCellContainer>
                                <StyledRowCell>
                                    <StyledLink to={`/characters/${character.id}`}>
                                        <FaSearchPlus />
                                    </StyledLink>
                                </StyledRowCell>
                            </StyledCellContainer>
                        </StyledRow>
                    ))}
                </StyledBody>
            </StyledCharacterTable>
            <StyledTablePaginator>
                <Paginator
                    totalRecords={totalRecords}
                    pageLimit={4}
                    pageNeighbours={1}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </StyledTablePaginator>
        </StyledCharacterList>
    );
};

export default CharacterList;
