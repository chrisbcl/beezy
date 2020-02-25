import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { ListCharacter } from '../../../src/characters/Characters';
import { CharactersContext, ICharacters } from '../../../src/characters/Characters.context';
import { renderCellValue } from '../../../src/characters/CharactersUtils';
import { COLUMNS, COLUMN_TYPES } from '../../../src/characters/hooks/useCharacters';
import CharacterList from '../../../src/characters/list/CharacterList';

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
        charactersList: {
            1: { id: '1', name: 'Chris', description: 'first description', modified: '2013-10-17' },
            2: { id: '2', name: 'John', description: 'second description', modified: '2013-10-18' },
            3: { id: '3', name: 'Ana', description: 'third description', modified: '2013-10-19' }
        } as any
    },
    dispatch: () => undefined,
    columns: COLUMNS,
    columnTypes: COLUMN_TYPES
};

it('renders with mock data', () => {
    act(() => {
        render(
            <BrowserRouter>
                <CharactersContext.Provider value={context}>
                    <CharacterList />
                </CharactersContext.Provider>
            </BrowserRouter>,
            container
        );
    });
    expect(container?.querySelectorAll('[data-testid="row"]').length).toBe(3);

    Object.values(context.state.charactersList).forEach((character, rowIndex) => {
        Object.keys(COLUMNS).forEach((column, columnIndex) => {
            expect(
                container
                    ?.querySelectorAll('[data-testid="row"]')
                    .item(rowIndex)
                    .querySelectorAll('[data-testid="cell"]')
                    .item(columnIndex).textContent
            ).toBe(renderCellValue(character[column as ListCharacter], column as ListCharacter, COLUMN_TYPES));
        });
    });
});
