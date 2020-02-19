import React from 'react';
import { ValueType } from 'react-select';
import { SelectStyles, StyledSelect } from './Select.style';

export type OptionType = { value: string; label: string };

export function getOptionTypeByValue(value: any, options: OptionType[]): OptionType | undefined {
    return options.find(option => option.value === value);
}

interface ISelectProps {
    value?: OptionType;
    options: OptionType[];
    onChange?: (option: ValueType<OptionType>) => void;
    width?: string;
}

const Select = ({ value, options, onChange, width }: ISelectProps) => {
    return <StyledSelect value={value} options={options} onChange={onChange} styles={SelectStyles({ width })} />;
};

export default Select;
