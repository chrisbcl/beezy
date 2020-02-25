import React, { InputHTMLAttributes } from 'react';
import StyledInput from './Input.style';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: string;
}

const Input = ({ children, ...rest }: IInputProps) => {
    return <StyledInput {...rest} defaultValue={children} />;
};

export default Input;
