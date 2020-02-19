import React from 'react';
import Media from 'react-media';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharactersBigScreenStyled from './Characters.style';
import CharacterDetails from './details/CharacterDetails';

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
