import { SidebarItemProps } from '@components/SidebarItem.types';
import React, { ReactNode } from 'react';
import { BiHomeAlt, BiFile, BiUserVoice, BiPieChartAlt2, BiCog, BiPowerOff  } from 'react-icons/bi';

export const SidebarItems: SidebarItemProps[] = [
  {
    link: '/overview',
    name: 'Overview',
    icon: <BiHomeAlt/>,
    disabled: false
  },
  {
    link: '/courses',
    name: 'Courses',
    icon: <BiFile/>,
    disabled: true
  },
  // {
  //   link: '/instructors',
  //   name:'Instructors',
  //   icon: <BiUserVoice />,
  //   disabled: true
  // },
  // {
  //   link: '/reports',
  //   name: 'Reports',
  //   icon: <BiPieChartAlt2 className="flex-initial"/>,
  //   disabled: true
  // },
  {
    link: '/settings',
    name:'Settings',
    icon: <BiCog className="flex-initial"/>,
    disabled: true
  },
  // {
  //   link: '/logout',
  //   name: 'Logout',
  //   icon: <BiPowerOff />,
  //   disabled: false
  // }
];


// {
//   link: '/courses',
//   name: <><BiFile className="flex-initial"/> <span className="flex">Courses</span></>,
//   disabled: true
// },
