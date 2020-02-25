import { ICharacter } from './Characters';

/**
 * Character's available actions to dispatch
 */
export const enum CharactersAction {
    SET_CHARACTER_LIST,
    SET_CHARACTER
}

/**
 * Set the character list action
 * @param characters characters list
 */
export const setCharacterList = (characters: ICharacter[]) => ({
    type: CharactersAction.SET_CHARACTER_LIST,
    payload: characters
});

/**
 * Updates the character details
 * @param character character details
 */
export const setCharacter = (character: ICharacter) => ({
    type: CharactersAction.SET_CHARACTER,
    payload: character
});
