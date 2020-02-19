import Select from 'react-select';
import styled from 'styled-components';

interface IStyledSelectStylesProps {
    width?: string;
}

export const StyledSelect = styled(Select)`
    min-width: 100px;
    padding-left: 3px;
    font-size: 13px;
`;

export const SelectStyles = (props: IStyledSelectStylesProps) => ({
    container: (provided: any) => ({
        ...provided,
        width: props.width ? props.width : 'auto'
    }),
    control: (provided: any) => ({
        ...provided,
        minHeight: '28px',
        boxShadow: 'none',
        borderRadius: '0.25rem'
    }),
    indicatorsContainer: (provided: any) => ({
        ...provided,
        height: '28px'
    }),
    clearIndicator: (provided: any) => ({
        ...provided,
        padding: '3px'
    }),
    dropdownIndicator: (provided: any) => ({
        ...provided,
        padding: '3px'
    })
});
