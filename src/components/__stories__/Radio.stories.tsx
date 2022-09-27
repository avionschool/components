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
      />
      <br/>
      <Radio
        value="selected"
        checked={true}
      />
      <br/>
      <Radio
        value="disabled"
        disabled={true}
      />
      <br/>

  </>
);
Primary.storyName = 'Radio';
