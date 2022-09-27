import React from 'react';
import { twMerge } from 'tailwind-merge';
import { RadioOption } from './Radio.types';

const Radio: React.FC<RadioOption> = ({
  value,
  display,
  disabled = false,
  id,
  name,
  checked = false,
  onChange = () => null,
  showLabel= false
}) => {

  const disabledClasses = disabled ? 'pointer-events-none opacity-50' : '';
  const radioClasses = twMerge(`
    appearance-none
    ${disabledClasses}
    accent-primary-500
    rounded-full
    w-4
    h-4
    border-2
    border-grayscale-light-body-border
    border-solid
    checked:border-primary-500
    checked:border-[5px]
    transition
    linear
    duration-200
  `);

  return (
    <>
      <label 
          htmlFor={id}
          className={`${disabledClasses} flex flex-col justify-center`}
        > 
        <input 
          type="radio"
          name={name}
          id={id}
          value={value}
          disabled={disabled}
          data-testid={id}
          key={id}
          className={radioClasses}
          onChange={onChange}
          checked={checked}
        /> 
          {display} 
        </label>
    </>
  )
};

export default Radio;