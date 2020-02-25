import React, { ReactNode } from 'react';
import { StyledField, StyledFieldLabel, StyledFieldValue } from './Field.style';

interface IFieldProps {
    /** Field label */
    label?: string;
    /** Field value */
    children: ReactNode;
}

/**
 * Field component to display a value associated with an optional label
 */
const Field = ({ label, children }: IFieldProps) => {
    return (
        <StyledField>
            {label && <StyledFieldLabel data-testid='label'>{label}</StyledFieldLabel>}
            <StyledFieldValue data-testid='value'>{children}</StyledFieldValue>
        </StyledField>
    );
};

export default Field;
