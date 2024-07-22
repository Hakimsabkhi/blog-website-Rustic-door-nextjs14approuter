import React from 'react';
import Image from 'next/image';
import { ProductDetail1 } from 'public/img/image';

function SecondBlock() {
  return (
    <section className='centred py-8 flex flex-col items-center justify-center'>
      {/* Second Block */}
      <div className='flex flex-col items-center justify-center gap-8 py-8 w-full'>
        <div className="flex flex-col gap-4 text-center">

          <h2 className="font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl -mt-2 text-orange-400">

            DECOUVRE NOTRE PRODUIT
          </h2>
          <p className="text-gray-600 centred">
            Second block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Second block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Second block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Second block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className='flex flex-row md:flex-row items-center justify-center gap-6 w-full'>

          <div className="flex justify-center items-center  w-full md:w-1/3">
            <Image
              alt="ProductDetail2"
              src={ProductDetail1} // Change this to your second image
              className="w-full rounded-xl"
              layout='responsive'
              width={500}
              height={200}
            />
          </div>
          <div className="flex justify-center items-center  w-full md:w-1/3">
            <Image
              alt="ProductDetail3"
              src={ProductDetail1} // Change this to your third image
              className="w-full rounded-xl"
              layout='responsive'
              width={500}
              height={200}
            />
          </div>
        </div>

        <p className="text-gray-600 centred mt-4">
          Second block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Second block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Second block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Second block content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
}

export default SecondBlock;
