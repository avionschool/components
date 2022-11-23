import React from 'react';
import { TextAreaProps } from './TextArea.types';
import { twMerge } from 'tailwind-merge';

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  isWarning=false,
  isDisabled=false,
  isError=false,
  isSuccess=false,
  placeholder,
  onChange,
  value,
  initialValue,
  className,
  maxLength,
  ...props
}) => {
  const errorClasses = isError ? 'text-error-500 border-error-500 bg-error-100 border-solid' : '';
  const warningClasses = isWarning ? 'text-warning-500 border-warning-500 bg-warning-100 border-solid' : '';
  const successClasses = isSuccess ? 'text-success-500 border-success-500 bg-success-100 border-solid' : '';
  const disabledClasses = isDisabled ? 'opacity-50 pointer-events-none ' : '';

  const textAreaClasses = twMerge(`
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
      <textarea
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={textAreaClasses}
        data-testid={id}
        role="input"
        defaultValue={initialValue}
        value={value}
        maxLength={maxLength}
        style={{ resize: 'none' }}
        {...props}
      />
    </>
  );
}

export default TextArea;
