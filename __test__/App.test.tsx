import App from '../src/App';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('App shows messages', () => {
  it('renders welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/PROSPER FSE CI-CD RECITATION/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders deploy message', () => {
    render(<App />);
    const linkElement = screen.getByText(/Deploy this app to render./i);
    expect(linkElement).toBeInTheDocument();
  });
});
