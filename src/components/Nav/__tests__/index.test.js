/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../Nav.js';

describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(<Nav />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });
});

// Here we can test for the Emoji Visibility
// This query would return the emoji
describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);
    // NOTE - 'link' was a dataset value attached to the actual component i.e. <a data-testid="link" href="/">
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});

afterEach(cleanup);
