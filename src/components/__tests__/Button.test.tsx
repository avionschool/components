import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';

describe('Running Test for Button', () => {

  it('Renders the Button component', async () => {
    render(<Button text="Button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Button renders proper assigned text', async () => {
    const textRender = 'Button Text';
    render(<Button text={textRender} />);
    expect(screen.getByRole('button')).toHaveTextContent(textRender);
  });

  it('Check if button runs assigned function when clicked', async () => {
    const testFunc = jest.fn(e => e.preventDefault());
    render(<Button text="Sample Text" onClick={testFunc}/>);
    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);
    expect(testFunc).toBeCalled();
  });

  it('Check Button Disabled', async () => {
    render(<Button text="Button" disabled />);
    expect(screen.getByRole('button', { name: 'Button' })).toBeDisabled();
  });
});
