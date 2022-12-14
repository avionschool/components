import React, { useState } from 'react';
import styled from "styled-components";
import { twMerge } from "tailwind-merge";
import { RadioGroupProps } from './Radio/Radio.types';
import Radio from './Radio';

const StyledRadio = styled.div`
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

const RadioGroup: React.FC<RadioGroupProps> = ({
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
  const [selected, setSelected] = useState<string>('');
  const errorClasses = isError ? 'text-error-500 border-error-500 bg-error-100 border-solid' : '';
  const warningClasses = isWarning ? 'text-warning-500 border-warning-500 bg-warning-100 border-solid' : '';
  const successClasses = isSuccess ? 'text-success-500 border-success-500 bg-success-100 border-solid' : '';
  const disabledClasses = isDisabled ? 'opacity-50 pointer-events-none ' : '';

  const radioClasses = twMerge(`
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
      <StyledRadio
        id={id}
        className={radioClasses}
        onChange={onChange}
        {...props}
        role="checkbox"
        data-testid="radio_container"
      >
        {
          options?.map(option => {
            const { value, disabled, display, id } = option;
            return (
              <>
               <Radio
                value={value}
                disabled={isDisabled ? true : disabled}
                display={display}
                data-testid={id}
                checked={value === selected ? true : false}
                onChange={() => setSelected(value)}
                id={id}
              />
              </>
            )
          })
        }
      </StyledRadio>
    </>
  )
};

export default RadioGroup;