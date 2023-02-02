import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

describe('Initial rendering', () => {
  it('renders title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Penn Course Cart/i);
    expect(linkElement).toBeInTheDocument();
  });
});
