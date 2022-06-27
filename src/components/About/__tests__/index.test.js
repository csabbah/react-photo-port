import React from 'react';
// Render - Renders the component (Jest will simulate DOM in node.js)
// Cleanup - removes components from DOM to prevent memory leak
import { render, cleanup } from '@testing-library/react';

// This adds custom matchers used to test DOM elements
import '@testing-library/jest-dom/extend-expect';

// Import the component we want to test
import About from '../About.js';

// Declare the component we are testing
describe('About component', () => {
  // First test ensures the component is rendering
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  const { asFragment } = render(<About />);
  it('matches snapshot DOM node structure', () => {
    // render About
    expect(asFragment()).toMatchSnapshot();
  });
});

// Call cleanup  afterEach global function from Jest
// This ensures after each test, no memory is left over
afterEach(cleanup);
