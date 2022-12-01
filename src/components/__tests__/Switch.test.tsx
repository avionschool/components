import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Switch from '../Switch';

describe('Running test for Switch', () => {
  it('Renders the Switch component', async () => {
    render(<Switch checked={false} value="sample value" id="test-switch"/>);
    expect(await screen.getByTestId('test-switch')).toBeInTheDocument();
  });

  it('Renders the correct corresponding text', async () => {
    render(<Switch checked={false} value="sample value" id="test-switch" text="sampleText"/>);
    expect(await screen.getByText('sampleText')).toBeInTheDocument();
  });

  it('Calls the corresponding function when clicked', async () => {
    const testFunc = jest.fn(e => {});
    render(<Switch text="Sample Text" value="Sample Value" id="test-switch" onChange={testFunc} checked={false}/>);
    const switchElement = screen.getByTestId('test-switch');
    await userEvent.click(switchElement);
    expect(testFunc).toBeCalled();
  })
})