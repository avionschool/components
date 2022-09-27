import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import FormSteps from '../WizardFooter/FormSteps';
import { FormStepsConstants } from './constants/FormSteps.constants';

export default {
  title: 'FormSteps',
  component: FormSteps,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/login'
    }
  },
  argTypes: {}
} as ComponentMeta<typeof FormSteps>;

export const Primary: ComponentStory<typeof FormSteps> = () => (
  <>
    <div className="storybook-div">
      <FormSteps
        items={FormStepsConstants}
      />
    </div>
  </>
);
Primary.storyName = 'FormSteps';