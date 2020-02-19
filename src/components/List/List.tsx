import React, { ReactNode } from 'react';
import { StyledItem, StyledList, StyledListTitle, StyledUnorderedList } from './List.style';

interface IListProps {
    children: ReactNode[];
    title: string;
}

const List = ({ children, title }: IListProps) => {
    return (
        <StyledList>
            <StyledListTitle>{title}</StyledListTitle>
            <StyledUnorderedList>
                {children.map(item => (
                    <StyledItem key={item?.toString()}>{item}</StyledItem>
                ))}
            </StyledUnorderedList>
        </StyledList>
    );
};

export default List;
