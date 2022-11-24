import _ from 'lodash';
import React from 'react';
import { default as ExternalSwitch } from 'react-switch';
import { twMerge } from 'tailwind-merge';
import { SwitchProps } from './Switch.types';

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  text,
  value,
  className,
  description
}) => {
  const switchOnChange = () => {
    onChange ? onChange(value) : ''
  };
  const defaultClasses = twMerge(`
  flex items-center gap-4
  ${className}
  `);
  return (
    <div className={defaultClasses}>
      <ExternalSwitch 
        onChange={switchOnChange} 
        checked={checked} 
        checkedIcon={false}
        uncheckedIcon={false}
        width={80}
        height={40}
      />
      <div className="flex flex-col justify-center">
        <span className="font-extrabold text-grayscale-light-body-text text-xl"> {text} </span>
        {
          !_.isEmpty(description) ? <span className="font-light text-grayscale-light-body-text text-sm"> {description} </span> : <></>
        }
      </div>
    </div>
  )
};

export default Switch;
