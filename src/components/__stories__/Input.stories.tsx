import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../Input';
import FormControl from '../FormControl';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = () => (
  <>
    <Input
      label="Default"
      placeholder="placeholder"
    />
    <br />
    <Input
      label="Disabled"
      placeholder="disabled"
      isDisabled={true}
    />
    <br />
    <Input
      label="Success"
      placeholder="success"
      isSuccess={true}
      message="Success message"
    />
    <br />
    <Input
      label="Warning"
      placeholder="warning"
      isWarning={true}
      message="Warning message"
    />
    <br />
    <Input
      label="Error"
      placeholder="error"
      isError={true}
      message="Error message"
    />
  </>
);
Primary.storyName='Raw';

export const Secondary: ComponentStory<typeof Input> = () => (
  <>
    <FormControl
      label="Default controlled input"
      helperText="Default helper text"
      messageText="Default message text"
    >
      <Input 
        placeholder="default"
      />
    </FormControl>
    <br />
    <FormControl
      label="Disabled controlled input"
      helperText="Disabled helper text"
      messageText="Disabled message text"
      isDisabled={true}
    >
      <Input 
        placeholder="disabled"
      />
    </FormControl>
    <br />
    <FormControl
      label="Success controlled input"
      helperText="Success helper text"
      messageText="Success message text"
      isSuccess={true}
    >
      <Input 
        placeholder="success"
      />
    </FormControl>
    <br />
    <FormControl
      label="Warning controlled input"
      helperText="Warning helper text"
      messageText="Warning message text"
      isWarning={true}
    >
      <Input 
        placeholder="warning"
      />
    </FormControl>
    <br />
    <FormControl
      label="Error controlled input"
      helperText="Error helper text"
      messageText="Error message text"
      isError={true}
    >
      <Input 
        placeholder="error"
      />
    </FormControl>
  </>
);
Secondary.storyName='Form Controlled';
