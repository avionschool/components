import React from 'react';
import dayjs from 'dayjs';
import { DisplayFormProps, StudentDisplayFormProps } from '../StudentReviewForm.types';
import { title } from 'process';
import { BiPencil, BiTrashAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Box, DisplayBox } from '../../..';

const StudentReviewScreeningForm: React.FC<StudentDisplayFormProps> = ({ 
  student,
  navigator
 }) => {

  const calculateTimeDifference = (start_month: string, start_year: string, end_month: string, end_year: string) => {
    const startDate = dayjs(`${start_month} ${start_year}`);
    const endDate = dayjs(`${end_month} ${end_year}`);

    let stringDiff;
    if (endDate.isValid()) {
      stringDiff = endDate.diff(startDate, 'month');
    } else {
      stringDiff = dayjs().diff(startDate, 'month');
    }

    const years = Math.floor(stringDiff / 12);
    const months = stringDiff % 12;
    const yearStatement = years ? `${years} years ` : '';
    const monthStatement = months ? `${months} months` : '';

    return yearStatement + monthStatement;
  }

  const navigate = (link: string) => {
    navigator(link);
  }

  return(
    <>
      <div className="flex flex-col gap-4">
        <div id="about_you">
          <div className="flex flex-row justify-between items-center align-center mb-6 cursor-pointer">
            <h3 className="text-2xl font-bold ">
                About You
            </h3>
            <div 
              className="flex flex-row text-l justify-center items-center text-primary-500 font-extrabold"
              onClick={() => navigate('/screening/personal')}
            >
              <span> Change </span> 
              <BiRightArrowAlt />
            </div>
          </div>

          <div className="flex flex-row mb-6">
            <div className="flex-1 w-full mb-6 md:mb-0">
              <div className="font-bold mb-3 block">
                What are you primary intentions for enrolling in this program?
              </div>
              <p>{student?.screening?.personal_information}</p>
            </div>
          </div>

          <div className="flex flex-row mb-6">
            <div className="flex-1 w-full mb-6 md:mb-0">
              <div className="font-bold mb-3 block">
                Why do you want to be a Software Engineer?
              </div>
              <p>{student?.screening?.motivation}</p>
            </div>
          </div>

          <div className="flex flex-row mb-6">
            <div className="flex-1 w-full mb-6 md:mb-0">
              <div className="font-bold mb-3 block">
                What do you usually like to do in your free time?
              </div>
              <p>{student?.screening?.free_time}</p>
            </div>
          </div>

          <div className="flex flex-row mb-6">
            <div className="flex-1 w-full mb-6 md:mb-0">
              <div className="font-bold mb-3 block">
                Share something in your life that you are especially proud of
              </div>
              <p>{student?.screening?.proud_of}</p>
            </div>
          </div>
        </div>
        <div id="academic_history" className="flex flex-col my-4"
        >
          <div 
            className="flex flex-row justify-between items-center align-center mb-6 cursor-pointer"
          >
            <h3 className="text-2xl font-bold ">
                Academic History
            </h3>
            <div 
              className="flex flex-row text-l justify-center items-center text-primary-500 font-extrabold"
              onClick={() => navigate('/screening/academic')}
            >
              <span> Change </span> 
              <BiRightArrowAlt />
            </div>
          </div>
          
          <div className="flex flex-row">
            <div className="flex-1 w-full mb-6 md:mb-4">
              <div className="font-bold mb-3 block">
                Which of the following is the highest level of education you have completed?
              </div>
              <p>{student?.screening?.academic_history?.academic_experience}</p>
            </div>
          </div>

          <Box id="closed-form" className="w-full">
            <div className="flex flex-col sm:flex-row p-6 items-center justify-between w-full gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-2xl text-grayscale-light-body-text font-extrabold"> { student?.screening?.academic_history?.school } </span>
                <span> { student?.screening?.academic_history?.degree } </span>
                {/* Oct 2021 - May 2022 • 8 months */}
                <span> {`
                  ${student?.screening?.academic_history?.start_month} ${student?.screening?.academic_history?.start_year} - 
                  ${student?.screening?.academic_history?.end_month} ${student?.screening?.academic_history?.end_year} • 
                  ${calculateTimeDifference(student?.screening?.academic_history?.start_month, student?.screening?.academic_history?.start_year, student?.screening?.academic_history?.end_month, student?.screening?.academic_history?.end_year)} `}</span>
              </div>
            </div>
          </Box>

        </div>
        <div id="employment_history" className="flex flex-col my-4"
        >
          <div 
            className="flex flex-row justify-between items-center align-center mb-6 cursor-pointer"
          >
            <h3 className="text-2xl font-bold ">
                Employment History
            </h3>
            <div 
              className="flex flex-row text-l justify-center items-center text-primary-500 font-extrabold"
              onClick={() => navigate('/screening/employment')}
            >
              <span> Change </span> 
              <BiRightArrowAlt />
            </div>
          </div>
          {
            student?.screening?.employment_history?.length > 0 ? 
            student?.screening?.employment_history?.map((employment: JSONValue) => {
              const { start_month, start_year, end_month, end_year, company_name, current_role, title } = employment;
              return (
                <Box id="closed-form" className="w-full mb-4">
                  <div className="flex flex-col sm:flex-row p-6 items-center justify-between w-full gap-8">
                    <div className="flex flex-col gap-4">
                      <span className="text-2xl text-grayscale-light-body-text font-extrabold">{company_name} </span>
                      <span> {title} </span>
                      {/* Oct 2021 - May 2022 • 8 months */}
                      <span> {`${start_month} ${start_year} - ${current_role?.includes('no') ? (end_month + ' ' + end_year) : 'Present'} • ${calculateTimeDifference(start_month, start_year, end_month, end_year)} `}</span>
                    </div>
                  </div>
                </Box>
              )
            }) :
            <p> I have no experience </p>
          }
        </div>
        <div id="web_development_experience">
          <div 
            className="flex flex-row justify-between items-center align-center mb-6 cursor-pointer"
          >
            <h3 className="text-2xl font-bold ">
                Web Development Experience
            </h3>
            <div 
              className="flex flex-row text-l justify-center items-center text-primary-500 font-extrabold"
              onClick={() => navigate('/screening/experience')}
            >
              <span> Change </span> 
              <BiRightArrowAlt />
            </div>
          </div>

            <div className="flex flex-row mb-6">
              <div className="flex-1 w-full mb-6 md:mb-0">
                <div className="font-bold mb-3 block">
                  This was your answer when we asked you about your experience on web development
                </div>
                <div>
                  <DisplayBox
                    type="experience"
                    value={student?.information?.programming_experience}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row mb-6">
              <div className="flex-1 w-full mb-6 md:mb-0">
                <div className="font-bold mb-3 block">
                Can you please tell us more details about your web development experience mentioned above?
                </div>
                <div>
                  <p>{student?.screening?.experience_details}</p>
                </div>
              </div>
            </div>
        </div>
        <div id="financial_capacity">
          <div 
            className="flex flex-row justify-between items-center align-center mb-6 cursor-pointer"
          >
            <h3 className="text-2xl font-bold ">
                Financial Capacity
            </h3>
            <div 
              className="flex flex-row text-l justify-center items-center text-primary-500 font-extrabold"
              onClick={() => navigate('/screening/financial')}
            >
              <span> Change </span> 
              <BiRightArrowAlt />
            </div>
          </div>

          <div className="flex flex-row mb-6">
            <div className="flex-1 w-full mb-6 md:mb-0">
              <div className="font-bold mb-3 block">
                Are you currently providing for anyone?
              </div>
              <p>{student?.screening?.currently_providing}</p>
            </div>
          </div>
        </div>
        <div id="final_question">
          <div 
            className="flex flex-row justify-between items-center align-center mb-6 cursor-pointer"
          >
            <h3 className="text-2xl font-bold ">
                Final Question
            </h3>
            <div 
              className="flex flex-row text-l justify-center items-center text-primary-500 font-extrabold"
              onClick={() => navigate('/screening/final')}
            >
              <span> Change </span> 
              <BiRightArrowAlt />
            </div>
          </div>

          <div className="flex flex-row mb-6">
            <div className="flex-1 w-full mb-6 md:mb-0">
              <div className="font-bold mb-3 block">
                Why should we pick you?
              </div>
              <p>{student?.screening?.why_should_we_pick_you}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default StudentReviewScreeningForm;
