import React from 'react';

function DernierCollection() {
  return (
    <section className="flex flex-col gap-8 sm:gap-12 lg:gap-16 py-8 items-center centred">
      <div className="w-4/5 flex flex-col items-center gap-8">
        <header className="text-center">
          <h2 className="text-4xl font-bold text-orange-400 sm:text-4xl text-center">DERNIER COLLECTION</h2>
          <div className="flex justify-center">
            <p className="max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
              dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
          </div>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="/img/IMG/Port-7.jpg"
                alt="Port-1"
                className="rounded-xl w-full h-auto object-cover transition duration-500 group-hover:scale-105 sm:max-h-[450px] sm:h-[350px]"
              />
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="/img/Carrousel/p9.jpg"
                alt="Port-2"
                className="rounded-xl w-full h-auto object-cover transition duration-500 group-hover:scale-105 sm:max-h-[450px] sm:h-[350px]"
              />
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="/img/IMG/P15.jpg"
                alt="Port-3"
                className="rounded-xl w-full h-auto object-cover transition duration-500 group-hover:scale-105 sm:max-h-[450px] sm:h-[350px]"
              />
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="/img/Carrousel/p8.jpg"
                alt="Port-4"
                className="rounded-xl w-full h-auto object-cover transition duration-500 group-hover:scale-105 sm:max-h-[450px] sm:h-[350px]"
              />
            </a>
          </li>
        </ul>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="/img/IMG/tunis_01.jpg"
                alt="Port-1"
                className="rounded-xl w-full h-auto object-cover transition duration-500 group-hover:scale-105 sm:max-h-[450px] sm:h-[350px]"
              />
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="/img/IMG/porte-6.jpg"
                alt="Port-2"
                className="rounded-xl w-full h-auto object-cover transition duration-500 group-hover:scale-105 sm:max-h-[450px] sm:h-[350px]"
              />
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="/img/Carrousel/p3.jpg"
                alt="Port-3"
                className="rounded-xl w-full h-auto object-cover transition duration-500 group-hover:scale-105 sm:max-h-[450px] sm:h-[350px]"
              />
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="/img/Carrousel/p5.jpg"
                alt="Port-4"
                className="rounded-xl w-full h-auto object-cover transition duration-500 group-hover:scale-105 sm:max-h-[450px] sm:h-[350px]"
              />
            </a>
          </li>
        </ul>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4 w-full">
          <p className="flex-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
          <a
            href="#"
            className="rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus:outline-none"
          >
            EXPLOREZ MAINTENANT
          </a>
        </div>
      </div>
    </section>
  );
}

export default DernierCollection;
