import React from 'react';
import Image from 'next/image';
import { AppelezImg } from 'public/img/image'; // Adjust the path as necessary

function AppelezNousMaintenant() {
  return (
    <section className="flex justify-center py-8 sm:py-12 lg:py-16 centred">
      <div className="w-4/5 max-w-screen-xl flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex flex-col justify-center gap-6 lg:py-36 lg:w-1/2">
          <h2 className="text-3xl font-bold sm:text-4xl text-orange-400">APPELEZ NOUS MAINTENANT</h2>

          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
            eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
            quidem quam repellat.
          </p>

          <a
            href="#"
            className="inline-block rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
            style={{ maxWidth: '300px' }}
          >
            EXPLOREZ MAINTENANT
          </a>
        </div>

        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full flex-shrink-0 lg:flex-shrink img-container">
          <Image
            alt="img"
            src={AppelezImg} // Use the imported image
            className=" object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AppelezNousMaintenant;
