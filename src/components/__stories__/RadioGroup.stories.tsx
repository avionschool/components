import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioGroup from '../RadioGroup';
import { CheckboxConstants } from '../../constants/OptionConstants';

export default {
  title: 'RadioGroup',
  components: RadioGroup,
  argTypes: {}
} as ComponentMeta<typeof RadioGroup>;

export const Primary: ComponentStory<typeof RadioGroup> = () => (
  <>
    <RadioGroup
      options={CheckboxConstants}
    />
    <br />
    <RadioGroup
      options={CheckboxConstants}
      isDisabled={true}
    />
    <br />
    <RadioGroup
      options={CheckboxConstants}
      isSuccess={true}
    />
    <br />
    <RadioGroup
      options={CheckboxConstants}
      isWarning={true}
    />
    <br />
    <RadioGroup
      options={CheckboxConstants}
      isError={true}
    />
  </>
);
Primary.storyName = 'RadioGroup';