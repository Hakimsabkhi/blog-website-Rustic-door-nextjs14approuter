import React from 'react';
import { Phone, PhoneCall, Printer } from 'lucide-react';
import { Mail, Info, MapPin } from 'lucide-react';

function AiderlesIndividus() {
  return (
    <section className="w-full py-8 flex justify-center items-center centred">
      <div className="w-4/5 flex flex-col lg:flex-row gap-16 items-center">
        {/* Text Content Section on the left */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          <h2 className="text-4xl font-bold text-orange-400">
            AIDER LES INDIVIDUS À CHOISIR LA PORTE APPROPRIÉE
          </h2>
          <p className="texsky-500">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla
            convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
          </p>

          <section className="rounded-[30px] bg-white p-4 sm:p-6 lg:p-6 shadow-xl">
            <div className="flex items-start sm:gap-8">
              <div className="text-sky-500 py-8">
                <PhoneCall className="w-10 h-10" /> {/* Call icon */}
              </div>
              <div>
                <strong className="text-[20px] font-medium text-sky-500">
                  Appelez-nous Maintenant
                </strong>

                <h3 className="mt-4 text-[15px] font-medium">
                  <a href="tel:+21612345678" className="hover:underline text-gray-400 font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" /> {/* Phone icon */}
                    Numéro de téléphone : +(216) 12 345 678
                  </a>
                </h3>

                <h3 className="mt-2 text-[15px] font-medium">
                  <a href="fax:+21612345678" className="hover:underline text-gray-400 font-medium flex items-center gap-2">
                    <Printer className="w-4 h-4 text-gray-400" /> {/* Fax icon */}
                    Fax : +(216) 12 345 678
                  </a>
                </h3>
              </div>
            </div>
          </section>

          <section className="rounded-[30px] bg-white p-4 sm:p-6 lg:p-6 shadow-xl">
            <div className="flex items-start sm:gap-8">
              <div className="text-sky-500 py-8">
                <Info className="w-10 h-10" /> {/* Information icon */}
              </div>
              <div>
                <strong className="text-[20px] font-medium text-sky-500">
                  Information
                </strong>

                <h3 className="mt-4 text-[15px] font-medium">
                  <a href="mailto:info@example.com" className="hover:underline text-gray-400 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" /> {/* Email icon */}
                    Email : info@example.com
                  </a>
                </h3>

                <h3 className="mt-2 text-[15px] font-medium">
                  <a href="#" className="hover:underline text-gray-400 font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" /> {/* Address icon */}
                    Address : 5080 Teboulba, Monastir, Tunisie
                  </a>
                </h3>
              </div>
            </div>
          </section>
        </div>

        {/* Parent container to align the two sections side by side */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:w-1/2">
          {/* First Image Section on the right */}
          <div className="flex flex-col gap-8">
            <img
              src="/img/IMG/map.jpg"
              alt="Map"
              className="rounded-lg object-cover w-[360px]"
            />
          </div>

          {/* Second Image Section on the right */}
          <div className="flex flex-col gap-6">
            <img
              src="/img/IMG/P15.jpg"
              alt="Image 1"
              className="rounded-lg object-cover w-[200px]"
            />
            <img
              src="/img/IMG/Port-12.jpg"
              alt="Image 2"
              className="rounded-lg object-cover w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiderlesIndividus;
