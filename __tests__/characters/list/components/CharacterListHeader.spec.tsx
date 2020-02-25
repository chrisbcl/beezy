import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { CharactersContext, ICharacters } from '../../../../src/characters/Characters.context';
import { COLUMNS } from '../../../../src/characters/hooks/useCharacters';
import CharacterListHeader from '../../../../src/characters/list/components/CharacterListHeader';

let container: HTMLDivElement | null = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container as HTMLDivElement);
    (container as HTMLDivElement).remove();
    container = null;
});

const context: ICharacters = {
    state: {
        charactersList: {}
    },
    dispatch: () => undefined,
    columns: COLUMNS,
    columnTypes: {} as any
};

it('renders component', () => {
    act(() => {
        render(
            <CharactersContext.Provider value={context}>
                <CharacterListHeader onSearchChange={() => undefined} onSortChange={() => undefined} sortedList={[]} />
            </CharactersContext.Provider>,
            container
        );
    });
    expect(container?.querySelector('[data-testid="sort"]')?.children.length).toBe(3);
    expect(container?.querySelector('[data-testid="sort"]')?.children.item(1)?.textContent).toBe('ID');
    expect(container?.querySelector('[data-testid="sort"]')?.children.item(2)?.textContent).toBe('Ascendent');

    expect(container?.querySelector('[data-testid="search"]')?.children.length).toBe(3);
    expect(container?.querySelector('[data-testid="search"]')?.children.item(1)?.textContent).toBe('');
    expect(container?.querySelector('[data-testid="search"]')?.children.item(2)?.textContent).toBe('All');
});
