import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DatePicker from '../Datepicker';

describe('Running test for datepicker', () => {

  it('Renders the datepicker element', async () => {
    render(<DatePicker initialDate={new Date('2022-08-07')} name="test-datepicker"/>);
    const datePickerElement = await screen.getByPlaceholderText('Select date');
    expect(datePickerElement).toBeTruthy();
  });

  it('Datepicker renders the initially defined date', async () => {
    render(<DatePicker initialDate={new Date('2022-08-07')}name="test-datepicker"/>);
    const datePickerElement = await screen.getByPlaceholderText('Select date');
    await userEvent.click(datePickerElement);
    const currDate = new Date();
    const month = currDate.toLocaleString('default', { month: 'long' });
    const year = currDate.getFullYear();
    expect(await screen.getByTestId('currentdatedisplay')).toHaveTextContent(`${month} ${year}`);
  });

  it('Clicking the prev button shows the prev month', async () => {
    render(<DatePicker initialDate={new Date('2022-08-07')} name="test-datepicker"/>);
    const datePickerElement = await screen.getByPlaceholderText('Select date');
    await userEvent.click(datePickerElement);
    const prevPickerElement = await screen.getByTestId('prev');
    await userEvent.click(prevPickerElement);
    const currDate = new Date();
    currDate.setMonth(currDate.getMonth() - 1);
    const month = currDate.toLocaleString('default', { month: 'long' });
    const year = currDate.getFullYear();
    expect(await screen.getByTestId('currentdatedisplay')).toHaveTextContent(`${month} ${year}`);
  });

  it('Clicking the next button shows the next month', async () => {
    render(<DatePicker initialDate={new Date('2022-08-07')} name="test-datepicker"/>);
    const datePickerElement = await screen.getByPlaceholderText('Select date');
    await userEvent.click(datePickerElement);
    const nextPickerElement = await screen.getByTestId('next');
    await userEvent.click(nextPickerElement);
    const currDate = new Date();
    currDate.setMonth(currDate.getMonth() + 1);
    const month = currDate.toLocaleString('default', { month: 'long' });
    const year = currDate.getFullYear();
    expect(await screen.getByTestId('currentdatedisplay')).toHaveTextContent(`${month} ${year}`);
  });

  it('Clicking the month shows monthpicker', async () => {
    render(<DatePicker initialDate={new Date('2022-08-07')} name="test-datepicker"/>);
    const datePickerElement = await screen.getByPlaceholderText('Select date');
    await userEvent.click(datePickerElement);
    const openMonthPickerElement = await screen.getByTestId('currentdatedisplay');
    await userEvent.click(openMonthPickerElement);
    expect(await screen.getByText('Jul')).toBeTruthy();
  });

  it('Clicking a corresponding month shows the yearpicker', async () => {
    render(<DatePicker initialDate={new Date('2022-08-07')} name="test-datepicker"/>);
    const datePickerElement = await screen.getByPlaceholderText('Select date');
    await userEvent.click(datePickerElement);
    const openMonthPickerElement = await screen.getByTestId('currentdatedisplay');
    await userEvent.click(openMonthPickerElement);
    const pickMonthElement = await screen.getByText('Jul');
    await userEvent.click(pickMonthElement);
    expect(screen.getByText('2023')).toBeTruthy();
  })

  it('Clicking corresponding month and year changes the shown month and year on the picker', async () => {
    render(<DatePicker name="test-datepicker" value={new Date('04-16-2023')}/>);
    const datePickerElement = await screen.getByPlaceholderText("Select date");
    await userEvent.click(datePickerElement);
    const openMonthPickerElement = await screen.getByTestId('currentdatedisplay');
    await userEvent.click(openMonthPickerElement);
    const pickMonth = await screen.getByText('Apr');
    await userEvent.click(pickMonth);
    const pickYear = await screen.getByText('2023');
    await userEvent.click(pickYear);
    const currDate = new Date();
    expect(screen.findByText("16/04/2023")).toBeTruthy();
  });

  it('Clicking prev on the yearpicker shows the previous decade', async () => {
    render(<DatePicker initialDate={new Date('2022-08-07')} name="test-datepicker" />);
    const datePickerElement = await screen.getByPlaceholderText("Select date");
    await userEvent.click(datePickerElement);
    const openMonthPicker = await screen.getByTestId('currentdatedisplay');
    await userEvent.click(openMonthPicker);
    const openYearPicker = await screen.getByTestId('currentdatedisplay');
    await userEvent.click(openYearPicker);
    const prevDecade = await screen.getByTestId('prev');
    await userEvent.click(prevDecade);
    expect(screen.getByText('2006')).toBeTruthy();
  });

  it('Clicking next on the yearpicker shows the next decade', async () => {
    render(<DatePicker initialDate={new Date('2022-08-07')} name="test-datepicker"/>);
    const datePickerElement = await screen.getByPlaceholderText("Select date");
    await userEvent.click(datePickerElement);
    const openMonthPicker = await screen.getByTestId('currentdatedisplay');
    await userEvent.click(openMonthPicker);
    const openYearPicker = await screen.getByTestId('currentdatedisplay');
    await userEvent.click(openYearPicker);
    const nextDecade = await screen.getByTestId('next');
    await userEvent.click(nextDecade);
    expect(screen.getByText('2034')).toBeTruthy();
  });
});
