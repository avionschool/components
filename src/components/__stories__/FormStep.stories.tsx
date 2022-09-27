import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import FormStep from '../WizardFooter/FormStep';

export default {
  title: 'FormStep',
  component: FormStep,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/login'
    }
  },
  argTypes: {}
} as ComponentMeta<typeof FormStep>;

export const Primary: ComponentStory<typeof FormStep> = () => (
  <>
    <div className="storybook-div">
      <FormStep
        link={'/login'}
        current
      />
      <FormStep
        link={'/logout'}
        clickable={false}
      />
    </div>
  </>
);

Primary.storyName = 'FormStep'