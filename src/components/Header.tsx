"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Logo, locationIcone, phoneIcone, emailIcone } from 'public/img/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      {/* InfoBar */}
      <div className="bg-blue-600 text-white p-2 text-center">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 centred">
          <div className="flex items-center justify-center sm:justify-start text-xl sm:text-xl">
            <Image src={locationIcone} alt="location Icone" className="mr-2" />
            <span>RUSTIKLink HOUSE, 5080 Teboulba, Monastir, Tunisie</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start text-xl sm:text-xl">
            <Image src={phoneIcone} alt="Phone Icone" className="mr-1 scale-50" />
            <span>+1 206-214-2298</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start text-xl sm:text-xl">
            <Image src={emailIcone} alt="Email Icone" className="mr-1 scale-50" />
            <span>support@rezilla.com</span>
          </div>
        </div>
      </div>
      {/* NavBar */}
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-16 my-5 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link className="block text-sky-600" href="/">
            <span className="sr-only">Home</span>
            <Image src={Logo} alt="logo" className="w-3/4" />
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:justify-center md:flex-grow">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link className="text-gray-500 transition hover:text-sky-600" href="/">Home</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-sky-600" href="#">About Us</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-sky-600" href="#">Blog</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-sky-600" href="/product">Products</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-sky-600" href="#">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex md:items-center md:gap-4">
          <div className="sm:flex sm:gap-4">
            <Link
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-sky-700"
              href="#"
            >
              Login
            </Link>
          </div>

          <div className="sm:flex sm:gap-4">
            <Link
              className="rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-500 transition hover:bg-gray-200"
              href="#"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="block md:hidden">
          <button onClick={toggleMenu} className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:text-sky-500">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav aria-label="Global">
            <ul className="flex flex-col items-center gap-6 text-sm">
              <li>
                <Link className="text-gray-500 transition hover:text-sky-600" href="/">Home</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-sky-600" href="#">About Us</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-sky-600" href="#">Blog</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-sky-600" href="/product">Products</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-sky-600" href="#">Contact</Link>
              </li>
              <li>
                <Link className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-sky-700" href="#">
                  Login
                </Link>
              </li>
              <li>
                <Link className="rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-500 transition hover:bg-gray-200" href="#">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
