import { ChangeEventHandler } from "react";

export type CheckboxOption = {
  value: string,
  display?: string,
  disabled?: boolean
  large?: boolean;
  id?: string;
  label?: string;
  name?: string;
  checked?: boolean;
  onChange?: (field: any) => void | ((e: string | React.ChangeEvent<any>) => void); // Pass event and call function before passing into checkbox onchange
  type?: string;
  showLabel?: boolean;
}

export interface CheckboxProps {
  id?: string;
  label?: string;
  message?: string;
  isDisabled?: boolean;
  isWarning?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  options?: CheckboxOption[]
  helper?: string;
}
