import { ICharacter } from './Characters';

export enum CharactersAction {
    SET_CHARACTER_LIST,
    SET_CHARACTER
}

export const setCharacterList = (characters: ICharacter[]) => ({
    type: CharactersAction.SET_CHARACTER_LIST,
    payload: characters
});

export const setCharacter = (character: ICharacter) => ({
    type: CharactersAction.SET_CHARACTER,
    payload: character
});
