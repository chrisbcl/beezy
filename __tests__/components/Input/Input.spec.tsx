import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Input from '../../../src/components/Input/Input';

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

it('renders with or without children', () => {
    act(() => {
        render(<Input />, container);
    });
    expect(container?.querySelector('input')?.value).toBe('');

    act(() => {
        render(<Input>Hello, world!</Input>, container);
    });
    expect(container?.querySelector('input')?.value).toBe('Hello, world!');
});
