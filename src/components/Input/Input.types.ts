import { ChangeEventHandler, RefObject } from "react";

export interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  message?: string;
  isDisabled?: boolean;
  isWarning?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  helper?: string;
  value?: string;
  checked?: boolean;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement> | undefined;
  initialValue?: string;
  className?: string;
  ref?: React.MutableRefObject<any>;
  maxLength?: number;
  styled?: string;
  maskPlaceholder?: string;
  mask?: string;
  alwaysShowMask?: boolean;
  onKeyDown?: JSONValue | any;
  onKeyUp?: JSONValue | any;
  inputMode?: string | any;
  onFocus?: JSONValue;
}
