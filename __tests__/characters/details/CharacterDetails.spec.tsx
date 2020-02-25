import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import routerData from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { CharactersContext, ICharacters } from '../../../src/characters/Characters.context';
import CharacterDetails from '../../../src/characters/details/CharacterDetails';
import { COLUMNS, COLUMN_TYPES } from '../../../src/characters/hooks/useCharacters';
import getFormattedDate from '../../../src/utils/Utils';

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
            1: {
                id: '1',
                name: 'Chris',
                description: 'first description',
                modified: '2013-10-17',
                comics: { items: [] } as any,
                events: { items: [] } as any,
                series: { items: [] } as any,
                resourceURI: '',
                stories: { items: [] } as any,
                thumbnail: {} as any,
                urls: []
            },
            2: {
                id: '2',
                name: 'John',
                description: 'second description',
                modified: '2013-10-18',
                comics: { items: [] } as any,
                events: { items: [] } as any,
                series: { items: [] } as any,
                resourceURI: '',
                stories: { items: [] } as any,
                thumbnail: {} as any,
                urls: []
            }
        }
    },
    dispatch: () => undefined,
    columns: COLUMNS,
    columnTypes: COLUMN_TYPES
};

const params = (id: string) => ({ id });

it('renders with different character details', async () => {
    let mock = jest.spyOn(routerData, 'useParams').mockReturnValue(params('1'));

    act(() => {
        render(
            <BrowserRouter>
                <CharactersContext.Provider value={context}>
                    <CharacterDetails />
                </CharactersContext.Provider>
            </BrowserRouter>,
            container
        );
    });

    const mainInfo = container?.querySelector('[data-testid="main"]');

    expect(mainInfo?.children.item(0)?.querySelector('[data-testid="value"]')?.textContent).toBe('1');
    expect(mainInfo?.children.item(1)?.querySelector('[data-testid="value"]')?.textContent).toBe('Chris');
    expect(mainInfo?.children.item(2)?.querySelector('[data-testid="value"]')?.textContent).toBe('first description');
    expect(mainInfo?.children.item(3)?.querySelector('[data-testid="value"]')?.textContent).toBe(
        getFormattedDate('2013-10-17')
    );
    mock.mockRestore();

    mock = jest.spyOn(routerData, 'useParams').mockReturnValue(params('2'));
    act(() => {
        render(
            <BrowserRouter>
                <CharactersContext.Provider value={context}>
                    <CharacterDetails />
                </CharactersContext.Provider>
            </BrowserRouter>,
            container
        );
    });

    expect(mainInfo?.children.item(0)?.querySelector('[data-testid="value"]')?.textContent).toBe('2');
    expect(mainInfo?.children.item(1)?.querySelector('[data-testid="value"]')?.textContent).toBe('John');
    expect(mainInfo?.children.item(2)?.querySelector('[data-testid="value"]')?.textContent).toBe('second description');
    expect(mainInfo?.children.item(3)?.querySelector('[data-testid="value"]')?.textContent).toBe(
        getFormattedDate('2013-10-18')
    );
    mock.mockRestore();
});
