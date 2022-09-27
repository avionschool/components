import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Radio from '../Radio';

describe('Running test for Checkbox', () => {
  it('Radio component is rendered', async () => {
    render(<Radio value="default" display="Default" />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('Radio component has disabled property when disabled', async () => {
    render(<Radio value="default" display="Default" disabled={true} />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('Radio component is selected when clicked on', async () => {
    render(<Radio value="default" display="Default" checked={true}/>);
    const radioElement = screen.getByRole('radio');
    userEvent.click(radioElement);
    expect(radioElement).toBeChecked();
  });
})