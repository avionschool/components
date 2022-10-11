import React from "react";
import styled from "styled-components";
import { twMerge } from "tailwind-merge";
import Lottie from "lottie-react";

import { ButtonProps } from "./Button.types";
import { button_colors } from "./styles/Button.constants";
import lotties from '../lotties';

const { loadingAnimation } = lotties;

// Add no size if the button should be responsive

const StyledButton = styled.button<ButtonProps>`
  gap: 8px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  font-family: 'DM Sans', sans-serif;
`;


const Button: React.FC<ButtonProps> = ({ 
  id,
  type, 
  text, 
  variant = 'solid',
  disabled, 
  size, 
  onClick,
  round, 
  status,
  className,
  primary,
  loading=false,
  icon,
  iconLocation='left',
  ...props 
}) => {

  const defaultClasses = [
    'flex-row',
    'justify-center',
    'align-center',
    'text-center',
    'hover:cursor-pointer',
    'h-16',
    'border-solid',
    'font-bold',
    'py-4',
    'px-10',
    'grow-0',
    'shrink-0',
    className
  ].join(' ');

  // Determine if primary or secondary button, default is secondary
  const primaryString = primary ? 'primary' : 'secondary';
  // Determine if status button. If status is undefined, set primary/secondary as primaryKey
  const primaryKey = status ? status : primaryString;
  // Get default, hover, and active styles and size + shape of button.
  const defaultStyle = button_colors[primaryKey][variant].default; // Button default values
  const hover = disabled ? '' : button_colors[primaryKey][variant].hover;
  const pressed = disabled ? '' : button_colors[primaryKey][variant].pressed;
  const disabledStyle = button_colors[primaryKey][variant].disabled;
  const width = `${size === 'small' ?  'w-18' : size === 'medium' ? 'w-36 max-w-36' : size === 'large' ? 'w-72' : size === 'full' ? 'w-full' : 'w-18'}`;
  const shape = `${round ? 'rounded-full' : 'rounded-2xl' }`;
  const loadingClasses = loading ? 'hover:cursor-not-allowed opacity-50 pointer-events-none' : '';
  const generatedClasses = twMerge(`
    ${defaultClasses}
    ${defaultStyle}
    ${disabled ? disabledStyle : ''}
    ${width}
    ${shape}
    ${loadingClasses}
    ${loading ? '' : hover + pressed}
  `);
  const iconLocationStyle = iconLocation === 'left' ? 'flex-row' : 'flex-row-reverse';
  

  // Input template literals as classname to determine tailwind classes
  return (
    <StyledButton
      id={id}
      data-testid={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={generatedClasses}
      role="button"
    >
        <div className={`flex items-center justify-center grow-0 ${iconLocationStyle}`} > 
          <div className="pt-0.5 flex grow-0">
            { loading ?
            <Lottie animationData={loadingAnimation} loop={true} className={`${size === 'large' ? 'w-6' : 'w-4'}`}/> :
            <>{icon}</>}
          </div>
          <div className=""> {text} </div>
        </div>
    </StyledButton>
  );
};


export default Button;
