import React from 'react'
import Image from 'next/image';
import { ProductDetail1, } from 'public/img/image';

function FirstBlock() {
  return (
    
    <section className='centred py-8 flex flex-col items-center justify-center'> {/* First Block */}
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className="flex justify-center items-center centred">
          <Image
            alt="ProductDetail1"
            src={ProductDetail1}
            className="max-w-[500px] rounded-xl"
            layout='responsive'
            width={500}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">

          <h1 className="font-mono text-lg text-primary mt-2">BIENVENUE SUR RUSTIKA HOUSE</h1>
          <h2 className="font-bold text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl -mt-2 text-orange-400">

            SIDI BOU SAID DOOR
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur
            quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt?
            Molestiae eius quidem quam repellat.
          </p>
        </div>
      </div></section>
  )
}

export default FirstBlock