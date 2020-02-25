import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Image from '../../../src/components/Image/Image';

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

it('renders image', () => {
    act(() => {
        render(<Image src='/public/images/marvel.png' />, container);
    });
    expect(container?.querySelector('img')).toBeTruthy();
});
