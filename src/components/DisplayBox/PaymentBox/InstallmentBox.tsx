import React from 'react';
import { Box } from '../../..';

const InstallmentBox: React.FC = () => {
  return(
    <>
      <Box isReadOnly>
        <div className="w-full">
          <p className="font-bold text-center m-6">
            Installment plans powered by Bukas
          </p>

          <div className="flex items-center m-6">
            <div className="flex-1 ml-6 mr-3">
              <h1 className="font-bold text-right">
                12 or 18
              </h1>
            </div>
            <div className="flex-1 ml-3 mr-6">
              <p className="text-left">
                monthly installments
              </p>
            </div>
          </div>

          <p className="m-6 text-center">
            Pay in 12 or 18 monthly installments
          </p>
        </div>
      </Box>
    </>
  )
};

export default InstallmentBox;
