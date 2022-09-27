import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckboxGroup from '../CheckboxGroup';
import { CheckboxConstants } from '../../constants/OptionConstants';

describe('Running Test for CheckboxGroup', () => {
  it('Checkbox component was rendered', async ()=> {
    render(<CheckboxGroup options={CheckboxConstants} />);
    expect(screen.getByTestId('checkbox_container')).toBeInTheDocument();
  });

  it('Checkbox component renders its assigned values', async ()=> {
    render(<CheckboxGroup options={CheckboxConstants} />);
    expect(screen.getByTestId('avion_2020')).toBeInTheDocument();
    expect(screen.getByTestId('lambda')).toBeInTheDocument();
  });

  it('Checkbox component disabled choices are disabled', async ()=> {
    render(<CheckboxGroup options={CheckboxConstants} />);
    expect(screen.getByTestId('lambda')).toBeDisabled();
  });

  it('Selecting a checkbox option changes checkbox assigned value', async ()=> {
    const itemToSelect = 'avion_2020';
    render(<CheckboxGroup options={CheckboxConstants} />);
    const elementToSelect = screen.getByTestId(itemToSelect);
    await userEvent.click(elementToSelect);
    expect(elementToSelect).toBeChecked();
  });

  it('Selecting a checkbox options fires the passed onChange function', async ()=> {
    const itemToSelect = 'avion_2020';
    const jestOnChange = jest.fn(e => e);
    render(<CheckboxGroup options={CheckboxConstants} onChange={jestOnChange} />);
    const elementToSelect = screen.getByTestId(itemToSelect);
    await userEvent.click(elementToSelect);
    expect(jestOnChange).toBeCalled();
  });

  it('Setting the entire checkbox to disabled also disables all of its choices', async ()=> {
    render(<CheckboxGroup options={CheckboxConstants} isDisabled={true} />);
    expect(screen.getByTestId('avion_2020')).toBeDisabled();
    expect(screen.getByTestId('lambda')).toBeDisabled();
  });

  // Styles
  it('Success checkbox has green background color', async ()=> {
    render(<CheckboxGroup options={CheckboxConstants} isSuccess={true} />);
    const checkboxElement = screen.getByTestId('checkbox_container');
    expect(checkboxElement).toHaveStyle('background-color: rgb(230 254 247 / var(--tw-bg-opacity))');
  });

  it('Warning checkbox has orange background color', async ()=> {
    render(<CheckboxGroup options={CheckboxConstants} isWarning={true} />);
    const checkboxElement = screen.getByTestId('checkbox_container');
    expect(checkboxElement).toHaveStyle('background-color: rgb(255 247 230 / var(--tw-bg-opacity))');
  });

  it('Error checkbox has red background color', async ()=> {
    render(<CheckboxGroup options={CheckboxConstants} isError={true} />);
    const checkboxElement = screen.getByTestId('checkbox_container');
    expect(checkboxElement).toHaveStyle('background-color: rgb(251 233 233 / var(--tw-bg-opacity))');
  });

});
