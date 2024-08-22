//app/admin/utilisateur/page.tsx
"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface User {
  _id: string;
  email: string;
  role: string;
}

const Utlisateur = () => {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Ne rien faire pendant le chargement
    if (!session || !session.user || session.user.role !== 'Admin') {
      router.push('/auth/signin');
    } else {
      fetchUsers();
    }
  }, [session, status, router]); // Ajoutez `router` dans le tableau des dépendances
  

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    
    
  };

  const handleDeleteUser = async (userId: string) => {
    await fetch(`/api/users/${userId}`, { method: 'DELETE' });
    fetchUsers();
  };

  const handleChangeRole = async (userId: string, newRole: string) => {
    await fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role: newRole }),
    });
    fetchUsers();
  };

  const toggleDropdown = (userId: string) => {
    setDropdownOpen(dropdownOpen === userId ? null : userId);
  };

  if (status === 'loading' || !session || !session.user) {
    return <div className="flex justify-center items-center h-screen text-xl text-gray-600">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-8 mt-12 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Liste Des Utilisateurs</h1>
      <div className="relative shadow-lg rounded-lg bg-white overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">
                Email
              </th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">
                Role
              </th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.email}
                </th>
                <td className="px-4 py-4">
                  {user.role}
                </td>
                <td className="px-4 py-4 relative">
                  <div className="relative inline-block text-left">
                    <button
                      id={`dropdownButton-${user._id}`}
                      onClick={() => toggleDropdown(user._id)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                    >
                      Change Role
                      <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>
                    {dropdownOpen === user._id && (
                      <div
                        id={`dropdown-${user._id}`}
                        className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                      >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <button
                              onClick={() => handleChangeRole(user._id, 'Rédacteur')}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Make Writer
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleChangeRole(user._id, 'Admin')}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Make Admin
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleChangeRole(user._id, 'Visitor')}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Make Visitor
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Utlisateur;
