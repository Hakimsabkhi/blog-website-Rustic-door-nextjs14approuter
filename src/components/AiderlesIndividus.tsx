// AiderlesIndividus.tsx
import React from 'react';
import Image from 'next/image';
import { imagesINFO, contactSections, iconMap, IconType } from 'public/data';

function AiderlesIndividus() {
  return (
    <section className="w-full py-8 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row gap-16 items-center centred">
        {/* Text Content Section on the left */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          <h2 className="text-md sm:text-md md:text-4xl lg:text-4xl xl:text-4xl font-bold text-orange-400">
            AIDER LES INDIVIDUS À CHOISIR LA PORTE APPROPRIÉE
          </h2>
          <p className="text-gray-400">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla
            convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
          </p>

          {contactSections.map((section, index) => {
            const SectionIcon = iconMap[section.icon];
            return (
              <section key={index} className="rounded-[30px] bg-white p-4 sm:p-6 lg:p-6 shadow-xl">
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-8">
                  <div className="text-primary py-8 sm:py-0 sm:mr-4 sm:ml-0">
                    <SectionIcon className="w-10 h-10" />
                  </div>
                  <div className="text-center sm:text-left">
                    <strong className="text-[20px] font-medium text-primary block sm:inline">
                      {section.title}
                    </strong>
                    {section.contacts.map((contact, idx) => {
                      const ContactIcon = iconMap[contact.icon];
                      return (
                        <h3 key={idx} className={`mt-4 text-[15px] font-medium ${idx !== 0 ? 'mt-2' : ''}`}>
                          <a href={contact.href} className="hover:underline text-gray-400 font-medium flex justify-center sm:justify-start items-center gap-2">
                            <ContactIcon className="w-4 h-4 text-gray-400" /> {contact.text}
                          </a>
                        </h3>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Parent container to align the two sections side by side */}
        <div className="flex sm:flex-row gap-4 items-center">
          {/* First Image Section */}
          <div className="flex flex-col gap-8 scale-100 sm:scale-100 md:scale-100 lg:scale-100 xl:scale-100">
            <Image
              src={imagesINFO[0].src}
              alt={imagesINFO[0].alt}
              className={imagesINFO[0].className}
            />
          </div>

          {/* Second and Third Images Section */}
          <div className="flex flex-col gap-6">
            <Image
              src={imagesINFO[1].src}
              alt={imagesINFO[1].alt}
              className={imagesINFO[1].className}
            />
            <Image
              src={imagesINFO[2].src}
              alt={imagesINFO[2].alt}
              className={imagesINFO[2].className}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiderlesIndividus;
