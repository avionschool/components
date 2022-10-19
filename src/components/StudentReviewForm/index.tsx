import React from 'react';
import { StudentReviewFormProps } from './StudentReviewForm.types';
import ReviewApplicationForm from './components/ReviewApplicationForm';
import ReviewScreeningForm from './components/ReviewScreeningForm';
const StudentReviewForm: React.FC<StudentReviewFormProps> = ({ 
  showApplicationForm,
  showScreeningForm,
  student
 }) => {

  return(
    <>
      {showApplicationForm ? <ReviewApplicationForm student={student} /> : <></>}
      {showScreeningForm ? <ReviewScreeningForm student={student} /> : <></>}
    </>
  )
};

export default StudentReviewForm;
