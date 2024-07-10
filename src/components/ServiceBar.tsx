import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCheckCircle, faHeadset } from '@fortawesome/free-solid-svg-icons';

const ServiceBar: React.FC = () => {
  return (
    <div className="bg-gray-200 flex justify-around sm:flex-row  w-full">
      <div className="max-w-screen-xl flex justify-around items-center text-gray-700 w-full">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faTruck} className="text-gray-600" />
          <p className="font-bold">Free Delivery <br/><span className='text-sm text-gray-500 font-light'>Lorem ipsum dolor sit amet.</span> </p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCheckCircle} className="text-gray-600" />
          <p>100% Authentic <br/><span className='text-sm text-gray-500 font-light'>Lorem ipsum dolor sit amet.</span></p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faHeadset} className="text-gray-600" />
          <p>Support 24/7 <br/><span className='text-sm text-gray-500 font-light'>Lorem ipsum dolor sit amet.</span></p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
