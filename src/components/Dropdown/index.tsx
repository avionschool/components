import React from "react";
import styled from "styled-components";
import { twMerge } from "tailwind-merge";
import { DropdownProps } from "./Dropdown.types";

const StyledDropdown = styled.select<DropdownProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 55px;
  border-radius: 12px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const Dropdown: React.FC<DropdownProps> = ({ 
  id,
  label,
  isError,
  isWarning,
  message,
  isSuccess,
  isDisabled,
  placeholder,
  onChange,
  type,
  options,
  helper,
  className,
  initialValue,
  ...props
 }) => {

  const errorClasses = isError ? 'text-error-500 border-error-500 bg-error-100 border-solid' : '';
  const warningClasses = isWarning ? 'text-warning-500 border-warning-500 bg-warning-100 border-solid' : '';
  const successClasses = isSuccess ? 'text-success-500 border-success-500 bg-success-100 border-solid' : '';
  const disabledClasses = isDisabled ? 'opacity-50 pointer-events-none' : '';

  const dropdownClasses = twMerge(`
    focus:border-information-500
    text-base
    border-transparent
    bg-grayscale-light-body
    ${errorClasses}
    ${warningClasses}
    ${successClasses}
    ${disabledClasses}
    ${className}
  `);


  return (
    <>
      <StyledDropdown
        id={id}
        type={type}
        onChange={onChange}
        className={dropdownClasses}
        role="listbox"
        style={{ appearance: 'none' }}
        {...props}
      >
        <option value="" disabled={true} className="opacity-50 pointer-events-none" selected>{placeholder}</option>
        {
          options?.map(option => {
            return (
              <option 
                value={option.value}
                disabled={option.disabled}
                id={option.value.toString()}
                data-testid={option.value}
                key={option.value}
                selected={option.value === initialValue ? true : false}
              > {option.display} </option>
            )
          })
        }
      </StyledDropdown>
    </>
  )
} 

export default Dropdown;
