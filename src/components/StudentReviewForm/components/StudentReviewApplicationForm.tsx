import React from 'react';
import { DisplayFormProps, StudentDisplayFormProps } from '../StudentReviewForm.types';
import { BiCalendar, BiRightArrowAlt, BiTime } from 'react-icons/bi';
import dayjs from 'dayjs';
import { DisplayBox } from '../..';

const StudentReviewApplicationForm: React.FC<StudentDisplayFormProps> = ({ 
  student,
  navigator
 }) => {

  const navigate = (link: string) => {
    navigator(link);
  }

  return (
    <>
      <div>
        <div id="personal_information">
          <div className="flex flex-row justify-between items-center align-center mb-6 cursor-pointer">
              <h3 className="text-2xl font-bold ">
                  Personal Information
              </h3>
              <div 
                className="flex flex-row text-l justify-center items-center text-primary-500 font-extrabold"
                onClick={() => navigate('/apply/personal')}
              >
                <span> Change </span> 
                <BiRightArrowAlt />
              </div>
            </div>

            <div className="flex flex-col md:flex-row mb-6">
              <div className="flex-1 w-full mb-6 md:mb-0 md:w-1/2">
                <label htmlFor="first_name" className="font-bold mb-3 block">
                  First Name
                </label>
                <p>{student?.first_name}</p>
              </div>

              <div className="flex-1 w-full md:w-1/2">
                <label htmlFor="last_name" className="font-bold mb-3 block">
                  Last Name
                </label>
                <p>{student?.last_name}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row mb-10">
              <div className="flex-1 w-full mb-6 md:mb-0 md:w-1/2">
                <label htmlFor="birthdate" className="font-bold mb-3 block">
                  Birthdate
                </label>
                <p>{student?.birthdate ? dayjs(new Date(student?.birthdate)).format('MM/DD/YYYY') : student?.birthdate}</p>
              </div>

              <div className="flex-1 w-full md:w-1/2">
                <label htmlFor="birthdate" className="font-bold mb-3 block">
                  Are you a Filipino Citizen?
                </label>
                <p>{student?.information?.filipino_citizen}</p>
              </div>
            </div>
        </div>

        <div id="enrollment_information">
          <div className="flex flex-row justify-between items-center align-center mb-6 cursor-pointer">
              <h3 className="text-2xl font-bold ">
                  Enrollment Information
              </h3>
              <div 
                className="flex flex-row text-l justify-center items-center text-primary-500 font-extrabold"
                onClick={() => navigate('/apply/enrollment')}
              >
                <span> Change </span> 
                <BiRightArrowAlt />
              </div>
          </div>
          <label className="mb-6 font-bold block">
            Which type of class are you planning to enroll in?
          </label>

          <div className="flex mb-6 w-full sm:w-1/2">
            <DisplayBox
              type="enrollment"
              value={student?.preferences?.schedule}
            />
          </div>

          <label className="mb-6 font-bold block">
            What’s your experience with programming?
          </label>
          <div className="mb-10">
            <DisplayBox
              type="experience"
              value={student?.information?.programming_experience}
            />
          </div>
        </div>

          <div id="payment_information">
            <div className="flex flex-row justify-between items-center align-center mb-6 cursor-pointer">
              <h3 className="text-2xl font-bold ">
                  Payment Information
              </h3>
              <div 
                className="flex flex-row text-l justify-center items-center text-primary-500 font-extrabold"
                onClick={() => navigate('/apply/payment')}
              >
                <span> Change </span> 
                <BiRightArrowAlt />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex mb-10 w-full md:w-1/2 lg:w-1/3">
                <DisplayBox
                  type="payment"
                  value={student?.preferences?.payment_method}
                />
              </div>
            </div>

            { student?.information?.payment?.pending_loans === "Yes" && 
              <div>
                <p className="font-bold mb-6">
                  Do you have any unpaid ISA or other loans?
                </p>

                <p className="mb-10">
                  {student?.information?.payment?.pending_loans}
                </p>

                <p className="font-bold mb-6">
                  What type of loans do you have?
                </p>
                <p className="mb-10">
                  {student?.information?.payment?.types_of_loans.join(", ")}
                </p>
              </div>
            }

            <p className="font-bold mb-6">
              How did you hear about Avion School?
            </p>

            <p className="mb-10">
              {student?.information?.acquisition_channel}
            </p>

            <p className="font-bold mb-6">
              Would you like to receive future updates about Avion School?
            </p>

            <p className="mb-10">
              {student?.preferences?.subscribed_to_email_list}
            </p>
          </div>

      </div>
    </>
  )
}

export default StudentReviewApplicationForm;
