import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { button_colors } from "../../constants/Button.constants";

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
  const width = `${size === 'small' ?  'w-18' : size === 'medium' ? 'w-36' : size === 'large' ? 'w-72' : 'full' ? 'w-full' : ''}`;
  const shape = `${round ? 'rounded-full' : 'rounded-2xl' }`;

  // Input template literals as classname to determine tailwind classes
  return (
    <StyledButton
      id={id}
      data-testid={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={`
        ${defaultClasses}
        ${defaultStyle}
        ${hover}
        ${pressed}
        ${disabled ? disabledStyle : ''}
        ${width}
        ${shape}
      `}
      role="button"
    >
      {text}
    </StyledButton>
  );
};


export default Button;
