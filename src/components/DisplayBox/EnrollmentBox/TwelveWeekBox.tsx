import React from 'react';
import { BiCalendar, BiTime } from 'react-icons/bi';
import { Box } from '../../..';

const TwelveWeekBox: React.FC = () => {
  return(
    <Box isReadOnly>
      <div className="m-5 w-full">
        <h3 className="font-bold mb-2 text-xl">12-week course</h3>
        <div className="flex flex-col lg:flex-row mb-2 gap-1 md:gap-2">
          <div className="flex flex-col lg:flex-row mb-2 w-full md:w-1/2">
                <div className="flex-1 text-sm">
                  <div className="flex flex-initial gap-2">
                    <div className="flex flex-col justify-center opacity-50"><BiCalendar /></div>
                    <span className="flex text-grayscale-light-body-text"> Monday - Friday </span>
                  </div>
                </div>
          </div>
          <div className="flex-1 text-sm">
                <div className="flex flex-initial gap-1">
                  <div className="flex flex-col justify-center opacity-50"><BiTime /></div>
                  <span className="flex text-grayscale-light-body-text"> 9AM - 6PM </span>
                </div>
          </div>
        </div>
      </div>
    </Box>
  )
};

export default TwelveWeekBox;
