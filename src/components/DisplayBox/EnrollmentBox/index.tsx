import React from 'react';
import { SubBoxProps } from '../DisplayBox.types';
import TwelveWeekBox from './TwelveWeekBox';
import TwentyFourWeekBox from './TwentyFourWeekBox';

const EnrollmentBox: React.FC<SubBoxProps> = ({
  value
}) => {

  const renderEnrollmentBoxComponent = () => {
    switch(value) {
      case '12 week course: M-F (9am-6pm)':
        return <TwelveWeekBox />;
      case '24 week course: M-F (7pm-9pm) & Sat (9am-1pm)':
        return <TwentyFourWeekBox />;
      default:
        return <></>;
    }
  }

  return (
    <>
      {renderEnrollmentBoxComponent()}
    </>
  )
};

export default EnrollmentBox;

