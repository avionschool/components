import React, { useState } from 'react';
import { BiX } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';
import { SideMenuProps } from './SideMenu.types';

const SideMenu: React.FC<SideMenuProps> = ({ 
  children, 
  visible = false,
  title,
  closeFunction
 }) => {
  // It's normally hidden to da side
  const defaultClasses = twMerge(`
    bg-grayscale-light-white
    flex
    flex-col
    p-8
    lg:w-1/3
    right-0
    top-0
    transition-all
    ease-in-out
    delay-100
    h-[100vh]
    absolute
    ${visible ? 'right-0 z-[1001]' : 'w-[0px] fixed overflow-x-hidden -z-20'}
  `)

  return (
    <div className={`${defaultClasses}`}>
      <div className="flex justify-between p-4 align-center">
        <h1 className="text-grayscale-light-header-text font-extrabold mb-4"> {title} </h1>
        <BiX className="text-4xl hover:cursor-pointer" onClick={() => closeFunction()} />
      </div>
      <hr className="my-4 h-px bg-grayscale-light-body-border border-0 w-full" />
      <div className="flex flex-col gap-2 mb-4 h-[80%] overflow-scroll">
        {
          children?.map(child => {
            return child.element;
          })
        }
      </div>
    </div>
  )
};

export default SideMenu;
