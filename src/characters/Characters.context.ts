import { createContext } from 'react';
import { ListCharacter } from './Characters';
import { IAction, ICharactersState } from './hooks/useCharacters';

export interface ICharacters {
    state: ICharactersState;
    dispatch: React.Dispatch<IAction>;
    columns: { [key in ListCharacter]: string };
    columnTypes: { [key in ListCharacter]: string };
}

export const CharactersContext = createContext<ICharacters>({} as ICharacters);
