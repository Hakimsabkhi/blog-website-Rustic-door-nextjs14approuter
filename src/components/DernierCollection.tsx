import React from 'react';
import Image from 'next/image.js';
import {
  CollectionImg1,
  CollectionImg2,
  CollectionImg3,
  CollectionImg4,
  CollectionImg5,
  CollectionImg6,
  CollectionImg7,
  CollectionImg8,
} from 'public/img/image'; // Update this path

function DernierCollection() {
  return (
    <section className="flex flex-col gap-8 sm:gap-12 lg:gap-16 py-8 items-center ">
      <div className="flex flex-col items-center gap-8">
        <header className="text-center">
        <h2 className="text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-orange-400">DERNIER COLLECTION</h2>

          <div className="flex justify-center">
            <p className="max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </header>

<ul className="grid gap-4 grid-cols-2 lg:grid-cols-4 w-full centred">
  <li className="h-[250px]">
    <a href="#" className="group block overflow-hidden h-full">
      <Image
        src={CollectionImg1}
        alt="Port-1"
        className="rounded-xl w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
    </a>
  </li>
  <li className="h-[250px]">
    <a href="#" className="group block overflow-hidden h-full">
      <Image
        src={CollectionImg2}
        alt="Port-2"
        className="rounded-xl w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
    </a>
  </li>
  <li className="h-[250px]">
    <a href="#" className="group block overflow-hidden h-full">
      <Image
        src={CollectionImg3}
        alt="Port-3"
        className="rounded-xl w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
    </a>
  </li>
  <li className="h-[250px]">
    <a href="#" className="group block overflow-hidden h-full">
      <Image
        src={CollectionImg4}
        alt="Port-4"
        className="rounded-xl w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
    </a>
  </li>
</ul>


<ul className="grid gap-4 grid-cols-2 lg:grid-cols-4 w-full centred">
  <li className="h-[250px]">
    <a href="#" className="group block overflow-hidden h-full">
      <Image
        src={CollectionImg5}
        alt="Port-5"
        className="rounded-xl w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
    </a>
  </li>
  <li className="h-[250px]">
    <a href="#" className="group block overflow-hidden h-full">
      <Image
        src={CollectionImg6}
        alt="Port-6"
        className="rounded-xl w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
    </a>
  </li>
  <li className="h-[250px]">
    <a href="#" className="group block overflow-hidden h-full">
      <Image
        src={CollectionImg7}
        alt="Port-7"
        className="rounded-xl w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
    </a>
  </li>
  <li className="h-[250px]">
    <a href="#" className="group block overflow-hidden h-full">
      <Image
        src={CollectionImg8}
        alt="Port-8"
        className="rounded-xl w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
    </a>
  </li>
</ul>


        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4 w-full">
          <p className="flex-1 centred">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
          <a
            href="#"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-300 focus:outline-none"
          >
            EXPLOREZ MAINTENANT
          </a>
        </div>
      </div>
    </section>
  );
}

export default DernierCollection;
