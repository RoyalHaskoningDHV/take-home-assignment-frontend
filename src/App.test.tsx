import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './app';

test('renders app component with', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
