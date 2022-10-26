import React from 'react';
import InstallmentBox from './InstallmentBox';
import ISABox from './ISABox';
import { PaymentBoxProps } from './PaymentBox.types';
import UpfrontBox from './UpfrontBox';

const PaymentBox: React.FC<PaymentBoxProps> = ({
  value
}) => {

  const renderPaymentComponent = () => {
    switch(value) {
      case 'Upfront payment: ₱80,000 upon enrollment':
        return <UpfrontBox />
      case "Income Share Agreement: 17% of your income for 2 years after you're hired":
        return <ISABox />
      case "Installment plan: 12 or 18 monthly installments upon enrollment":
        return <InstallmentBox />
    }
  }
  return(
    <>
      {renderPaymentComponent()}
    </>
  )
};

export default PaymentBox;
