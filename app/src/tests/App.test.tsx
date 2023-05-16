import React from 'react';

import {
  render,
  screen,
} from './index'

import {
  default as App
} from '../pages/App/index'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
