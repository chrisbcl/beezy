import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import colors from '../../style/colors.scss';
import { ICharacterURL } from '../Characters';
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
                    <StyledCharacterURL href={url.url} target='_blank'>
                        <StyledCharacterURLType>{url.type}</StyledCharacterURLType>
                        <FaExternalLinkAlt color={colors.primary} />
                    </StyledCharacterURL>
                ))}
            </div>
        </StyledCharacterURLs>
    );
};

export default CharacterURLs;
