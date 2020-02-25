import React, { ReactNode } from 'react';
import { StyledField, StyledFieldLabel, StyledFieldValue } from './Field.style';

interface IFieldProps {
    label?: string;
    children: ReactNode;
}

const Field = ({ label, children }: IFieldProps) => {
    return (
        <StyledField>
            {label && <StyledFieldLabel data-testid='label'>{label}</StyledFieldLabel>}
            <StyledFieldValue data-testid='value'>{children}</StyledFieldValue>
        </StyledField>
    );
};

export default Field;
