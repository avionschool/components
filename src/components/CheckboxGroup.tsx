import React, { useState } from "react";
import styled from "styled-components";
import { twMerge } from "tailwind-merge";
import { CheckboxProps } from "./Checkbox/Checkbox.types";
import Checkbox from './Checkbox';

const StyledCheckbox = styled.div<CheckboxProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 8px;
    width: 100%;
    height: 53px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`;

const CheckboxGroup: React.FC<CheckboxProps> = ({ 
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
  ...props
 }) => {
  const [checkboxArray, setCheckboxArray] = useState<string[]>([]);
  const errorClasses = isError ? 'text-error-500 border-error-500 bg-error-100 border-solid' : '';
  const warningClasses = isWarning ? 'text-warning-500 border-warning-500 bg-warning-100 border-solid' : '';
  const successClasses = isSuccess ? 'text-success-500 border-success-500 bg-success-100 border-solid' : '';
  const disabledClasses = isDisabled ? 'opacity-50 pointer-events-none ' : '';

  const checkboxClasses = twMerge(`
    focus:border-information-500
    rounded-2xl
    border-transparent
    bg-grayscale-light-body
    ${errorClasses}
    ${warningClasses}
    ${successClasses}
    ${disabledClasses}
  `);

  return (
    <>
      <StyledCheckbox
        id={id}
        type={type}
        className={checkboxClasses}
        onChange={onChange}
        {...props}
        role="checkbox"
        data-testid="checkbox_container"
      >
        {
          options?.map(option => {
            const { value, display, disabled, id } = option;
            return (
              <>
                <Checkbox
                  value={value}
                  display={display}
                  disabled={isDisabled ? true : disabled}
                  data-testid={value}
                  onChange={() => { 
                    checkboxArray.includes(value) ? 
                    setCheckboxArray(checkboxArray.filter((e) => e !== value)): 
                    setCheckboxArray(checkboxArray.concat(value))}
                  }
                  checked={checkboxArray.includes(value)}
                  id={id}
                />
              </>
            )
          })
        }
      </StyledCheckbox>
    </>
  )
} 

export default CheckboxGroup;
