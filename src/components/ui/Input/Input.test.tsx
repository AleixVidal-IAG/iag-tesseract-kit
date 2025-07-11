import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { expect, test } from 'vitest';

import { Input } from './Input';

test('renders an input element', () => {
  render(<Input placeholder="Test placeholder" />);
  const inputElement = screen.getByPlaceholderText('Test placeholder');
  expect(inputElement).toBeInTheDocument();
});

test('handles user input correctly', async () => {
  const user = userEvent.setup();
  render(<Input placeholder="Test placeholder" />);
  const inputElement = screen.getByPlaceholderText('Test placeholder');

  await user.type(inputElement, 'Test input');
  expect(inputElement).toHaveValue('Test input');
});
