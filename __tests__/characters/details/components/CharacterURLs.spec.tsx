import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ICharacterURL } from '../../../../src/characters/Characters';
import CharacterURLs from '../../../../src/characters/details/components/CharacterURLs';

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

const urls: ICharacterURL[] = [
    { type: 'wiki', url: 'https://www.reactjs.org' },
    { type: 'detail', url: 'https://www.heroku.com' }
];

it('renders urls', () => {
    act(() => {
        render(<CharacterURLs urls={urls} />, container);
    });

    expect(container?.querySelectorAll('[data-testid="url-link"]').length).toBe(2);

    expect(
        container
            ?.querySelectorAll('[data-testid="url-link"]')
            ?.item(0)
            .getAttribute('href')
    ).toBe('https://www.reactjs.org');
    expect(container?.querySelectorAll('[data-testid="url-type"]')?.item(0).textContent).toBe('wiki');

    expect(
        container
            ?.querySelectorAll('[data-testid="url-link"]')
            ?.item(1)
            .getAttribute('href')
    ).toBe('https://www.heroku.com');
    expect(container?.querySelectorAll('[data-testid="url-type"]')?.item(1).textContent).toBe('detail');
});
