import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from '../Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {}
} as ComponentMeta<typeof Checkbox>;

export const Primary: ComponentStory<typeof Checkbox> = () => (
  <>
    <Checkbox
      value="default"
      display="Default"
    />
    <br/>
    <Checkbox
      value="large"
      display="Large Checkbox"
      large={true}
    />
    <br/>
    <Checkbox
      value="disabled_default"
      display="Disabled Default Checkbox"
      disabled={true}
    />
    <br/>
    <Checkbox
      value="disabled_large"
      display="Disabled Large Checkbox"
      disabled={true}
      large={true}
    />
  </>
);
Primary.storyName = "Checkbox";
