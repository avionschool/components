import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckboxGroup from '../CheckboxGroup';
import FormControl from '../FormControl';
import { CheckboxConstants } from '../../constants/OptionConstants';

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {}
} as ComponentMeta<typeof CheckboxGroup>;

export const Primary: ComponentStory<typeof CheckboxGroup> = () => (
  <>
    <CheckboxGroup
      options={CheckboxConstants}
    />
    <br />
    <CheckboxGroup
      options={CheckboxConstants}
      isDisabled={true}
    />
    <br />
    <CheckboxGroup
      options={CheckboxConstants}
      isSuccess={true}
    />
    <br />
    <CheckboxGroup
      options={CheckboxConstants}
      isWarning={true}
    />
    <br />
    <CheckboxGroup
      options={CheckboxConstants}
      isError={true}
    />
  </>
);
Primary.storyName = 'Raw';

export const Secondary: ComponentStory<typeof CheckboxGroup> = () => (
  <>
    <FormControl
      label="Default controlled input"
      helperText="Default helper text"
      messageText="Default message text"
    >
      <CheckboxGroup 
        options={CheckboxConstants}
      />
    </FormControl>
    <br />
    <FormControl
      label="Disabled controlled input"
      helperText="Disabled helper text"
      messageText="Disabled message text"
      isDisabled={true}
    >
      <CheckboxGroup 
        options={CheckboxConstants}
      />
    </FormControl>
    <br />
    <FormControl
      label="Success controlled input"
      helperText="Success helper text"
      messageText="Success message text"
      isSuccess={true}
    >
      <CheckboxGroup 
        options={CheckboxConstants}
      />
    </FormControl>
    <br />
    <FormControl
      label="Warning controlled input"
      helperText="Warning helper text"
      messageText="Warning message text"
      isWarning={true}
    >
      <CheckboxGroup 
        options={CheckboxConstants}
      />
    </FormControl>
    <br />
    <FormControl
      label="Error controlled input"
      helperText="Error helper text"
      messageText="Error message text"
      isError={true}
    >
      <CheckboxGroup 
        options={CheckboxConstants}
      />
    </FormControl>
    <br />
  </>
);
Secondary.storyName = 'Form Controlled';
