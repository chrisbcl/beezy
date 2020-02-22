import React, { ImgHTMLAttributes } from 'react';
import StyledImage from './Image.style';

const Image = (props: ImgHTMLAttributes<HTMLImageElement>) => {
    return <StyledImage {...props} />;
};

export default Image;
