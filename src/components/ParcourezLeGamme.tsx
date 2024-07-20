import React from 'react';
import Image from 'next/image';
import { Gamme1, Gamme2, Gamme3, Gamme4, Gamme5 } from 'public/img/image';

function ParcourezLeGamme() {
  return (
    <section className='py-8 centred'>
      <div className='flex justify-center mb-8'>
        <h1 className='text-orange-400 text-4xl font-bold text-center'>PARCOUREZ LE GAMME</h1>
      </div>

      {/* Container for grid layout */}
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3'>
        {/* Image 1 */}
        <a href="#" className="group relative block bg-black rounded-xl overflow-hidden">
          <Image
            alt="GAMME1"
            src={Gamme1}
            className="w-full h-52 object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="absolute inset-0 flex items-center ">
            <div className="transform opacity-0 transition-all group-hover:opacity-100">
              <p className="text-md text-white">
                <span className='text-[60px] font-bold opacity-50'>216</span><br />
                Hiboun,Ma
              </p>
            </div>
          </div>
        </a>

        {/* Image 2 */}
        <a href="#" className="group relative block bg-black rounded-xl overflow-hidden">
          <Image
            alt=""
            src={Gamme2}
            className="w-full h-52 object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="absolute inset-0 flex items-center ">
            <div className="transform opacity-0 transition-all group-hover:opacity-100">
              <p className="text-md text-white">
                <span className='text-[60px] font-bold opacity-50'>216</span><br />
                Hiboun,Ma
              </p>
            </div>
          </div>
        </a>

        {/* Image 3 (Hidden on mobile) */}
        <a href="#" className="group relative block bg-black rounded-xl overflow-hidden ">
          <Image
            alt=""
            src={Gamme3}
            className="w-full h-52 object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="absolute inset-0 flex items-center ">
            <div className="transform opacity-0 transition-all group-hover:opacity-100">
              <p className="text-md text-white">
                <span className='text-[60px] font-bold opacity-50'>216</span><br />
                Hiboun,Ma
              </p>
            </div>
          </div>
        </a>

        {/* Image 4 (Hidden on mobile) */}
        <a href="#" className="group relative block bg-black rounded-xl overflow-hidden ">
          <Image
            alt=""
            src={Gamme4}
            className="w-full h-52 object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="absolute inset-0 flex items-center ">
            <div className="transform opacity-0 transition-all group-hover:opacity-100">
              <p className="text-md text-white">
                <span className='text-[60px] font-bold opacity-50'>216</span><br />
                Hiboun,Ma
              </p>
            </div>
          </div>
        </a>

        {/* Image 5 (Hidden on mobile) */}
        <a href="#" className="group relative block bg-black rounded-xl overflow-hidden hidden lg:block">
          <Image
            alt=""
            src={Gamme5}
            className="w-full h-52 object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="absolute inset-0 flex items-center ">
            <div className="transform opacity-0 transition-all group-hover:opacity-100">
              <p className="text-md text-white">
                <span className='text-[60px] font-bold opacity-50'>216</span><br />
                Hiboun,Ma
              </p>
            </div>
          </div>
        </a>

        <a href="#" className="group relative block bg-black rounded-xl overflow-hidden hidden lg:block">
          <Image
            alt=""
            src={Gamme5}
            className="w-full h-52 object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="absolute inset-0 flex items-center ">
            <div className="transform opacity-0 transition-all group-hover:opacity-100">
              <p className="text-md text-white">
                <span className='text-[60px] font-bold opacity-50'>216</span><br />
                Hiboun,Ma
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default ParcourezLeGamme;
