import React from "react";

export interface FormControlProps {
  label?: string;
  helperText?: string;
  messageText?: string; // Text in case form is success/error/warning
  isDisabled?: boolean;
  isRequired?: boolean;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}