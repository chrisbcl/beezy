import { createContext } from 'react';
import { ListCharacter } from './Characters';
import { IAction, ICharactersState } from './hooks/useCharacters';

export interface ICharacters {
    state: ICharactersState;
    dispatch: React.Dispatch<IAction>;
    columns: { [key in ListCharacter]: string };
    columnTypes: { [key in ListCharacter]: string };
}

const characters: ICharacters = {
    state: {
        charactersList: {}
    },
    dispatch: () => undefined,
    columns: {} as any,
    columnTypes: {} as any
};

export const CharactersContext = createContext(characters);
