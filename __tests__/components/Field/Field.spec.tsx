import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Field from '../../../src/components/Field/Field';

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

it('renders without or with label', () => {
    act(() => {
        render(<Field>Christopher</Field>, container);
    });
    expect(container?.querySelector('[data-testid="label"]')).toBeNull();
    expect(container?.querySelector('[data-testid="value"]')?.textContent).toBe('Christopher');

    act(() => {
        render(<Field label='Name'>Christopher</Field>, container);
    });
    expect(container?.querySelector('[data-testid="label"]')?.textContent).toBe('Name');
    expect(container?.querySelector('[data-testid="value"]')?.textContent).toBe('Christopher');
});
