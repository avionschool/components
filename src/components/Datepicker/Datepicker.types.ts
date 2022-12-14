import { FormikErrors } from "formik/dist/types";

export interface DatepickerProps {
  initialDate?: Date;
  placeholderText?: string;
  id?: string;
  name: string;
  onChange?: (field: string, value: any, shouldValidate?: boolean | undefined) => void | Promise<any> | FormikErrors<any>,
  value?: Date | string;
  isError?: boolean;
};
