import React, { ReactNode } from 'react';
import StyledInput from './Input.style';

interface IInputProps {
    children: ReactNode;
}

const Input = ({ children }: IInputProps) => {
    return (
        <div>
            <StyledInput>{children}</StyledInput>
        </div>
    );
};

export default Input;
