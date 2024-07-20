import React from 'react';
import Image from 'next/image';
import {HeroImg} from 'public/img/image'; 
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className='centred py-8 flex items-center gap-8 flex-col justify-center md:flex-row'>
    
        {/* Image Section */}
        
        <Image
  alt="HeroImg"
  src={HeroImg}
  className="rounded-xl w-full h-auto sm:h-full sm:w-auto md:max-w-[1200px] lg:max-w-[1200px] xl:max-w-[3000px] object-cover"
          />
        

        {/* Text Content Section */}
        <div className="flex flex-col gap-4  md:text-left sm:text-left">
          <h1 className="font-mono  lg:text-lg md:text-lg sm:text-sm text-primary">BIENVENUE SUR RUSTIKA HOUSE</h1>
          <h2 className="lg:text-4xl md:text-4xl sm:text-2xl font-bold  text-orange-400">
            CONSTRUISEZ VOTRE RÊVE ÉLÉGAN TRADIIONNELLE PORTE
          </h2>

          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur
            quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt?
            Molestiae eius quidem quam repellat.
          </p>
          
          <div className="flex gap-4 justify-center md:justify-end">
          <Link
              href="#"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition hover:bg-blue-100 focus:outline-none border border-primary"
            >
              CONTACTER NOUS
            </Link>  
            <Link
              href="#"
              className="inline-block flex-initial rounded-full bg-primary  px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-300 focus:outline-none"
            >
              APPELLER
            </Link>
          </div>
        </div>

    </section>



   
  );
};

export default HeroSection;
