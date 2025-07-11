import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { Button, ButtonProps } from './Button';

const renderButton = (overrideProps: Partial<ButtonProps> = {}) => {
  const defaultProps: ButtonProps = {
    text: 'text',
    ...overrideProps,
  };

  return render(<Button {...defaultProps} />);
};

describe('ButtonV2', () => {
  it('should render with text', () => {
    renderButton({ text: 'Click me' });
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should render with left icon', () => {
    renderButton({ text: 'Next', iconLeft: <ArrowRight /> });
    const svg = screen.getByRole('button').querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
  it('should render with right icon', () => {
    renderButton({ text: 'Next', iconRight: <ArrowRight /> });
    const svg = screen.getByRole('button').querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should render iconLeft and text together', () => {
    renderButton({ text: 'Next', iconLeft: <ArrowRight /> });
    const button = screen.getByRole('button', { name: 'Next' });
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    renderButton({ text: 'Click', onClick: handleClick });
    const button = screen.getByRole('button', { name: 'Click' });

    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    renderButton({ text: 'Click', onClick: handleClick, disabled: true });
    const button = screen.getByRole('button', { name: 'Click' });

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should apply disabled prop', () => {
    renderButton({ text: 'Disabled', disabled: true });
    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
  });

  it('should render with variant "secondary"', () => {
    renderButton({ text: 'Secondary', variant: 'secondary' });
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });

  it('should render with variant "outline"', () => {
    renderButton({ text: 'Outline', variant: 'outline' });
    expect(screen.getByText('Outline')).toBeInTheDocument();
  });

  it('should render with size "sm"', () => {
    renderButton({ text: 'Small', size: 'sm' });
    expect(screen.getByText('Small')).toBeInTheDocument();
  });

  it('should render with size "lg"', () => {
    renderButton({ text: 'Large', size: 'lg' });
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Button text="Snapshot" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
