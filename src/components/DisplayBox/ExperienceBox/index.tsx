import React from 'react';
import { Box, Radio } from '../../..';
import ExperienceBoxConstants from './constants';
import { ExperienceBoxTypes } from './ExperienceBox.types';

const ExperienceBox: React.FC<ExperienceBoxTypes> = ({
  value,
  isRadioBox=false,
  isSelected=false
}) => {

  const experienceValues = ExperienceBoxConstants[`${value}`];

  if (isRadioBox) {
    return (
      <Box isSelected={isSelected}>
        <label
          htmlFor="information[programming_experience]-beginner"
          className="flex items-center h-full w-full cursor-pointer">
          
            <div className="flex-0 m-6 w-4">
              <Radio
                id="information[programming_experience]-beginner"
                name="information[programming_experience]"
                value="Beginner: I've done some introductory coding lessons or tutorials"
                checked={isSelected}
                type="radio" />
            </div>
            <div className="flex-0 w-full my-6 mr-4">
              <h3 className={"font-bold mb-2 " + (
                isSelected ? 'text-primary-500' : ''
              )}>
                {experienceValues?.header}
              </h3>
              <p>{experienceValues?.subtext}</p>
            </div>
        </label>
      </Box>
    )
  }

  return(
    <>
      <Box isReadOnly>
        <div className="flex flex-col m-6">
          <p className="font-bold mb-2">{experienceValues?.header}</p>
          <p>{experienceValues?.subtext}</p>
        </div>
      </Box>
    </>
  )
};

export default ExperienceBox;
