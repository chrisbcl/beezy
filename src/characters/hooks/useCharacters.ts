import { useReducer } from 'react';
import Constants from '../../utils/Constants';
import { ICharacter, ListCharacter } from '../Characters';
import { CharactersAction } from '../CharactersActions';

export interface IAction {
    type: CharactersAction;
    payload: ICharacter[] | ICharacter;
}

export interface ICharactersState {
    charactersList: { [key: string]: ICharacter };
}

enum Columns {
    ID = 'id',
    NAME = 'name',
    DESCRIPTION = 'description',
    MODIFIED = 'modified'
}

export const COLUMNS: { [key in ListCharacter]: string } = {
    id: 'ID',
    name: 'Name',
    description: 'Description',
    modified: 'Modified Date'
} as const;

export const COLUMN_TYPES = {
    [Columns.ID]: Constants.TYPES.TEXT,
    [Columns.NAME]: Constants.TYPES.TEXT,
    [Columns.DESCRIPTION]: Constants.TYPES.TEXT,
    [Columns.MODIFIED]: Constants.TYPES.DATE
} as const;

const useCharacters = (initialCharacters: { [key: string]: ICharacter }) => {
    const initialState: ICharactersState = {
        charactersList: initialCharacters
    };

    const reducer = (state: ICharactersState, { type, payload }: IAction): ICharactersState => {
        const newState = { ...state };
        switch (type) {
            case CharactersAction.SET_CHARACTER_LIST: {
                const list = payload as ICharacter[];

                return {
                    ...newState,
                    charactersList: {
                        ...newState.charactersList,
                        ...list.reduce<{ [key: string]: ICharacter }>((acc, item) => {
                            acc[item.id] = item;
                            return acc;
                        }, {})
                    }
                };
            }
            case CharactersAction.SET_CHARACTER: {
                const { id } = payload as ICharacter;
                const updatedCharacters = { ...newState.charactersList };
                const currentCharacter = newState.charactersList[id];
                updatedCharacters[id] = { ...currentCharacter, ...(payload as ICharacter) };
                return {
                    ...newState,
                    charactersList: updatedCharacters
                };
            }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return {
        state,
        dispatch,
        columns: COLUMNS,
        columnTypes: COLUMN_TYPES
    };
};

export default useCharacters;
