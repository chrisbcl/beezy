import React, { InputHTMLAttributes } from 'react';
import StyledInput from './Input.style';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Default value */
    children?: string;
}

/**
 * Input component
 */
const Input = ({ children, ...rest }: IInputProps) => {
    return <StyledInput {...rest} defaultValue={children} />;
};

export default Input;
