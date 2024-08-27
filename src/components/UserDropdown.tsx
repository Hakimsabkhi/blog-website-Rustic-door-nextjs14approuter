import React, { useState } from 'react';
import { User, Shield, Edit, LogOut } from 'lucide-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Session } from 'next-auth';

interface UserDropdownProps {
    session: Session;
    handleSignOut: () => Promise<void>;
    closeDropdown: () => void;
    toggleDropdown: () => void;
    isDropdownOpen: boolean;
    toggleMobileDropdown: () => void;
    isMobileDropdownOpen: boolean;
    toggleMenu: () => void; // Add this line
  }

  const UserDropdown: React.FC<UserDropdownProps> = ({
    session,
    handleSignOut,
    closeDropdown,
    toggleDropdown,
    isDropdownOpen,
    toggleMobileDropdown,
    isMobileDropdownOpen,
    toggleMenu, // Include this line
  }) => {
    return (
    <div>
      <div className="hidden md:flex md:items-center gap-4 sm:gap-0 md:gap-0 lg:gap-2 xl:gap-4">
        <div className="relative dropdown">
          <button
            onClick={toggleDropdown}
            className="flex items-center rounded-full px-10 py-2.5 text-sm font-medium text-primary transition hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg">
              <ul className="flex flex-col">
                <li className="flex items-center">
                  <User className="w-4 h-4 text-gray-800 ml-2" />
                  <span className="block px-4 py-2 text-gray-800">{session.user?.name}</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 text-gray-800 ml-2" />
                  <span className="block px-4 py-2 text-gray-800">Role: {session.user?.role}</span>
                </li>
                <li className="flex items-center">
                  <Link href="/profile" className="flex items-center">
                    <Edit className="w-4 h-4 text-gray-800 ml-2" />
                    <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeDropdown}>
                      Profile
                    </span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <LogOut className="w-4 h-4 text-gray-800 ml-2" />
                    <span
                      onClick={handleSignOut}
                      className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                    >
                      Sign Out
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
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
                  <li className="flex items-center">
                    <User className="w-4 h-4 text-gray-800 ml-2" />
                    <span className="block px-4 py-2 text-gray-800">{session.user?.name}</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-gray-800 ml-2" />
                    <span className="block px-4 py-2 text-gray-800">Role: {session.user?.role}</span>
                  </li>
                  <li className="flex items-center">
                    <Link href="/profile" className="flex items-center">
                      <Edit className="w-4 h-4 text-gray-800 ml-2" />
                      <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => toggleMobileDropdown()}>
                        Edit Profile
                      </span>
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link href="/" className="flex items-center">
                      <LogOut className="w-4 h-4 text-gray-800 ml-2" />
                      <span
                        onClick={handleSignOut}
                        className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                      >
                        Sign Out
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDropdown;
