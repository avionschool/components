import { ChangeEventHandler } from 'react';

export interface TextAreaProps {
  id?: string;
  name?: string;
  isWarning?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  initialValue?: string;
  className?: string;
  maxLength?: number;
  cols?: number;
  rows?: number;
}
