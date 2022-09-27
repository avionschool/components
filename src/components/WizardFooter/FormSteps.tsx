import React from 'react';
import { FormStepsProps } from './FormSteps.types';
import FormStep from './FormStep';
import { useLocation } from 'react-router';

const FormSteps: React.FC<FormStepsProps> = ({ items }) => {
  const location = useLocation();
  // Get current step
  const currentStep = items.find(item => item.link === location.pathname);
  const currentIndex = currentStep ? items.indexOf(currentStep) : 999;
  const isDisabled = (value: string, index: number): boolean => !(value === currentStep?.link) && currentIndex < index;
  return (
    <>
        <div
          className="flex-grow flex-row flex gap-1 justify-center"
        >
        {
          items?.map(({link}, index) => (
            <FormStep
              clickable={isDisabled(link,index)}
              link={link}
            />
          ))
        }
        </div>
    </>
  )
};

export default FormSteps;
