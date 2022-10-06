import dayjs from 'dayjs';
import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { DatepickerHeaderProps } from './DatepickerHeader.types';

const DatepickerHeader: React.FC<DatepickerHeaderProps> = ({
  shownDate,
  increaseMonth,
  decreaseMonth,
  showMonthPicker,
  setShowMonthPicker,
  showYearPicker,
  setShowYearPicker,
  increaseYear,
  decreaseYear,
  changeYear,
}) => {

  const openMonthPicker = () => {
    setShowMonthPicker(true);
  };

  const openYearPicker = () => {
    setShowMonthPicker(false);
    setShowYearPicker(true);
  };

  return (
    <div className={`
      flex
      content-center
      items-center
      h-11
      w-full
      gap-4
      font-extrabold
    `}>
      <div
        className={`
          w-6
          h-6
          border-b
          flex
          items-center
          justify-center
          ${ false ? `transition ease-in-out delay-200` : ''}
          text-primary-500
          hover:bg-primary-100
          hover:text-grayscale-light-white
          active:bg-primary-500
          active:text-grayscale-light-white
          cursor-pointer
          rounded-full
          bold
          ml-4
        `}
        onClick={showMonthPicker ? decreaseYear : showYearPicker ? () => changeYear(shownDate.getFullYear() - 10) : decreaseMonth}
        data-testid="prev"
      >
        <BiChevronLeft />
      </div>

      <div className={
        `
          flex-center
          rounded-xl
          items-center
          content-center
          flex-grow
          text-center
          bold
          p-2
          text-primary-500
          ${showYearPicker ? '' : 'hover:bg-primary-100 active:text-grayscale-light-white active:bg-primary-600 cursor-pointer'}
        `
      }
        onClick={showMonthPicker ? openYearPicker : openMonthPicker}
        data-testid="currentdatedisplay"
      >
        {dayjs(shownDate).format("MMMM YYYY")}
      </div>

      <div
        className={`
          w-6
          h-6
          border-b
          flex
          items-center
          justify-center
          ${ false ? `transition ease-in-out delay-200` : ''}
          text-primary-500
          hover:bg-primary-100
          hover:text-grayscale-light-white
          cursor-pointer
          rounded-full
          bold
          active:bg-primary-500
          active:text-grayscale-light-white
          mr-4
        `}
        onClick={showMonthPicker ? increaseYear : showYearPicker ? () => changeYear(shownDate.getFullYear() + 10) : increaseMonth}
        data-testid="next"
      >
        <BiChevronRight />
      </div>
    </div>
  )
};

export default DatepickerHeader;
