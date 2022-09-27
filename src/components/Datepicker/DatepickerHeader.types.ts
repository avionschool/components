import { Dispatch, SetStateAction } from "react";

export interface DatepickerHeaderProps {
  shownDate: Date, 
  increaseMonth: () => void, 
  decreaseMonth: () => void, 
  showMonthPicker: boolean,
  setShowMonthPicker: Dispatch<SetStateAction<boolean>>,
  showYearPicker: boolean,
  setShowYearPicker: Dispatch<SetStateAction<boolean>>,
  increaseYear: () => void, 
  decreaseYear: () => void,
  changeYear: (year: number) => void
};
