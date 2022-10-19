import React from 'react';
import { Box } from '../../..';

const UpfrontBox: React.FC = () => {
  return (
    <>
      <Box isReadOnly>
        <div className="mb-6 w-full">
          <p className="font-bold text-center m-6 mb-3">
            Total Upfront payment
          </p>

          <div className="w-full items-center">
            <h1 className="font-bold text-center">
              P80,000
            </h1>
          </div>

          <p className="mt-3 mx-6 text-center">
            Pay a one-time fixed payment of PHP 80,000 at the time of enrollment
          </p>
        </div>
      </Box>
    </>
  )
};

export default UpfrontBox;