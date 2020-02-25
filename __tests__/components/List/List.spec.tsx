import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import List from '../../../src/components/List/List';

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

it('renders without or with title with different item length', () => {
    act(() => {
        const items = ['item1', 'item2', 'item3'];
        render(<List>{items}</List>, container);
    });
    expect(container?.querySelector('[data-testid="title"]')).toBeNull();
    expect(container?.querySelector('[data-testid="list"]')?.querySelectorAll('li').length).toBe(3);

    act(() => {
        const items = ['item1', 'item2', 'item3', 'item4'];
        render(<List title='Title'>{items}</List>, container);
    });
    expect(container?.querySelector('[data-testid="title"]')?.textContent).toBe('Title');
    expect(container?.querySelector('[data-testid="list"]')?.querySelectorAll('li').length).toBe(4);
});
