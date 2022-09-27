import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormStepProps } from './FormStep.types';

const StyledDiv = styled.div`
`;

const FormStep: React.FC<FormStepProps> = ({ 
  current,
  clickable, 
  link
}) => {
  const defaultStyles = [
    'w-8',
    'h-2',
    'rounded-2xl',
    'block',
    'm-1',
    'bg-grayscale-light-body-border'

  ].join(' ');
  
  const isClickable = clickable ? '' : 'hover:cursor-not-allowed pointer-events-none';
  const isCurrent = current ? 'bg-primary-500' : ''
  return (
    <>
      <Link to={link}
        className={`
          ${defaultStyles}
          ${isClickable}
          ${isCurrent}
        `}
      >
        <span className="block">
          <StyledDiv
          >
          </StyledDiv>
        </span>
      </Link>
    </>
  )
};

export default FormStep;
