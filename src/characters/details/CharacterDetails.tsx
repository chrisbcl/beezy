import { IFetchCharactersResult } from 'App';
import React, { useContext, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Redirect, useParams } from 'react-router-dom';
import { StyledLink } from '../../App.style';
import Field from '../../components/Field/Field';
import Image from '../../components/Image/Image';
import List from '../../components/List/List';
import getFormattedDate from '../../utils/Utils';
import { ICharacter } from '../Characters';
import { CharactersContext } from '../Characters.context';
import { setCharacter } from '../CharactersActions';
import { getImageFullPath } from '../CharactersUtils';
import {
    StyledCharacterDetails,
    StyledCharacterDetailsActions,
    StyledCharacterDetailsContent,
    StyledCharacterDetailsHeader,
    StyledCharacterDetailsHeaderMain,
    StyledCharacterImage
} from './CharacterDetails.style';
import CharacterURLs from './components/CharacterURLs';

/**
 * Displays the character's details with the option to close and go back to the characters list.
 * If the character's details is not present in the current characters list, it will try to fetch the
 * information and updates the characters list.
 *  - main information
 *  - thumbnail
 *  - references
 *  - comics
 *  - stories
 *  - series
 *  - events
 */
const CharacterDetails = () => {
    const characters = useContext(CharactersContext);
    const [characterDetails, setCharacterDetails] = useState<ICharacter | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [inError, setInError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchCharacter = async () => {
            if (id && id in characters.state.charactersList) {
                setCharacterDetails(characters.state.charactersList[id]);
            } else if (id) {
                try {
                    const result = await fetch(
                        `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${process.env.API_KEY_MARVEL}`
                    );
                    const { data }: IFetchCharactersResult = await result.json();
                    if (data.results.length) {
                        characters.dispatch(setCharacter(data.results[0]));
                        setCharacterDetails(data.results[0]);
                    }
                } catch (error) {
                    setInError(true);
                }
            }
        };
        setImageLoaded(false);
        fetchCharacter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const onImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <>
            {inError && <Redirect to='/error' />}
            {characterDetails && (
                <StyledCharacterDetails data-testid='details'>
                    <StyledCharacterDetailsActions>
                        <StyledLink to='/characters'>
                            <FaTimes />
                        </StyledLink>
                    </StyledCharacterDetailsActions>
                    <StyledCharacterDetailsContent>
                        <StyledCharacterDetailsHeader>
                            <StyledCharacterDetailsHeaderMain data-testid='main'>
                                <Field label='ID'>{characterDetails.id}</Field>
                                <Field label='Name'>{characterDetails.name}</Field>
                                {characterDetails.description && (
                                    <Field label='Description'>{characterDetails.description}</Field>
                                )}
                                <Field label='Modified date'>{getFormattedDate(characterDetails.modified)}</Field>
                                {!!characterDetails.urls.length && <CharacterURLs urls={characterDetails.urls} />}
                            </StyledCharacterDetailsHeaderMain>
                            <StyledCharacterImage loaded={imageLoaded}>
                                <Image
                                    src={getImageFullPath(
                                        characterDetails.thumbnail.path,
                                        characterDetails.thumbnail.extension
                                    )}
                                    onLoad={onImageLoad}
                                    onError={onImageLoad}
                                    alt='Thumbnail'
                                />
                            </StyledCharacterImage>
                        </StyledCharacterDetailsHeader>
                        {!!characterDetails.comics.items.length && (
                            <List title='Comics'>{characterDetails.comics.items.map(comic => comic.name)}</List>
                        )}
                        {!!characterDetails.stories.items.length && (
                            <List title='Stories'>{characterDetails.stories.items.map(story => story.name)}</List>
                        )}
                        {!!characterDetails.series.items.length && (
                            <List title='Series'>{characterDetails.series.items.map(serie => serie.name)}</List>
                        )}
                        {!!characterDetails.events.items.length && (
                            <List title='Events'>{characterDetails.events.items.map(event => event.name)}</List>
                        )}
                    </StyledCharacterDetailsContent>
                </StyledCharacterDetails>
            )}
        </>
    );
};

export default CharacterDetails;
