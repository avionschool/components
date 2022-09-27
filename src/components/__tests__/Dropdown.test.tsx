import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Dropdown from '../Dropdown';
import { DropdownConstants } from '../../constants/OptionConstants';

describe('Running Test for Dropdown', () => {

  it('Check if dropdown is rendered', async () => {
    render(<Dropdown options={DropdownConstants} />);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('Dropdown renders corresponding choices', async () => {
    render(<Dropdown options={DropdownConstants} />);
    expect(screen.getByTestId('avion_2020')).toBeInTheDocument();
  });

  it('Disabled choices are rendered as disabled', async () => {
    render(<Dropdown options={DropdownConstants} />);
    const disabledOptionElement = screen.getByTestId('lambda');
    expect(disabledOptionElement).toBeDisabled();
  });

  it('Selected options are assigned as the dropdown value', async () => {
    const testOptionVal = 'avion_2020';
    render(<Dropdown options={DropdownConstants} />);
    const dropdownElement = screen.getByRole('listbox') as HTMLSelectElement;
    await userEvent.selectOptions(dropdownElement, testOptionVal);
    expect(dropdownElement.value).toBe(testOptionVal);
  });
  
  it('Dropdown fires onChange function when value is changed', async () => {
    const testOptionVal = 'avion_2020';
    const testFunc = jest.fn(e => e.preventDefault);
    render(<Dropdown options={DropdownConstants} onChange={testFunc} />);
    const dropdownElement = screen.getByRole('listbox');
    await userEvent.selectOptions(dropdownElement, testOptionVal);
    expect(testFunc).toBeCalled();
  });
});
