import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RadioGroup from '../RadioGroup';
import { CheckboxConstants } from '../../constants/OptionConstants';

describe('Running Test for RadioGroup', () => {
  it('RadioGroup component was rendered', async () => {
    render(<RadioGroup options={CheckboxConstants} />);
    expect(screen.getByTestId('radio_container')).toBeInTheDocument();
  });

  it('RadioGroup component renders its assigned values', async () => {
    render(<RadioGroup options={CheckboxConstants} />);
    expect(screen.getByTestId('avion_2020')).toBeInTheDocument();
    expect(screen.getByTestId('lambda')).toBeInTheDocument();
  });

  it('RadioGroup component disabled choices are disabled', async () => {
    render(<RadioGroup options={CheckboxConstants} />);
    expect(screen.getByTestId('lambda')).toBeDisabled();
  });

  it('Selecting a radio option changes checkbox assigned value', async () => {
    const itemToSelect = 'avion_2020';
    render(<RadioGroup options={CheckboxConstants} />);
    const elementToSelect = screen.getByTestId(itemToSelect);
    await userEvent.click(elementToSelect);
    expect(elementToSelect).toBeChecked();
  });

  it('Selecting a radio option fires the passed onChange function', async () => {
    const itemToSelect = 'avion_2020';
    const jestOnChange = jest.fn(e => e);
    render(<RadioGroup options={CheckboxConstants} onChange={jestOnChange} />);
    const elementToSelect = screen.getByTestId(itemToSelect);
    await userEvent.click(elementToSelect);
    expect(elementToSelect).toBeChecked();
    expect(jestOnChange).toBeCalled();
  });

  it('Setting the entire radiogroup to disabled also disables all of its choices', async () => {
    render(<RadioGroup options={CheckboxConstants} isDisabled={true} />);
    expect(screen.getByTestId('avion_2020')).toBeDisabled();
    expect(screen.getByTestId('lambda')).toBeDisabled();
  });

  // Styles
  it('Success radio has green background color', async () => {
    render(<RadioGroup options={CheckboxConstants} isSuccess={true} />);
    const radioElement = screen.getByTestId('radio_container');
    expect(radioElement).toHaveStyle('background-color: rgb(230 254 247 / var(--tw-bg-opacity))');
  });

  it('Warning radio has orange background color', async () => {
    render(<RadioGroup options={CheckboxConstants} isWarning={true} />);
    const radioElement = screen.getByTestId('radio_container');
    expect(radioElement).toHaveStyle('background-color: rgb(255 247 230 / var(--tw-bg-opacity))');
  });

  it('Error checkbox has red background color', async () => {
    render(<RadioGroup options={CheckboxConstants} isError={true} />);
    const radioElement = screen.getByTestId('radio_container');
    expect(radioElement).toHaveStyle('background-color: rgb(251 233 233 / var(--tw-bg-opacity))');
  });

});
