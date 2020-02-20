import { useCallback, useContext, useMemo, useState } from 'react';
import { ValueType } from 'react-select';
import { OptionType } from '../../components/Select/Select';
import { ICharacter, ListCharacter } from '../Characters';
import { CharactersContext } from '../Characters.context';

enum SORT_DIRECTION {
    ASC = 'asc',
    DESC = 'desc'
}

const SORT_DIRECTION_OPTIONS = [
    { value: SORT_DIRECTION.ASC, label: 'Ascendent' },
    { value: SORT_DIRECTION.DESC, label: 'Descendent' }
];

const useSort = () => {
    const characters = useContext(CharactersContext);
    const [sortField, setSortField] = useState<ListCharacter>('id');
    const [sortDirection, setSortDirection] = useState(SORT_DIRECTION.ASC);

    const getSortFieldOptions = useCallback(() => {
        return Object.keys(characters.columns).map(key => ({
            value: key,
            label: characters.columns[key as ListCharacter]
        }));
    }, [characters.columns]);

    const sortFn = (columnKey: ListCharacter, direction: SORT_DIRECTION) => {
        return (character1: ICharacter, character2: ICharacter) => {
            const value1 = character1[columnKey];
            const value2 = character2[columnKey];
            if (!Number.isNaN(Number(value1)) && !Number.isNaN(Number(value2))) {
                const valueNumber1 = Number(value1);
                const valueNumber2 = Number(value2);
                return direction === SORT_DIRECTION.ASC ? valueNumber1 - valueNumber2 : valueNumber2 - valueNumber1;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            if (String(character1[columnKey])!.toLowerCase() < String(character2[columnKey]!).toLowerCase()) {
                return direction === SORT_DIRECTION.ASC ? -1 : 1;
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            if (String(character1[columnKey])!.toLowerCase() > String(character2[columnKey])!.toLowerCase()) {
                return direction === SORT_DIRECTION.ASC ? 1 : -1;
            }
            return 0;
        };
    };

    const sortCharacters = useCallback(
        (columnKey: ListCharacter, direction: SORT_DIRECTION) => {
            const list = Object.values(characters.state.charactersList);
            return list.sort(sortFn(columnKey, direction));
        },
        [characters.state.charactersList]
    );

    const memoSortCharacters = useMemo(() => sortCharacters(sortField, sortDirection), [
        sortCharacters,
        sortDirection,
        sortField
    ]);

    const onSortFieldOptionChange = (option: ValueType<OptionType>) => {
        const { value } = option as OptionType;
        setSortField(value as ListCharacter);
    };

    const onSortDirectionChange = (option: ValueType<OptionType>) => {
        const { value } = option as OptionType;
        setSortDirection(value as SORT_DIRECTION);
    };

    return {
        sortField,
        sortDirection,
        onSortDirectionChange,
        onSortFieldOptionChange,
        memoSortCharacters,
        sortFieldOptions: getSortFieldOptions(),
        sortDirectionOptions: SORT_DIRECTION_OPTIONS
    };
};

export default useSort;
