import React, { ReactNode } from 'react';
import { StyledItem, StyledList, StyledListTitle, StyledUnorderedList } from './List.style';

interface IListProps {
    children: ReactNode[];
    title?: string;
}

const List = ({ children, title }: IListProps) => {
    return (
        <StyledList>
            {title && <StyledListTitle data-testid='title'>{title}</StyledListTitle>}
            <StyledUnorderedList data-testid='list'>
                {children.map(item => (
                    <StyledItem key={item?.toString()}>{item}</StyledItem>
                ))}
            </StyledUnorderedList>
        </StyledList>
    );
};

export default List;
