import React from 'react';
import { StudentReviewFormProps } from './StudentReviewForm.types';
import ReviewApplicationForm from './components/ReviewApplicationForm';
import ReviewScreeningForm from './components/ReviewScreeningForm';
import StudentReviewScreeningForm from './components/StudentReviewScreeningForm';
import StudentReviewApplicationForm from './components/StudentReviewApplicationForm';
const StudentReviewForm: React.FC<StudentReviewFormProps> = ({ 
  showApplicationForm,
  showScreeningForm,
  student,
  studentScreeningForm,
  studentApplicationForm,
  navigator
 }) => {

  return(
    <>
      {showApplicationForm ? <ReviewApplicationForm student={student} /> : <></>}
      {showScreeningForm ? <ReviewScreeningForm student={student} /> : <></>}
      {studentScreeningForm ? <StudentReviewScreeningForm student={student} navigator={navigator} /> : <></>}
      {studentApplicationForm ? <StudentReviewApplicationForm student={student} navigator={navigator} /> : <></>}
    </>
  )
};

export default StudentReviewForm;
