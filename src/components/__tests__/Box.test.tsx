import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Box from '../Box';
import { CheckboxConstants } from '../../constants/OptionConstants';
import Radio from '../Radio';

describe('Running Test for Box', () => {
  it('Box component is rendered', async () => {
    render(<Box id="box" />);
    expect(screen.getByTestId('box')).toBeInTheDocument();
  });

  it('Box component renders children component', async () => {
    render(<Box id="box" children={<Radio id="radio" value="radio" />}/>);
    expect(screen.getByTestId('radio')).toBeInTheDocument();
  });

  it('Box component runs onclick function when clicked', async () => {
    const testFunc = jest.fn(e => e.preventDefault());
    render(<Box id="box" children="Hello World" handleClick={testFunc} />);
    const boxElement = screen.getByTestId('box');
    await userEvent.click(boxElement);
    expect(testFunc).toBeCalled();
  });

  it('Box component is disabled when set as disabled', async () => {
    render(<Box id="box" children="Hello world" isDisabled={true} />);
    expect(screen.getByTestId('box')).toHaveClass('pointer-events-none opacity-50 hover:cursor-not-allowed');
  });

  it('Box component is read-only when specified as read-only', async () => {
    render(<Box id="box" children="Hello world" isReadOnly={true} />);
    expect(screen.getByTestId('box')).toHaveClass('pointer-events-none');
  });

  it('Selected box should have the assigned selected properties', async () => {
    render(<Box id="box" children="Hello world" isSelected={true} />);
    const boxElement = screen.getByTestId('box');
    expect(boxElement).toHaveStyle('border-color: rgb(231 68 68 / var(--tw-border-opacity))');
  });

});
