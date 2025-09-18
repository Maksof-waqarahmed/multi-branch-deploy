import { render, screen } from '@testing-library/react';
import HelloWaqar from './HelloWaqar';
import { describe, it, expect } from 'vitest';

describe('HelloWaqar Component', () => {
  it('renders Hello from Waqar', () => {
    render(<HelloWaqar />);
    const element = screen.getByText(/Hello from Waqar/i);
    expect(element).toBeInTheDocument();
  });
});
