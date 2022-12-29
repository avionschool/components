import React, { MouseEventHandler } from "react";
export interface ButtonProps {
  id?: string;
  type?: 'button' | 'submit';
  // text?: string;
  text?: React.ReactNode[] | React.ReactNode;
  variant?: 'solid' | 'ghost' | 'outline';
  disabled?: boolean;
  status?: 'error' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large' | 'full';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  round?: boolean;
  primary?: boolean;
  loading?: boolean;
  // icon?: React.ReactNode;
  // iconLocation?: 'left' | 'right'
}
