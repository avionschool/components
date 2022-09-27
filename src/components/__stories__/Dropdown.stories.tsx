import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from '../Dropdown';
import FormControl from '../FormControl';
import { DropdownConstants } from '../../constants/OptionConstants';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {}
} as ComponentMeta<typeof Dropdown>;

export const Primary: ComponentStory<typeof Dropdown> = () => (
  <>
    <Dropdown
      options={DropdownConstants}
    />
    <br />
    <Dropdown
      options={DropdownConstants}
      isDisabled={true}
    />
    <br />
    <Dropdown
      options={DropdownConstants}
      isSuccess={true}
    />
    <br />
    <Dropdown
      options={DropdownConstants}
      isWarning={true}
    />
    <br />
    <Dropdown
      options={DropdownConstants}
      isError={true}
    />
  </>
)
Primary.storyName = 'Raw';

export const Secondary: ComponentStory<typeof Dropdown> = () => (
  <>
    <FormControl
      label="Default controlled input"
      helperText="Default helper text"
      messageText="Default message text"
    >
      <Dropdown 
        options={DropdownConstants}
      />
    </FormControl>
    <br />
    <FormControl
      label="Disabled controlled input"
      helperText="Disabled helper text"
      messageText="Disabled message text"
      isDisabled={true}
    >
      <Dropdown 
        options={DropdownConstants}
      />
    </FormControl>
    <br />
    <FormControl
      label="Success controlled input"
      helperText="Success helper text"
      messageText="Success message text"
      isSuccess={true}
    >
      <Dropdown 
        options={DropdownConstants}
      />
    </FormControl>
    <br />
    <FormControl
      label="Warning controlled input"
      helperText="Warning helper text"
      messageText="Warning message text"
      isWarning={true}
    >
      <Dropdown 
        options={DropdownConstants}
      />
    </FormControl>
    <br />
    <FormControl
      label="Error controlled input"
      helperText="Error helper text"
      messageText="Error message text"
      isError={true}
    >
      <Dropdown 
        options={DropdownConstants}
      />
    </FormControl>
  </>
);
Secondary.storyName = 'Form Controlled';
