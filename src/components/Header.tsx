"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Logo, locationIcone, phoneIcone, emailIcone } from 'public/img/image';
import Link from 'next/link';
import SignIn from '@/app/(auth)/signin/page'; // Ensure the path is correct

const Header: React.FC = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null); // Ref for modal container

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (modalRef.current && !modalRef.current.contains(target)) {
        setIsDropdownOpen(false);
        setIsMobileDropdownOpen(false);
        setIsModalOpen(false); // Close modal when clicking outside
      }
    };


    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigation = (url: string) => {
    try {
      router.push(url);
      setIsMenuOpen(false); // Optionally close menu after navigation
    } catch (err) {
      console.error('Navigation error:', err);
    }
  };

  // Toggle the main menu for desktop view
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setIsMobileDropdownOpen(false); // Close mobile dropdown when menu opens/closes
  };

  // Toggle the dropdown menu for user options
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  // Close the dropdown menu
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Toggle the dropdown menu for mobile view
  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(prev => !prev);
  };

  // Handle user sign-out
  const handleSignOut = async () => {
    await signOut();
    router.push('/signin');
    closeDropdown(); // Close dropdown when signing out
  };

  // Open or close modal
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <header className="bg-white">
      {/* InfoBar */}
      <div className="bg-blue-600 text-white p-2 text-center">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 centred">
          <div className="hidden sm:flex overflow-hidden items-center justify-center sm:justify-start text-xl sm:text-xl">
            <Image src={locationIcone} alt="Location Icon" className="mr-2" />
            <span>RUSTIKLink HOUSE, 5080 Teboulba, Monastir, Tunisie</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start text-xl sm:text-xl">
            <Image src={phoneIcone} alt="Phone Icon" className="mr-1 scale-50" />
            <span>+1 206-214-2298</span>
          </div>
          <div className="hidden sm:flex items-center justify-center sm:justify-start text-xl sm:text-xl">
            <Image src={emailIcone} alt="Email Icon" className="mr-1 scale-50" />
            <span>support@rezilla.com</span>
          </div>
        </div>
      </div>
      {/* NavBar */}
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-16 my-5 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link className="block text-primary" href="/">
            <span className="sr-only">Home</span>
            <Image src={Logo} alt="Logo" className="w-3/4" />
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center md:flex-grow">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link className="text-gray-500 transition hover:text-primary" href="/">Home</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-primary" href="#">About Us</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-primary" href="#">Blog</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-primary" href="/product">Products</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-primary" href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex md:items-center md:gap-4">
          {!session ? (
            <>
              <div className="sm:flex sm:gap-4">
                <button
                  onClick={toggleModal} // Open modal
                  className="rounded-full bg-primary px-10 py-2.5 text-sm font-medium text-white shadow transition hover:bg-primary"
                >
                  Login
                </button>
              </div>
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-full px-10 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200"
                  href="/signup"
                >
                  Register
                </Link>
              </div>
            </>
          ) : (
            <div className="relative dropdown">
              <button
                onClick={toggleDropdown}
                className="flex items-center rounded-full px-10 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faUser} className="text-xl" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                  <ul className="flex flex-col">
                    <li>
                      <span className="block px-4 py-2 text-gray-800">{session.user?.name}</span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 text-gray-800">Role: {session.user?.role}</span>
                    </li>
                    <li>
                      <Link href="/profile">
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeDropdown}>Profile</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex md:hidden items-center justify-center">
          <button onClick={toggleMenu} className="p-2 text-blue-600 transition hover:text-primary text-3xl dropdown">
            <FontAwesomeIcon icon={faBars} />
          </button>
          {session && (
            <div className="relative dropdown">
              <button
                onClick={toggleMobileDropdown}
                className="rounded-full bg-white border border-primary px-2.5 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200 ml-4"
              >
                <FontAwesomeIcon icon={faUser} className="text-xl" />
              </button>
              {isMobileDropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                  <ul className="flex flex-col">
                    <li>
                      <span className="block px-4 py-2 text-gray-800">{session.user?.name}</span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 text-gray-800">Role: {session.user?.role}</span>
                    </li>
                    <li>
                      <Link href="/profile">
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100"  onClick={() => setIsMobileDropdownOpen(false)}>Profile</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

{/* Mobile Menu */}
{isMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-center gap-4 text-sm">
                <li>
                  <span 
                    className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                    onClick={() => handleNavigation('/')}
                  >
                    Home
                  </span>
                </li>
                <li>
                  <span 
                    className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                    onClick={() => handleNavigation('/about')}
                  >
                    About Us
                  </span>
                </li>
                <li>
                  <span 
                    className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                    onClick={() => handleNavigation('/blog')}
                  >
                    Blog
                  </span>
                </li>
                <li>
                  <span 
                    className="text-gray-800 text-lg transition hover:text-primary font-bold cursor-pointer"
                    onClick={() => handleNavigation('/product')}
                  >
                    Products
                  </span>
                </li>
                <li>
                  <span 
                    className="text-gray-800 text-lg transition hover:text-primary border-b-2 px-24 pb-4 font-bold cursor-pointer"
                    onClick={() => handleNavigation('/contact')}
                  >
                    Contact
                  </span>
                </li>
              </ul>
            <div className="flex flex-row gap-4 py-10 justify-center items-center">
              {!session ? (
                <>
                  <div>
                  <button
                  onClick={toggleModal} // Open modal
                  className="rounded-full bg-primary px-10 py-2.5 text-sm font-medium text-white shadow transition hover:bg-primary"
                >
                  Login
                </button>
                  </div>
                  <div>
                    <Link className="rounded-full px-10 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200" href="/signup">
                      Register
                    </Link>
                  </div>
                </>
              ) : (
                <div>
                </div>
              )}
              </div>
          </nav>
        </div>
      )}
      
      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div
      ref={modalRef}
      className="rounded-lg shadow-lg w-full "
    >
      <button
        onClick={toggleModal}
        className="absolute top-4 right-6 text-white hover:text-orange-500 text-4xl"
      >
        &times;
      </button>
      <SignIn />
    </div>
  </div>
)}

    </header>
  );
};

export default Header;
