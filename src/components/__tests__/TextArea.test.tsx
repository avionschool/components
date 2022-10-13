import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextArea from '../TextArea';

describe('Running tests for TextArea', () => {

  // Behavior
  it('Renders the TextArea component', async () => {
    render(<TextArea />);
    expect(screen.getByRole('input')).toBeInTheDocument();
  });

  it('TextArea component displays corresponding placeholder', async () => {
    const placeholder = 'Test Placeholder';
    render(<TextArea placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute(
      'placeholder',
      placeholder
    );
  });

  it('TextArea component displays typed values properly', async () => {
    render(<TextArea />);
    const inputValue = 'Sample Input';
    const inputElement = screen.getByRole('input') as HTMLInputElement;
    await userEvent.type(inputElement, inputValue);
    expect(inputElement.value).toBe(inputValue);
  });


  // Styles
  it('Success input component has green border', async () => {
    render(<TextArea isSuccess={true} />);
    expect(screen.getByRole('input')).toHaveStyle('border-color: rgb(5 150 105 / var(--tw-border-opacity))');
  });

  it('Warning input component has orange border', async () => {
    render(<TextArea isWarning={true} />);
    expect(screen.getByRole('input')).toHaveStyle('border-color: rgb(202 138 4 / var(--tw-border-opacity))');
  });

  it('Error input component has red border', async () => {
    render(<TextArea isError={true} />);
    expect(screen.getByRole('input')).toHaveStyle('border-color: rgb(220 38 38 / var(--tw-border-opacity))');
  });

});
