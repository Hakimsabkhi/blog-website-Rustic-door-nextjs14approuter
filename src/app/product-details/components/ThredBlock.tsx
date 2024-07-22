import React from 'react';
import Image from 'next/image';
import { ProductDetail1 } from 'public/img/image';

function ThredBlock() {
  return (
    <section className='centred py-8 flex flex-col items-center justify-center'>
      {/* ThredBlock */}
      <div className='flex flex-col items-center justify-center gap-8 py-8 w-full'>
        <div className="flex flex-col gap-4 text-center">

          <h2 className="font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl -mt-2 text-orange-400">

            DECOUVRE NOTRE PRODUIT
          </h2>
        </div>

        {/* Image Block */}

<div className='flex flex-col md:flex-row items-center justify-center gap-12 w-full'>
  {/* Image 1 - Hidden on Mobile */}
  <div className="hidden md:flex justify-center items-center w-full md:w-1/2">
    <Image
      alt="ProductDetail1"
      src={ProductDetail1}
      className="w-full rounded-xl"
      layout='responsive'
      width={400} // Minimized width for desktop
      height={200}
    />
  </div>

  <div className='flex flex-col gap-5 w-full md:w-1/3'>
    <div className="flex justify-center items-center w-full">
      <Image
        alt="ProductDetail2"
        src={ProductDetail1}
        className="w-full rounded-xl"
        layout='responsive'
        width={400} // Minimized width for desktop
        height={200}
      />
    </div>

    <div className='flex flex-row md:flex-row items-center justify-center gap-4'>
      <div className="flex justify-center items-center w-full md:w-1/2">
        <Image
          alt="ProductDetail3"
          src={ProductDetail1}
          className="w-full rounded-xl"
          layout='responsive'
          width={300} // Minimized width for desktop
          height={200}
        />
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2">
        <Image
          alt="ProductDetail4"
          src={ProductDetail1}
          className="w-full rounded-xl"
          layout='responsive'
          width={300} // Minimized width for desktop
          height={200}
        />
      </div>
    </div>
  </div>
</div>

        <p className="text-gray-600 centred mt-4">
          Thred block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Thred block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Thred block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Thred block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
}

export default ThredBlock;
