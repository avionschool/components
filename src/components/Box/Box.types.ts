import React from "react";

export interface BoxProps {
  id?: string;
  isSelected?: boolean;
  isDisabled?: boolean; // If option is disabled
  name?: string; // Since it effectively serves as a radio button, name refers to its name
  handleClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  isReadOnly?: boolean; // Whether or not box is read only
  children?: React.ReactNode | React.ReactNode[];
}
