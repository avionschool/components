import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from '../Radio';

export default {
  title: 'Radio',
  components: Radio,
  argTypes: {}
} as ComponentMeta<typeof Radio>;

export const Primary: ComponentStory<typeof Radio> = () => (
  <>
      <Radio
        value="default"
        display="Default Radio Button"
      />
      <br/>
      <Radio
        value="disabled"
        display="Disabled Radio Button"
        disabled={true}
      />
  </>
);
Primary.storyName = 'Radio';
