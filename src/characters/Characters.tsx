import React from 'react';
import Media from 'react-media';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import CharactersBigScreenStyled from './Characters.style';
import CharacterDetails from './details/CharacterDetails';
import CharacterList from './list/CharacterList';

/**
 * Fields that are displayed on characters table
 */
export interface IListCharacter {
    id: string;
    name: string;
    description?: string;
    modified: string;
}

export interface ICharacterURL {
    type: string;
    url: string;
}

interface ICharacterImage {
    path: string;
    extension: string;
}

interface ICharacterSummary {
    resourceURI: string;
    name: string;
}

type ICharacterComicSummary = ICharacterSummary;

interface ICharacterStorySummary extends ICharacterSummary {
    type: string;
}

type ICharacterEventSummary = ICharacterSummary;

type ICharacterSeriesSummary = ICharacterSummary;

interface ICharacterList<T> {
    available: number;
    returned: number;
    collectionURI: string;
    items: T[];
}

/**
 * Full information on a character
 */
export interface ICharacter extends IListCharacter {
    resourceURI: string;
    urls: ICharacterURL[];
    thumbnail: ICharacterImage;
    comics: ICharacterList<ICharacterComicSummary>;
    stories: ICharacterList<ICharacterStorySummary>;
    events: ICharacterList<ICharacterEventSummary>;
    series: ICharacterList<ICharacterSeriesSummary>;
}

export type ListCharacter = keyof IListCharacter;

/**
 * Characters page that displays the characters table and depending on the width of the window
 * it also displays the character details on the side or on a different page.
 */
const Characters = () => {
    return (
        <Media query='(max-width: 599px)'>
            {isSmall =>
                !isSmall ? (
                    <Router>
                        <CharactersBigScreenStyled>
                            <CharacterList />
                            <Route path='/characters/:id' exact>
                                <CharacterDetails />
                            </Route>
                        </CharactersBigScreenStyled>
                    </Router>
                ) : (
                    <CharacterList />
                )
            }
        </Media>
    );
};

export default Characters;
