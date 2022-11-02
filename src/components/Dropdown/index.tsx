import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';
import { BiCaretUp, BiCaretDown } from 'react-icons/bi';
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
    mt-4
    rounded-xl 
    bg-grayscale-light-white 
    text-bold 
    z-10
    visible
    w-[75%]
    sm:w-full 
  `)

  const renderDropdownList = () => {
    // Check screen size
    const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    // Desktop 
    if (width > 640) {
      return (
        <DropdownListContainer 
          className={`${isOpen ? `${dropdownListClasses}` : 'hidden'}`}
        >
            <DropdownList 
              className="max-h-64 overflow-auto shadow-sm rounded-xl"
            >
              {options?.map((item: JSONValue, index) => {
                // Check if first or last item
                const { disabled, value, display } = item;
                return (
                  <ListItem 
                    className={`w-100% p-4 pl-3 rounded-xl font-extrabold list-none hover:bg-grayscale-light-body-border active:bg-grayscale-light-placeholder ${disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                    value={value}
                    onClick={() => customOnChange(value)}
                    key={value}
                    data-testid={`${value}-${id}`}
                  >{display}</ListItem>
                )
              })}
            </DropdownList>
        </DropdownListContainer>
      )
    }
    // Mobile + mobile overlay
    return (
      <div className={`w-screen h-screen opacity-100 z-[20] bg-primary-500 absolute bg-grayscale-light-header-text left-0 top-0 flex flex-col align-center items-center pt-24 ${isOpen ? '' : 'hidden'}`}>
        <DropdownListContainer 
          className={`${isOpen ? `${dropdownListClasses} opacity-100 max-h-[80vh] z-12` : 'hidden'}`}
        >
            <DropdownList 
              className="h-full overflow-auto opacity-100"
            >
              {options?.map((item: JSONValue, index) => {
                // Check if first or last item
                const { disabled, value, display } = item;
                return (
                  <ListItem 
                    className={`w-100% p-4 text-xl font-extrabold rounded-xl list-none hover:bg-grayscale-light-body-border active:bg-grayscale-light-placeholder ${disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                    value={value}
                    onClick={() => customOnChange(value)}
                    key={value}
                    data-testid={`${value}-${id}`}
                  >{display}</ListItem>
                )
              })}
            </DropdownList>
        </DropdownListContainer>
      </div>
    )
  }

  const currValue = options?.find(item => item.value === value);
  return(
    <>
      <DropdownContainer 
        className={mergedClasses}
        onClick={() => setIsOpen(!isOpen)}
        id={id}
        onBlur={() => {setIsOpen(false)}}
        tabIndex={0}
      >
        <DropdownHeader 
          className={`mt-2 p-3 font-extrabold bg-grayscale-light-body rounded-xl flex flex-row justify-between place-items-center`}
          data-testid={id}
        > 
          <div className={`${(value === null || value === '') ? 'opacity-50' : ''}`}>
            {currValue?.display ? currValue?.display : placeholder}
          </div>
          <div className="flex flex-col justify-center">
            { !isOpen && <BiCaretDown className="self-end"/> }
            { isOpen && <BiCaretUp className="self-end"/> }
          </div>
        </DropdownHeader>
        {renderDropdownList()}
      </DropdownContainer>
    </>
  );
}


export default Dropdown;
