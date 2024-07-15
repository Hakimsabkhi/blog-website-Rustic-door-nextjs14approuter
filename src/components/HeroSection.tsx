import React from 'react';
import Image from 'next/image';
import {HeroImg} from 'public/img/image';

const HeroSection: React.FC = () => {
  return (
    <section className='centred py-8 flex items-center  flex-col justify-center md:flex-row'>
    
        {/* Image Section */}
        <div className="flex justify-between items-center centred ">
          <Image
            alt="HeroImg"
            src={HeroImg}
            className="max-w-[1200px] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[2000px]  rounded-xl"
           
          />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="font-mono text-lg text-sky-400">BIENVENUE SUR RUSTIKA HOUSE</h1>
          <h2 className="text-3xl font-bold sm:text-4xl text-orange-400">
            CONSTRUISEZ VOTRE RÊVE ÉLÉGAN TRADIIONNELLE PORTE
          </h2>

          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur
            quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt?
            Molestiae eius quidem quam repellat.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-end">
            <a
              href="#"
              className="inline-block flex-initial rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus:outline-none"
            >
              APPELLER
            </a>
            <a
              href="#"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-sky-500 transition hover:bg-blue-100 focus:outline-none border border-blue-400"
            >
              CONTACTER NOUS
            </a>
          </div>
        </div>
      
    </section>
  );
};

export default HeroSection;
