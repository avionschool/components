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
    />
    <Checkbox
      value="selected-small"
      checked={true}
    />
    <br/>
    <Checkbox
      value="large"
      large={true}
    />
    <br/>
    <Checkbox
      value="large"
      large={true}
      checked={true}
    />
    <br/>
    <Checkbox
      value="disabled_default"
      disabled={true}
    />
    <Checkbox
      value="disabled_default"
      disabled={true}
      checked={true}
    />
    <br/>
    <Checkbox
      value="disabled_large"
      disabled={true}
      large={true}
    />
    <br/>
    <Checkbox
      value="disabled_large"
      disabled={true}
      large={true}
      checked={true}
    />
  </>
);
Primary.storyName = "Checkbox";
