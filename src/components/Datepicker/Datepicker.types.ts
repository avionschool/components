import { FormikErrors } from "formik/dist/types";

export interface DatepickerProps {
  initialDate?: Date;
  placeholderText?: string;
  id?: string;
  name: string;
  onChange?: JSONValue,
  value?: Date;
  isError?: boolean;
};
