// @ts-nocheck
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FormControlProps } from './FormControl.types';
import { twMerge } from 'tailwind-merge';

const StyledLabel = styled.div`
`;

const StyledMessage = styled.div`
  height: 19px;
  font-style: normal;
  font-weight: 400;
`;

const StyledText = styled.p`
  margin: 0px;
`;


const FormControl: React.FC<FormControlProps> = ({
  label,
  helperText,
  messageText,
  isRequired,
  isError,
  isWarning,
  isSuccess,
  isDisabled,
  children
}) => {
  const messageErrorClasses = isError ? 'text-error-500' : '';
  const messageWarningClasses = isWarning ? 'text-warning-500' : '';
  const messageSuccessClasses = isSuccess ? 'text-success-500' : '';
  const disabledClasses = isDisabled ? 'opacity-50 pointer-events-none ' : '';

  const messageClasses = twMerge(`
  text-base
  leading-6
  text-grayscale-light-header-text
  ${messageErrorClasses}
  ${messageWarningClasses}
  ${messageSuccessClasses}
  ${disabledClasses}
`);

  return (
    <>
      <StyledLabel
        className="text-base"
      >
        <StyledText
          className={
            `
              font-bold
              ${messageClasses}
            `
          }
        >
          {label}
        </StyledText>
      </StyledLabel>
      <StyledText className="text-xs"> {helperText} </StyledText>
          {React.Children.map<ReactNode, ReactNode>(children, child => {
            // Check if element is valid react element, then insert props. Otherwise, return element.
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                isError,
                isWarning,
                isSuccess,
                isDisabled
              });
            }
            return child;
          })}
      <StyledMessage>
        <StyledText
          className={`${messageClasses}`}
        > {messageText} </StyledText>
      </StyledMessage>
    </>
  )
};

export default FormControl;