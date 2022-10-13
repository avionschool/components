import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DatePicker from '../Datepicker';

describe('Running test for datepicker', () => {

  it('Renders the datepicker element', async () => {
    render(<DatePicker initialDate={new Date('2022-08-07')} name="test-datepicker" id="test-datepicker"/>);
    const datePickerElement = await screen.getByTestId('test-datepicker');
    expect(datePickerElement).toBeTruthy();
  });

  it('Clicking a corresponding month shows date picker', async () => {
    render(<DatePicker initialDate={new Date('2022-08-07')} name="test-datepicker"/>);
    const datePickerElement = await screen.getByPlaceholderText('MM/DD/YYYY');
    await userEvent.click(datePickerElement);
    const openDatePickerElement = await screen.getByText('Jul');
    await userEvent.click(openDatePickerElement);
    expect(await screen.getByText('15')).toBeTruthy();
  });

  it('Clicking corresponding month and date shows the yearpicker', async () => {
    render(<DatePicker name="test-datepicker" value={new Date('04-16-2023')}/>);
    const datePickerElement = await screen.getByPlaceholderText("MM/DD/YYYY");
    await userEvent.click(datePickerElement);
    const pickMonth = await screen.getByText('Jul');
    await userEvent.click(pickMonth);
    const pickDate = await screen.getByText('15');
    await userEvent.click(pickDate);
    expect(screen.findByText("2015")).toBeTruthy();
  });

  it('Clicking prev on the yearpicker shows the previous decade', async () => {
    render(<DatePicker initialDate={new Date('2005-08-07')} name="test-datepicker" />);
    const datePickerElement = await screen.getByPlaceholderText("MM/DD/YYYY");
    await userEvent.click(datePickerElement);
    const pickMonth = await screen.getByText('Jul');
    await userEvent.click(pickMonth);
    const pickDate = await screen.getByText('15');
    await userEvent.click(pickDate);
    const prevDecade = await screen.getByTestId('prev');
    await userEvent.click(prevDecade);
    expect(screen.getByText('1981')).toBeTruthy();
  });

  it('Clicking next on the yearpicker shows the next decade', async () => {
    render(<DatePicker initialDate={new Date('2005-08-07')} name="test-datepicker" />);
    const datePickerElement = await screen.getByPlaceholderText("MM/DD/YYYY");
    await userEvent.click(datePickerElement);
    const pickMonth = await screen.getByText('Jul');
    await userEvent.click(pickMonth);
    const pickDate = await screen.getByText('15');
    await userEvent.click(pickDate);
    const nextDecade = await screen.getByTestId('next');
    await userEvent.click(nextDecade);
    expect(screen.getByText('2006')).toBeTruthy();
  });
});
