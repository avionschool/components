export interface StudentReviewFormProps {
  showApplicationForm?: boolean;
  showScreeningForm?: boolean;
  studentScreeningForm?: boolean;
  student: JSONValue;
  navigator?: JSONValue;
};

export interface DisplayFormProps {
  student: JSONValue;
}

export interface StudentDisplayFormProps {
  student: JSONValue;
  navigator: JSONValue;
}