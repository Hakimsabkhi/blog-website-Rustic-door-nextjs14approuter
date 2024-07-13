import React from 'react';
import Image from 'next/image';
import {Gamme1, Gamme2, Gamme3 ,Gamme4 ,Gamme5 } from 'public/img/image'

function ParcourezLeGamme() {
  return (
    <section className='grid gap-8 py-8 centred'>
      <div className='flex justify-center'>
        <h1 className='text-orange-400 text-4xl font-bold text-center'>PARCOUREZ LE GAMME</h1>
      </div>
      
      <div className='gap-8 justify-between flex'>
        <a href="#" className="group relative block bg-black w-full rounded-xl">
          <Image
            alt="GAMME1"
            src={Gamme1}
            className="w-full h-64 object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          />
          <div className="absolute inset-0 flex items-center ml-5">
            <div
              className="transform opacity-0 transition-all group-hover:opacity-100"
            >
              <p className="text-md text-white ">
                <span className='text-[60px] font-bold opacity-50'>216</span><br />
                Hiboun,Ma
              </p>
            </div>
          </div>
        </a>

        <a href="#" className="group relative block bg-black w-full rounded-xl">
          <Image
            alt=""
            src={Gamme2}
            className="w-full h-64 object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          />
          <div className="absolute inset-0 flex items-center ml-5">
            <div
              className="transform opacity-0 transition-all group-hover:opacity-100"
            >
              <p className="text-md text-white">
                <span className='text-[60px] font-bold opacity-50'>216</span><br />
                Hiboun,Ma
              </p>
            </div>
          </div>
        </a>

        <a href="#" className="group relative block bg-black w-full rounded-xl">
          <Image
            alt=""
            src={Gamme3}
            className="w-full h-64 object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          />
          <div className="absolute inset-0 flex items-center ml-5">
            <div
              className="transform opacity-0 transition-all group-hover:opacity-100"
            >
              <p className="text-md text-white">
                <span className='text-[60px] font-bold opacity-50'>216</span><br />
                Hiboun,Ma
              </p>
            </div>
          </div>
        </a>
      </div>

      <div className='gap-8 justify-between flex'>
        <a href="#" className="group relative block bg-black w-full rounded-xl">
          <Image
            alt=""
            src={Gamme4}
            className="w-full h-64 object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          />
          <div className="absolute inset-0 flex items-center ml-5">
            <div
              className="transform opacity-0 transition-all group-hover:opacity-100"
            >
              <p className="text-md text-white">
                <span className='text-[60px] font-bold opacity-50'>216</span><br />
                Hiboun,Ma
              </p>
            </div>
          </div>
        </a>

        <a href="#" className="group relative block bg-black w-full rounded-xl">
          <Image
            alt=""
            src={Gamme5}
            className="w-full h-64 object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-xl"
          />
          <div className="absolute inset-0 flex items-center ml-5">
            <div
              className="transform opacity-0 transition-all group-hover:opacity-100"
            >
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
