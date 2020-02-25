import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import colors from '../../../style/colors.scss';
import { ICharacterURL } from '../../Characters';
import {
    StyledCharacterURL,
    StyledCharacterURLs,
    StyledCharacterURLsTitle,
    StyledCharacterURLType
} from './CharacterURLs.style';

interface ICharacterURLsProps {
    urls: ICharacterURL[];
}

const CharacterURLs = ({ urls }: ICharacterURLsProps) => {
    return (
        <StyledCharacterURLs>
            <StyledCharacterURLsTitle>References</StyledCharacterURLsTitle>
            <div>
                {urls.map(url => (
                    <StyledCharacterURL key={url.url} data-testid='url-link' href={url.url} target='_blank'>
                        <StyledCharacterURLType data-testid='url-type'>{url.type}</StyledCharacterURLType>
                        <FaExternalLinkAlt color={colors.primary} />
                    </StyledCharacterURL>
                ))}
            </div>
        </StyledCharacterURLs>
    );
};

export default CharacterURLs;
