import React, { useEffect } from 'react';
import StyledInput from '../../../components/Input/Input.style';
import Select, { getOptionTypeByValue } from '../../../components/Select/Select';
import { ICharacter } from '../../Characters';
import useSearch from '../../hooks/useSearch';
import useSort from '../../hooks/useSort';
import { StyledCharacterListHeader, StyledSearch, StyledSort } from './CharacterListHeader.style';

interface ICharacterListHeaderProps {
    onSearchChange: (filteredList: ICharacter[]) => void;
    onSortChange: (sortedList: ICharacter[]) => void;
    sortedList: ICharacter[];
}

const CharacterListHeader = ({ onSearchChange, onSortChange, sortedList }: ICharacterListHeaderProps) => {
    const { searchOption, onSearchInputChange, onSearchOptionChange, searchOptions, memoFilterCharacters } = useSearch(
        sortedList
    );
    const {
        memoSortCharacters,
        sortField,
        sortDirection,
        onSortDirectionChange,
        onSortFieldOptionChange,
        sortDirectionOptions,
        sortFieldOptions
    } = useSort();

    useEffect(() => {
        onSearchChange(memoFilterCharacters);
    }, [memoFilterCharacters, onSearchChange]);

    useEffect(() => {
        onSortChange(memoSortCharacters);
    }, [memoSortCharacters, onSortChange]);

    return (
        <StyledCharacterListHeader>
            <StyledSort>
                <legend>Sort:</legend>
                <Select
                    value={getOptionTypeByValue(sortField, sortFieldOptions)}
                    options={sortFieldOptions}
                    onChange={onSortFieldOptionChange}
                    width='150px'
                />
                <Select
                    value={getOptionTypeByValue(sortDirection, sortDirectionOptions)}
                    options={sortDirectionOptions}
                    onChange={onSortDirectionChange}
                    width='120px'
                />
            </StyledSort>
            <StyledSearch>
                <legend>Search:</legend>
                <StyledInput onChange={onSearchInputChange} />
                <Select
                    value={getOptionTypeByValue(searchOption, searchOptions)}
                    options={searchOptions}
                    onChange={onSearchOptionChange}
                    width='150px'
                />
            </StyledSearch>
        </StyledCharacterListHeader>
    );
};

export default CharacterListHeader;
