import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { BiCaretDown } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

const DropdownContainer = styled('div')``;
const DropdownHeader = styled('div')``;
const DropdownListContainer = styled('div')``;
const DropdownOverlay = styled('div')``;
const DropdownList = styled('ul')`
  list-style: none;
`;
const ListItem = styled('li')``;

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
  selectedValue,
  onBlur,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | number | undefined>(initialValue);
  const customOnChange = (value: JSONValue) => {
    setValue(value);
    onChange ? onChange(id, value) : null;
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const errorClasses = isError ? 'text-error-500 border-error-500 bg-error-100 border-solid' : '';
  const warningClasses = isWarning ? 'text-warning-500 border-warning-500 bg-warning-100 border-solid' : '';
  const successClasses = isSuccess ? 'text-success-500 border-success-500 bg-success-100 border-solid' : '';
  const disabledClasses = isDisabled ? 'opacity-50 pointer-events-none' : '';

  const mergedClasses = twMerge(`
    w-full
    text-grayscale-light-body-text
    focus:border-information-500
    text-base
    border-transparent
    bg-grayscale-light-body
    flex
    flex-col
    align-center
    h-[55px]
    rounded-xl
    shadow-sm
    box-border
    order-1 
    self-stretch
    ${errorClasses}
    ${warningClasses}
    ${successClasses}
    ${disabledClasses}
  `);

  const dropdownListClasses = twMerge(`
    p-0
    m-0 
    mt-2 
    rounded-xl 
    bg-grayscale-light-white 
    text-bold 
    z-10
    visible
  `)

  const currValue = options?.find(item => item.value === value);
  return(
    <>
      <DropdownContainer 
        className={mergedClasses}
        onClick={() => setIsOpen(!isOpen)}
        id={id}
        data-testid={id}
        onBlur={() => {setIsOpen(false)}}
        tabIndex={0}
      >
        <DropdownHeader 
          className={`h-full mt-1 p-3 text-extrabold bg-grayscale-light-body rounded-xl flex flex-row justify-between align-center`}
        > 
          <div className={`${(value === null || value === '') ? 'opacity-50' : ''}`}>
            {currValue?.display ? currValue?.display : placeholder}
          </div>
          <div className="flex flex-col justify-center">
            <BiCaretDown className="self-end"/>
          </div>
        </DropdownHeader>
        <DropdownOverlay className="invisible z-10">
          <DropdownListContainer 
            className={`${isOpen ? `${dropdownListClasses}` : 'hidden'}`}
          >
            <DropdownList 
              className="h-64 overflow-auto"
            >
              {options?.map((item: JSONValue, index) => {
                // Check if first or last item
                const { disabled, value, display } = item;
                return (
                  <ListItem 
                    className={`w-100% p-2 pl-3 rounded-xl list-none hover:bg-grayscale-light-body-border active:bg-grayscale-light-placeholder ${disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                    value={value}
                    onClick={() => customOnChange(value)}
                    key={value}
                  >{display}</ListItem>
                )
              })}
            </DropdownList>
          </DropdownListContainer>
        </DropdownOverlay>
      </DropdownContainer>
    </>
  );
}


export default Dropdown;
