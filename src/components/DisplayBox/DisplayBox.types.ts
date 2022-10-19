export interface DisplayBoxProps {
  type: 'enrollment' | 'experience' | 'payment';
  value: string;
};

export interface SubBoxProps {
  value: EnrollmentValue | ExperienceValue | PaymentValue;
}

export type EnrollmentValue = "12 week course: M-F (9am-6pm)" | "24 week course: M-F (7pm-9pm) & Sat (9am-1pm)";
export type ExperienceValue = "No experience: but I'm excited to start learning" | 
"Beginner: I've done some introductory coding lessons or tutorials" |
"Intermediate: I have completed some coding classes or tutorials" |
"Advanced: I can create simple applications" | 
"Professional: I am an experienced software engineer";
export type PaymentValue = "Upfront payment: ₱80,000 upon enrollment" | "Income Share Agreement: 17% of your income for 2 years after you're hired" | "Installment plan: 12 or 18 monthly installments upon enrollment";
