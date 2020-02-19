import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'react';
import { ValueType } from 'react-select';
import { ICharacter, ListCharacter } from '../characters/Characters';
import { CharactersContext } from '../characters/Characters.context';
import { OptionType } from '../components/Select/Select';
import Constants from '../Constants';

const useSearch = (sortedList: ICharacter[]) => {
    const characters = useContext(CharactersContext);

    const [searchOption, setSearchOption] = useState(Constants.ALL_OPTION as string);
    const [searchInput, setSearchInput] = useState('');
    const [searchColumns, setSearchColumns] = useState(Object.keys(characters.columns) as ListCharacter[]);

    const getSearchOptions = useCallback(() => {
        return [
            { value: Constants.ALL_OPTION, label: 'All' },
            ...Object.keys(characters.columns).map(key => ({
                value: key,
                label: characters.columns[key as ListCharacter]
            }))
        ];
    }, [characters.columns]);

    const filterFn = (input: string, character: ICharacter, columnKeys: ListCharacter[]) => {
        return columnKeys.some(column =>
            String(character[column])
                .toLowerCase()
                .includes(input.toLowerCase())
        );
    };

    const filterCharacters = useCallback(
        (input: string, columnKeys: ListCharacter[]) => {
            const list = Object.values(sortedList);
            if (!input) {
                return list;
            }
            return list.filter(item => filterFn(input, item, columnKeys));
        },
        [sortedList]
    );

    const memoFilterCharacters = useMemo(() => filterCharacters(searchInput, searchColumns), [
        filterCharacters,
        searchInput,
        searchColumns
    ]);

    const onSearchInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(evt.target.value);
    };

    const onSearchOptionChange = (option: ValueType<OptionType>) => {
        const { value } = option as OptionType;
        if (value === Constants.ALL_OPTION) {
            setSearchColumns(Object.keys(characters.columns) as ListCharacter[]);
        } else {
            setSearchColumns([value as ListCharacter]);
        }
        setSearchOption(value);
    };

    return {
        searchOption,
        onSearchInputChange,
        onSearchOptionChange,
        memoFilterCharacters,
        searchOptions: getSearchOptions()
    };
};

export default useSearch;
