import React, { ReactNode } from 'react';
import { StyledField, StyledFieldLabel, StyledFieldValue } from './Field.style';

interface IFieldProps {
    label?: string;
    children: ReactNode;
}

const Field = ({ label, children }: IFieldProps) => {
    return (
        <StyledField>
            {label && <StyledFieldLabel>{label}</StyledFieldLabel>}
            <StyledFieldValue>{children}</StyledFieldValue>
        </StyledField>
    );
};

export default Field;
