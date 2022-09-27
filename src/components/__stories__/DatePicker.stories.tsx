import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Datepicker from '../Datepicker';

export default {
  title: 'Datepicker',
  component: Datepicker,
  argTypes: {}
} as ComponentMeta<typeof Datepicker>;

export const Primary: ComponentStory<typeof Datepicker> = () => {
  return (
    <>
      <div className="font-sans">
        <Datepicker initialDate={new Date('2022-08-07')} name="datepicker-story"/>
      </div>
    </>
  )
};
Primary.storyName = 'Datepicker';
