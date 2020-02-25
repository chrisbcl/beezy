import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Select from '../../../src/components/Select/Select';

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

it('renders with or without default value', () => {
    act(() => {
        render(<Select options={[]} />, container);
    });
    expect(container?.textContent).toBe('');

    act(() => {
        const options = [{ label: 'Hello', value: 'HELLO' }];
        const value = { label: 'Hello', value: 'HELLO' };
        render(<Select options={options} value={value} />, container);
    });
    expect(container?.textContent).toBe('Hello');
});
