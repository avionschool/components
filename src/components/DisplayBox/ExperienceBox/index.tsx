import React from 'react';
import { Box } from '../../..';
import ExperienceBoxConstants from './constants';
import { ExperienceBoxTypes } from './ExperienceBox.types';

const ExperienceBox: React.FC<ExperienceBoxTypes> = ({
  value
}) => {

  const experienceValues = ExperienceBoxConstants[`${value}`];

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
