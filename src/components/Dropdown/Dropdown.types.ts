import React, { ChangeEventHandler } from "react";

export type DropdownOption = {
  value: string | number, // Actual value of dropdown option
  display: string | number | React.ReactNode[] | React.ReactNode, // Display value of dropdown option
  disabled?: boolean
}

export interface DropdownProps {
  id?: string;
  label?: string;
  message?: string;
  isDisabled?: boolean;
  isWarning?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  placeholder?: string;
  onChange?: JSONValue;
  type?: string;
  options?: DropdownOption[]
  helper?: string;
  className?: string;
  initialValue?: string | number;
  selectedValue?: string | number;
  onBlur?: JSONValue;
}
