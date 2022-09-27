import React from 'react';
import { WizardFooterProps } from './WizardFooter.types';
import { useLocation, useNavigate} from 'react-router-dom';

import Button from '../Button';
import FormSteps from './FormSteps';

/*
  On clicking next/prev, if there is no corresponding function (onPrev/onNext),
  page is redirected to next/previous link, according to the items array passed into the
  component.
*/

const WizardFooter: React.FC<WizardFooterProps> = ({ 
  items,
  onPrev, 
  onNext 
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentStep = items.find(item => item.link === location.pathname);
  const currentIndex = currentStep ? items.indexOf(currentStep) : 999;
  const isPrevEnabled = () => currentStep && currentIndex > 0 ? items[currentIndex-1] : false;
  const getPrevLink = () => currentStep && currentIndex > 0 ? items[currentIndex-1].link : '#';
  const isNextEnabled = () => currentStep && currentIndex < items.length ? items[currentIndex+1] : false;
  const getNextLink = () => currentStep && currentIndex < items.length ? items[currentIndex+1].link : '#';

  return (
    <>
      <div
        className={
          `
            flex
            flex-row
            items-center
            justify-center
          `
        }
      >
        <Button
          variant="solid"
          size="medium"
          text="< Previous"
          className={isPrevEnabled() ? 'flex-1' : 'invisible'}
          onClick={onPrev ? onPrev : () => navigate(getPrevLink())}
          round
        />
        <div>
          <FormSteps
            items={items}
          />
        </div>
        <Button
          primary
          variant="solid"
          size="medium"
          text="Next >"
          className={isNextEnabled() ? 'flex-1 mr-auto' : 'invisible'}
          onClick={onNext ? onNext : () => navigate(getNextLink())}
          round
        />
      </div>
    </>
  )
};

export default WizardFooter;