import React, { ReactNode } from 'react';
import { CalendarContainerProps } from 'react-datepicker';

const CalendarContainer: React.FC<CalendarContainerProps> = ({ children }) => {
  return(
    <div
      className={
        `
        justify-center
        sm:p-6
        p-2
        gap-6
        shadow-sm
        border-2
        border-solid
        rounded-2xl
        border-grayscale-light-body-border
        flex
        w-[340px]
        max-w-sm
        flex-col
        relative
        justify-center
        bg-grayscale-light-white
        items-center
        mb-4
        mr-2
        `
      }
    >
      {children}
    </div>
  );
};

export default CalendarContainer;
