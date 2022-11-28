import React from 'react';
import { Link } from 'react-router-dom';
import { isTemplateExpression } from 'typescript';
import SidebarItemProps from './SidebarItem.types';

const SidebarItem: React.FC<SidebarItemProps> = ({
    link,
    name,
    isActive,
    disabled,
    icon,
    onClick,
    isHiddenForDesktop
  }) => {
  const defaultStyle = [
    'nav-item',
    'p-3',
    'font-bold',
    'align-center',
    'flex',
    'flex-1',
    'justify-center',
    'gap-4',
    'lg:items-start',
    'grow-0'
  ].join(' ');

  const activeClass = isActive ? "bg-primary-500 rounded-full text-grayscale-light-white" : 'text-grayscale-light-body-text';
  const disabledClass = disabled ? 'opacity-50 hover:cursor-pointer-none' : 'hover:rounded-full hover:cursor-pointer hover:bg-primary-500 hover:text-grayscale-light-white cursor-events-none';
  return (
    <>
      <Link className={
          `
            ${disabled ? 'pointer-events-none' : ''}
          `
        } 
        to={link}
        data-testid={link}
        onClick={onClick}
      >
        <div className={
          `
            ${defaultStyle}
            ${activeClass}
            ${disabledClass}
            justify-center
            lg:justify-start
            ${isHiddenForDesktop ? 'p-2' : 'p-5'}
            m-5
          `
        }>
          <div className={` flex ${isHiddenForDesktop ?  'w-full justify-center text-xl font-extrabold' : 'w-1/5 justify-end'}`}>
            {icon}
          </div>
          <div className={` ${isHiddenForDesktop ? 'hidden' : 'visible w-4/5'}`}>
            {name}
          </div>
        </div>
      </Link>
    </>
  )
}

export default SidebarItem;
