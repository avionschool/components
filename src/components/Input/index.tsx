import React, { useState } from "react";
import { InputProps } from "./Input.types";
import styled from "styled-components";
import { twMerge } from "tailwind-merge";
import InputMask from 'react-input-mask';

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  isError,
  isWarning,
  message,
  isSuccess,
  isDisabled,
  placeholder,
  onChange,
  type,
  checked,
  onPaste,
  initialValue,
  className,
  value,
  ref,
  maxLength,
  mask='',
  maskPlaceholder='',
  alwaysShowMask=false,
  ...props
}) => {
  const errorClasses = isError ? 'text-error-500 border-error-500 bg-error-100 border-solid' : '';
  const warningClasses = isWarning ? 'text-warning-500 border-warning-500 bg-warning-100 border-solid' : '';
  const successClasses = isSuccess ? 'text-success-500 border-success-500 bg-success-100 border-solid' : '';
  const disabledClasses = isDisabled ? 'opacity-50 pointer-events-none ' : '';

  const inputClasses = twMerge(`
    focus:border-information-500
    focus:border-solid
    text-base
    border-transparent
    md:h-auto
    py-4
    px-2
    lg:p-4
    bg-grayscale-light-body
    flex
    justify-content
    box-border
    flex
    flex-col
    items-center
    w-full
    rounded-xl
    flex-none
    order-1
    self-stretch
    grow-0
    ${errorClasses}
    ${warningClasses}
    ${successClasses}
    ${disabledClasses}
    ${className}
  `);

  return (
    <>
      <InputMask
        mask={mask}
        maskChar={null}
        alwaysShowMask={alwaysShowMask}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        data-testid={id}
        role="input"
        checked={checked}
        onPaste={onPaste}
        defaultValue={initialValue}
        value={value}
        maxLength={maxLength}
        {...props}
      />
    </>
  );
};

export default Input;
