import React from 'react';
import { BiCalendar, BiTime } from 'react-icons/bi';
import { Box } from '../../..';

const TwentyFourWeekBox: React.FC = () => {
  return(
    <Box>
      <div
        className="flex items-center h-full w-full cursor-pointer m-6">
        <div className="flex-0 w-full my-4 mr-4">
          <h3 className="font-bold text-xl mb-4">
            <span>
              24-week course
            </span>
          </h3>
          <div className="flex flex-col gap-4 md:flex-row md:gap-2">
            <div className="flex flex-col lg:flex-row mb-2 gap-2 ">
              <div className="flex-1 text-sm">
                <div className="flex flex-initial gap-2">
                  <div className="flex flex-col justify-center opacity-50"><BiCalendar /></div>
                  <span className="flex text-grayscale-light-body-text"> Monday - Friday </span>
                </div>
              </div>
              <div className="flex-1 text-sm">
                <div className="flex flex-initial gap-2">
                  <div className="flex flex-col justify-center opacity-50"><BiTime /></div>
                  <span className="flex text-grayscale-light-body-text"> 7PM - 9PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row mb-2 gap-2">
              <div className="flex-1 text-sm">
                <div className="flex flex-initial gap-2">
                  <div className="flex flex-col justify-center opacity-50"><BiCalendar /></div>
                  <span className="flex text-grayscale-light-body-text"> Saturday </span>
                </div>
              </div>
              <div className="flex-1 text-sm">
                <div className="flex flex-initial gap-2">
                  <div className="flex flex-col justify-center opacity-50"><BiTime /></div>
                  <span className="flex text-grayscale-light-body-text"> 9AM-1PM </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
};

export default TwentyFourWeekBox;
