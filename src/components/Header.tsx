import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <div className="bg-blue-600 text-white p-4 text-center">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
            <span>RUSTIKA HOUSE, 5080 Teboulba, Monastir, Tunisie</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-1" />
            <span>+1 206-214-2298</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            <span>support@rezilla.com</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-16 my-5 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <a className="block text-sky-600" href="#">
            <span className="sr-only">Home</span>
            <img src="/img/logo.png" alt="logo" className="w-3/4" />
          </a>
        </div>

        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-sky-600" href="#">Home</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-sky-600" href="#">About Us</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-sky-600" href="#">Blog</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-sky-600" href="#">Products</a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-sky-600" href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-sky-700"
              href="#"
            >
              Login
            </a>
          </div>

          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-500 transition hover:bg-gray-200"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded-full bg-gray-100 p-2 text-gray-600 transition hover:text-sky-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
