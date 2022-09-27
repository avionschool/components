import { MouseEventHandler } from "react";

export interface FormStepsItem {
  link: string;
}

export interface FormStepsProps {
  items: FormStepsItem[]
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
