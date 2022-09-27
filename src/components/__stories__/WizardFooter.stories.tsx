import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import WizardFooter from '../WizardFooter';
import { FormStepsConstants } from './constants/FormSteps.constants';

export default {
  title: 'WizardFooter',
  components: WizardFooter,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/signup'
    }
  },
  argTypes: {}
} as ComponentMeta<typeof WizardFooter>;

export const Primary: ComponentStory<typeof WizardFooter> = (args) => (
  <>
    <WizardFooter
      items={FormStepsConstants}
      onPrev={() => console.log('prev')}
      onNext={() => console.log('next')}
    />
  </>
);
Primary.storyName = 'WizardFooter';
