import React from 'react';

import { FaCog, FaUser, FaChartBar } from 'react-icons/fa';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary'; // Ensure this image exists in your public folder

function Page() {
  return (
    <div className="flex">
      
      <div className="flex-1 p-6 ">
        <h1 className="text-4xl text-center text-primary hover:text-orange-400 font-bold mb-8">
          Admin Panel
        </h1>
        
        <div className="mt-8 flex justify-center mb-8 ">
          <Image src={"https://res.cloudinary.com/dzo2bvw5a/image/upload/v1723116603/profileImage_npkuum.jpg"} alt="Admin" width={100} height={100} className="rounded-lg shadow-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:bg-orange-200">
            <FaCog className="text-4xl text-blue-500 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Settings</h2>
              <p className="text-gray-600">Manage your application settings.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:bg-orange-200">
            <FaUser className="text-4xl text-green-500 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Users</h2>
              <p className="text-gray-600">Manage user accounts and profiles.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center hover:bg-orange-200">
            <FaChartBar className="text-4xl text-purple-500 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">Analytics</h2>
              <p className="text-gray-600">View and analyze application data.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Page;
