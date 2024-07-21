import React from 'react';
import { Import, Phone, PhoneCall, Printer } from 'lucide-react';
import { Mail, Info, MapPin } from 'lucide-react';
import Image from 'next/image';
import {AiderImg, AiderImg1, AiderImg2} from 'public/img/image'

function AiderlesIndividus() {
  return (
    <section className=" w-full py-8 flex justify-center items-center ">
      <div className=" flex flex-col lg:flex-row gap-16 items-center centred">
        {/* Text Content Section on the left */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          <h2 className="text-md sm:text-md md:text-4xl lg:text-4xl xl:text-4xl  font-bold text-orange-400">
            AIDER LES INDIVIDUS À CHOISIR LA PORTE APPROPRIÉE
          </h2>
          <p className="text-gray-400">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla
            convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
          </p>

          <section className="rounded-[30px] bg-white p-4 sm:p-6 lg:p-6 shadow-xl">
  <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-8">
    <div className="text-primary py-8 sm:py-0 sm:mr-4 sm:ml-0">
      <PhoneCall className="w-10 h-10" /> {/* Call icon */}
    </div>
    <div className="text-center sm:text-left">
      <strong className="text-[20px] font-medium text-primary block sm:inline">
        Appelez-nous Maintenant
      </strong>

      <h3 className="mt-4 text-[15px] font-medium">
        <a href="tel:+21612345678" className="hover:underline text-gray-400 font-medium flex justify-center sm:justify-start items-center gap-2">
          <Phone className="w-4 h-4 text-gray-400" /> {/* Phone icon */}
          Numéro de téléphone : +(216) 12 345 678
        </a>
      </h3>

      <h3 className="mt-2 text-[15px] font-medium">
        <a href="fax:+21612345678" className="hover:underline text-gray-400 font-medium flex justify-center sm:justify-start items-center gap-2">
          <Printer className="w-4 h-4 text-gray-400" /> {/* Fax icon */}
          Fax : +(216) 12 345 678
        </a>
      </h3>
    </div>
  </div>
</section>


<section className="rounded-[30px] bg-white p-4 sm:p-6 lg:p-6 shadow-xl">
  <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-8">
    <div className="text-primary py-8 sm:py-0 sm:mr-4 sm:ml-0">
      <Info className="w-10 h-10" /> {/* Information icon */}
    </div>
    <div className="text-center sm:text-left">
      <strong className="text-[20px] font-medium text-primary block sm:inline">
        Information
      </strong>

      <h3 className="mt-4 text-[15px] font-medium">
        <a href="mailto:info@example.com" className="hover:underline text-gray-400 font-medium flex justify-center sm:justify-start items-center gap-2">
          <Mail className="w-4 h-4 text-gray-400" /> {/* Email icon */}
          Email : info@example.com
        </a>
      </h3>

      <h3 className="mt-2 text-[15px] font-medium">
        <a href="#" className="hover:underline text-gray-400 font-medium flex justify-center sm:justify-start items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-400" /> {/* Address icon */}
          Address : 5080 Teboulba, Monastir, Tunisie
        </a>
      </h3>
    </div>
  </div>
</section>

        </div>

        {/* Parent container to align the two sections side by side */}
  <div className="flex sm:flex-row gap-4 items-center ">
  {/* First Image Section */}
  <div className="flex flex-col gap-8 ">
    <Image
      src={AiderImg}
      alt="Map"
      className="rounded-lg object-cover h-[440px] sm:h-[440px] md:h-[620px] lg:h-[400px] xl:h-[610px] w-[150px] sm:w-[250px] md:w-[340px] lg:w-[340px]"
    />
  </div>

  {/* Second and Third Images Section */}
  <div className="flex flex-col gap-6">
    <Image
      src={AiderImg1}
      alt="Image 1"
      className="rounded-lg object-cover w-[150px] sm:w-[200px] lg:w-[200px]"
    />
    <Image
      src={AiderImg2}
      alt="Image 2"
      className="rounded-lg object-cover w-[150px] sm:w-[200px] lg:w-[200px]"
    />
  </div>
</div>

      </div>
    </section>
  );
}

export default AiderlesIndividus;
