import { MouseEventHandler } from "react";
import { FormStepsItem } from "./FormSteps.types";

export interface WizardFooterProps {
  items: FormStepsItem[]; // Objects passed in must have a link property, which refers to the link for each FormStep
  onNext?: MouseEventHandler<HTMLButtonElement>;
  onPrev?: MouseEventHandler<HTMLButtonElement>;
};
