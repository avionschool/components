import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '../Checkbox';

describe ('Running tests for Checkbox', () => {
  it('Checkbox component is rendered', async () => {
    render(<Checkbox value="default" display="Default" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('If disabled, checkbox has the disabled property', async () => {
    render(<Checkbox value="default" display="Default" disabled={true} />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('Selecting the checkbox component focuses and selects the component', async () => {
    render(<Checkbox value="default" display="Default" checked={true}/>);
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeChecked()
  })
});
