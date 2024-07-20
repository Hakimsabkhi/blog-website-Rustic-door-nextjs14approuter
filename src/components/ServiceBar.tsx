import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCheckCircle, faHeadset } from '@fortawesome/free-solid-svg-icons';

const ServiceBar: React.FC = () => {
  return (
    <div className="bg-blue-50 flex justify-around sm:flex-row w-full h-40 sm:h-20 md:h-28 lg:h-28 xl:h-28">
      <div className="max-w-screen-xl flex justify-around items-center text-gray-700 w-full">
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faTruck} className="text-gray-600 text-4xl" />
          <p className="font-medium text-sm">Free Delivery <br/><span className='text-[10px] text-gray-500 font-light'>Lorem ipsum dolor sit amet.</span> </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faCheckCircle} className="text-gray-600 text-4xl" />
          <p className="font-medium text-sm">100% Authentic <br/><span className='text-[10px] text-gray-500 font-light'>Lorem ipsum dolor sit amet.</span></p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faHeadset} className="text-gray-600 text-4xl" />
          <p className="font-medium text-sm">Support 24/7 <br/><span className='text-[10px] text-gray-500 font-light'>Lorem ipsum dolor sit amet.</span></p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
