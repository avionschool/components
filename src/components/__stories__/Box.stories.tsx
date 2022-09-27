import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from '../Box';

export default {
  title: 'Box',
  component: Box,
  argTypes: {}
} as ComponentMeta<typeof Box>;

export const BoxPrimary: ComponentStory<typeof Box> = (args) => (
  <>
    <div className="storybook-div">
      <Box>
        <div className="justify-center align-center p-20">
          Sample Default Box
        </div>
      </Box>
      <Box
        isDisabled={true}
      >
        <div className="justify-center align-center p-20">
          Sample Disabled Box
        </div>
      </Box>
      <Box
        isSelected={true}
      >
        <div className="justify-center align-center p-20">
          Sample Selected Box
        </div>
      </Box>
      <Box
        isReadOnly={true}
      >
        <div className="justify-center align-center p-20">
          Sample Readonly Box
        </div>
      </Box>
    </div>
  </>
);
BoxPrimary.storyName = 'Box';
