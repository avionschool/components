import React from 'react';
import styled from 'styled-components';
import { BoxProps } from './Box.types';
import { twMerge } from 'tailwind-merge';

const StyledBox = styled.div`
`;

const Box: React.FC<BoxProps> = ({ 
  id,
  isDisabled, 
  isSelected, 
  handleClick, 
  children,
  isReadOnly,
  className
}) => {
  const boxClasses = [
    'flex',
    'flex-row',
    'items-center',
    'gap-8',
    'border-2',
    'hover:cursor-pointer',
    'border-solid',
    'rounded-2xl',
    'h-full',
    'flex-1',
  ].join(' ');
  
  const borderColor = isSelected ? 'border-primary-500' : 'border-grayscale-light-body-border';
  const disabledClasses = isDisabled ? 'opacity-50 hover:cursor-not-allowed pointer-events-none ' : '';
  const readOnlyClass = isReadOnly ? 'pointer-events-none' : '';

  const boxClassesMerged = twMerge(`
    ${boxClasses}
    ${borderColor}
    ${disabledClasses}
    ${readOnlyClass}
    ${className}
  `);
  
  return (
      <StyledBox
        id={id}
        data-testid={id}
        className={boxClassesMerged}
        onClick={handleClick}
      >
        {children}
      </StyledBox>
  )
};

export default Box;
