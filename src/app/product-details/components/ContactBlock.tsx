import React from 'react';
import Image from 'next/image';
import { ProductDetail1 } from 'public/img/image';

function ContactBlock() {
  return (

    <section className='centred py-4 flex flex-col items-center justify-center'>

      {/* Contact Block */}
      <div className='flex flex-col md:flex-row centred gap-12 items-center w-full'>
        <div className="flex justify-center items-center w-full md:w-1/2">
          <Image
            alt="ProductDetail3"
            src={ProductDetail1} // Change this to your third image
            className="w-full rounded-xl"
            layout='responsive'
            width={400}
            height={200}
          />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-1/2">

          <h2 className="font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl -mt-2 text-orange-400">

            CONTACTE NOUS !
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur
            quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt?
            Molestiae eius quidem quam repellat.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#"

              className=" rounded-full bg-primary px-12 sm:px-10 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus:outline-none"

            >
              APPELLER NOUS!
            </a>
            <a
              href="#"

              className="rounded-full bg-white px-10 py-3 text-sm font-medium text-primary transition hover:bg-blue-100 focus:outline-none border border-blue-400"
            >
              ESTIMATION GRATUITE !
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBlock;