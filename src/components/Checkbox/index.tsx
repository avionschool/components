import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { BiCheck } from 'react-icons/bi';
import { CheckboxOption } from './Checkbox.types';

const Checkbox: React.FC<CheckboxOption> = ({
  value,
  display,
  disabled = false,
  large = false,
  id,
  name,
  checked = false,
  onChange = () => null,
  showLabel= false
}) => {
  const disabledClasses = disabled ? 'pointer-events-none opacity-50' : '';
  const checkboxClasses = twMerge(`
    appearance-none
    ${disabledClasses}
    accent-primary-500
    p1
    border-solid
    border
    border-grayscale-light-body-border
    rounded-md
    bg-grayscale-light-body-border
    flex
    flex-center
    flex-col
    ${large ? 'w-10 h-10' : 'w-6 h-6'}
    ${checked ? 'bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700' : 'hover:bg-grayscale-light-placeholder hover:border-grayscale-light-placeholder'}
    mr-2
    visible
  `);

  const checkIconClasses = twMerge(`
    ${checked ? 'visible' : 'invisible'}
    m-auto
    ${large ? 'test-xs w-10 h-10' : 'text-xxs w-6 h-6'}
    font-bold
    text-grayscale-light-white
    block
  `);

  const checkboxOverflowClasses = twMerge(`
    ${large ? 'w-12 h-13' : 'w-8 h-9'}
    bg-transparent
    invisible
    active:bg-checkbox-overflow
    active:visible
    flex
    flex-center
    items-center
    rounded-md
    pl-2
  `);

  return (
    <>
      <label
        htmlFor={id}
        className={`${disabledClasses} flex grow-0 items-center justify-start  ${showLabel ? 'hidden' : 'visible mr-2'}`}
      >
        <div
        >
          <input
            type="checkbox"
            name={name}
            id={id}
            value={value}
            disabled={disabled}
            data-testid={id}
            key={id}
            className="hidden"
            onChange={onChange}
            checked={checked}
          />
          <div className={checkboxOverflowClasses}>
            <div
              className={checkboxClasses}
            >
              <BiCheck
                className={checkIconClasses}
              />
            </div>
          </div>
          {display}

        </div>
      </label>
    </>
  )
};

export default Checkbox;