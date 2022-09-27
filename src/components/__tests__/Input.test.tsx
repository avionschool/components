import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '../Input';

describe('Running tests for Input', () => {

  // Behavior
  it('Renders the Input component', async () => {
    render(<Input />);
    expect(screen.getByRole('input')).toBeInTheDocument();
  });

  it('Input component displays corresponding placeholder', async () => {
    const placeholder = 'Test Placeholder';
    render(<Input placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute(
      'placeholder',
      placeholder
    );
  });

  it('Input component displays typed values properly', async () => {
    render(<Input />);
    const inputValue = 'Sample Input';
    const inputElement = screen.getByRole('input') as HTMLInputElement;
    await userEvent.type(inputElement, inputValue);
    expect(inputElement.value).toBe(inputValue);
  });


  // Styles
  it('Success input component has green border', async () => {
    render(<Input isSuccess={true} />);
    expect(screen.getByRole('input')).toHaveStyle('border-color: rgb(5 150 105 / var(--tw-border-opacity))');
  });

  it('Warning input component has orange border', async () => {
    render(<Input isWarning={true} />);
    expect(screen.getByRole('input')).toHaveStyle('border-color: rgb(202 138 4 / var(--tw-border-opacity))');
  });

  it('Error input component has red border', async () => {
    render(<Input isError={true} />);
    expect(screen.getByRole('input')).toHaveStyle('border-color: rgb(220 38 38 / var(--tw-border-opacity))');
  });

});
