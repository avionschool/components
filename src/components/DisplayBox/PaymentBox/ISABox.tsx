import React from 'react';
import { Box } from '../../..';

const ISABox: React.FC = () => {
  return (
    <>
      <div className="w-full lg:w-1/3 flex-1 lg:mx-2 mb-6 lg:mb-0">
          <Box isReadOnly>
            <label data-testid="isa-label" htmlFor="payment_method-Income Share Agreement: 17% of your income for 2 years after you're hired"
              className="flex flex-col items-center h-full w-full cursor-pointer">
              <p className={"font-bold text-center m-6 mb-3"}>
                Income share agreement (ISA)
              </p>

              <div className="flex items-center">
                <div className="flex-0 ml-6 mr-2">
                  <h1 className="font-bold text-center">
                    17%
                  </h1>
                </div>
                <div className="flex-1 ml-2 mr-4">
                  <p>
                    of your future monthly salary
                  </p>
                </div>
              </div>

              <p className="mt-3 mx-6 mb-3">
                When you’re hired, pay 17% of your monthly salary for 2 years
              </p>
            </label>
          </Box>
        </div>
    </>
  )
};

export default ISABox;
