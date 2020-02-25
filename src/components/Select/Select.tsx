import React from 'react';
import { ValueType } from 'react-select';
import { SelectStyles, StyledSelect } from './Select.style';

export type OptionType = { value: string; label: string };

export function getOptionTypeByValue(value: any, options: OptionType[]): OptionType | undefined {
    return options.find(option => option.value === value);
}

interface ISelectProps {
    /** Value selected */
    value?: OptionType;
    /** Options available to select */
    options: OptionType[];
    /** Handler when the selected value changes */
    onChange?: (option: ValueType<OptionType>) => void;
    /** Component's width (CSS value) */
    width?: string;
    /** Placeholder */
    placeholder?: string;
}

/**
 * Select component from react-select
 */
const Select = ({ value, options, onChange, width, placeholder = '' }: ISelectProps) => {
    return (
        <StyledSelect
            placeholder={placeholder}
            value={value}
            options={options}
            onChange={onChange}
            styles={SelectStyles({ width })}
        />
    );
};

export default Select;
