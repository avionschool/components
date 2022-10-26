import React from 'react';
import { DisplayBoxProps, EnrollmentValue, ExperienceValue, PaymentValue } from './DisplayBox.types';
import EnrollmentBox from './EnrollmentBox';
import ExperienceBox from './ExperienceBox';
import PaymentBox from './PaymentBox';

const DisplayBox: React.FC<DisplayBoxProps> = ({
  value,
  type
}) => {

  const renderDisplayBox = () => {
    let castValue;
    switch(type) {
      case 'enrollment':
        castValue = value as EnrollmentValue;
        return <EnrollmentBox value={castValue} />;
      case 'experience':
        castValue = value as ExperienceValue;
        return <ExperienceBox value={castValue} />;
      case 'payment':
        castValue = value as PaymentValue;
        return <PaymentBox value={castValue} />;
      default:
        return <></>
    }
  }

  return(
    <>
      {renderDisplayBox()}
    </>
  )
};

export default DisplayBox;
