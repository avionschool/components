import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Sidebar from '../Sidebar';
import { SidebarItems } from '../../constants/SidebarItems';

export default {
  title: 'Sidebar',
  components: Sidebar,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/overview'
    }
  },
  argTypes: {}
} as ComponentMeta<typeof Sidebar>;

export const Primary: ComponentStory<typeof Sidebar> = (args) => (
  <>
    <Sidebar 
      logo="https://assets.website-files.com/600e947088abe035d0238a33/601c0703e6494b699a59cc80_avion-logo.svg"
      logoAlt="Avion School logo"
      items={SidebarItems}
      className="font-sans"
    />
  </>
);
Primary.storyName = 'Sidebar';
